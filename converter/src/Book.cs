using System;
using System.IO;
using System.Collections.Generic;
using System.Windows.Forms;

namespace UBSearch {
    public class Book {
        private readonly string chapterStart = "\\chapter{";
        private readonly string sectionStart = "\\section*{";
        private readonly string oldidStart = "%\\textsuperscript{(";
        private readonly string parStart = "\\textsuperscript{";
        private readonly string commonEnd = "}";
        private readonly string errorString = "{0}, línea {1}: {2}";
        private string[] filepaths = null;
        //Parragraphs refs are duplicated in this list for faster search
        private List<Par> pars = new List<Par>();
        private ProgressBar progressBar = null;
        private List<Chapter> chapters = new List<Chapter>();
        private List<string> errors = new List<string>();

        public Book(string[] filepaths, ProgressBar progressBar) {
            this.filepaths = filepaths;
            this.progressBar = progressBar;
            Read();
        }

        private void Read() {
            pars.Clear();
            if (filepaths == null) return;

            string line, linePrevious = "", extract;
            int count = 0, linePreviousPos = 0;
            Chapter currentChapter = null;
            int currentChapterIndex = -1;
            Section currentSection = null;
            int currentSectionIndex = -1;
            string currentSectionID = "";
            Par currentPar = null;
            FileInfo fileinfo = null;

            progressBar.Value = 0;
            progressBar.Maximum = filepaths.Length;

            for (int f = 0; f < filepaths.Length; f++) {
                fileinfo = new FileInfo(filepaths[f]);
                StreamReader stream = new StreamReader(filepaths[f]);

                count = 0;
                linePreviousPos = 0;
                currentChapterIndex = -1;
                currentSectionIndex = -1;
                currentSectionID = "";

                while ((line = stream.ReadLine()) != null) {
                    if (line.StartsWith(chapterStart)) {
                        //Si es un documento
                        extract = CommonTasks.Extract(line, chapterStart, commonEnd);
                        if (extract == null) {
                            errors.Add(String.Format(errorString, fileinfo.Name, count,
                                "Chapter no se pudo extraer"));
                        } else {
                            currentChapterIndex++;
                            currentChapter = new Chapter(currentChapterIndex, extract);
                            chapters.Add(currentChapter);
                            currentSection = null;
                            currentSectionIndex++;
                            currentSectionID = currentChapterIndex.ToString() + ":" + 
                                currentSectionIndex.ToString();
                            currentSection = new Section(currentSectionIndex, 
                                currentSectionID, "");
                            currentChapter.AddSection(currentSection);
                        }
                    } else if (line.StartsWith(sectionStart)) {
                        //Si es una seccion
                        extract = CommonTasks.Extract(line, sectionStart, commonEnd);
                        if (extract == null) {
                            errors.Add(String.Format(errorString, fileinfo.Name, count,
                                "Section no se pudo extraer"));
                        } else {
                            currentSectionIndex++;
                            currentSectionID = currentChapterIndex.ToString() + ":" + 
                                currentSectionIndex.ToString();
                            currentSection = new Section(currentSectionIndex, 
                                currentSectionID, extract);
                            currentChapter.AddSection(currentSection);
                        }
                    } else if (line.StartsWith(oldidStart)) {
                        //Si es la línea con la antigua referencia
                        linePrevious = line;
                        linePreviousPos = count;
                    } else if (line.StartsWith(parStart)) {
                        //Si es un párrafo
                        if (linePreviousPos == count - 1) {
                            currentPar = new Par(line, linePrevious);
                            pars.Add(currentPar);
                            currentSection.AddPar(currentPar);
                        } else {
                            errors.Add(String.Format(errorString, fileinfo.Name, count,
                                "Línea previa incorrecta"));
                        }
                    } else if (line != "\\par" && line != "") {
                        errors.Add(String.Format(errorString, fileinfo.Name, count,
                            "Algo erróneo"));
                    }
                    count++;
                    
                }
                stream.Close();
                progressBar.Value = f + 1;
            }
            
        }

        public Par GetPar(int index) {
            if (index >= 0 && index < pars.Count) {
                return pars[index];
            } else return null;
        }

        public int GetParLength() {
            return pars.Count;
        }

        public string[] GetFilepaths() {
            return filepaths;
        }

        /// <summary>
        /// Devuelve una lista de extractos con las referencias y los fragmentos en las que se 
        /// encuentra el texto de búsqueda pero sin que sea en la forma de ninguna de la exclusiones.
        /// </summary>
        /// <param name="searchText">Texto de búsqueda.</param>
        /// <param name="excluded">Un array de textos que contienen el texto de búsqueda.</param>
        /// <returns>Lista de extractos.</returns>
        public List<Excerpt> Search(string searchText, string[] excluded) {
            List<Excerpt> result = new List<Excerpt>();
            if (GetParLength() == 0) return result;
            for (int p = 0; p < GetParLength(); p++) {
                Par par = GetPar(p);
                string refer = par.GetID();
                string content = par.GetContentCleaned();

                //Buscar recursivamente
                List<Position> found = CommonTasks.IndexesOf(content, searchText);

                List<Position> found2 = new List<Position>();
                if (found.Count > 0) {
                    if (excluded.Length > 0) {
                        List<Position> foundExcluded = new List<Position>();
                        for (int i = 0; i < excluded.Length; i++) {
                            List<Position> fExcluded = CommonTasks.IndexesOf(content, excluded[i]);
                            for (int j = 0; j < fExcluded.Count; j++) {
                                Position pos = new Position();
                                pos.Start = fExcluded[j].Start;
                                pos.End = fExcluded[j].End;
                                foundExcluded.Add(pos);
                            }
                        }
                        for (int i = 0; i < found.Count; i++) {
                            bool toExclude = false;
                            for (int j = 0; j < foundExcluded.Count; j++) {
                                if (found[i].Start >= foundExcluded[j].Start &&
                                    found[i].End <= foundExcluded[j].End) {
                                    toExclude = true;
                                }
                            }
                            if (!toExclude) {
                                found2.Add(found[i]);
                            }
                        }
                    } else {
                        for (int i = 0; i < found.Count; i++) {
                            found2.Add(found[i]);
                        }
                    }

                    //Obtener la posición mínima y máxima
                    int min = content.Length - 1, max = 0;
                    for (int i = 0; i < found2.Count; i++) {
                        if (found2[i].Start < min) min = found2[i].Start;
                        if (found2[i].End > max) max = found2[i].End;
                    }
                    Excerpt excerpt = GetExcerpt(content, refer, min, max);
                    result.Add(excerpt);
                }
            }
            return result;
        }

        private Excerpt GetExcerpt(string content, string refer, int start, int end) {
            Excerpt excerpt = new Excerpt();
            excerpt.Reference = refer;
            Position pos = new Position();
            pos.Start = start - 45;
            if (pos.Start < 0) pos.Start = 0;
            pos.End = end + 45;
            if (pos.End > content.Length - 1) pos.End = content.Length - 1;
            excerpt.Position = pos;
            excerpt.Extract = content.Substring(pos.Start, pos.End - pos.Start);
            return excerpt;
        }
    }
}
