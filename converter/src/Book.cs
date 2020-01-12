using System.IO;
using System.Collections.Generic;
using System.Windows.Forms;

namespace UBSearch {
    public class Book {
        private readonly string chapterStart = "\\chapter{";
        private readonly string sectionStart = "\\section*{";
        private readonly string oldidStart = "%\\textsuperscript{(";
        private readonly string parStart = "\\textsuperscript{";
        private string filepath = null;
        private List<Par> pars = new List<Par>();
        private ProgressBar progressBar = null;
        private int numLines = 0;
        private List<Chapter> chapters = new List<Chapter>();
        private List<string> errores = new List<string>();

        public Book(string filepath, ProgressBar progressBar) {
            this.filepath = filepath;
            this.progressBar = progressBar;
            Read();
        }

        private void Read() {
            pars.Clear();
            if (filepath == null) return;
            StreamReader stream = new StreamReader(filepath);
            //Contar lineas existentes
            string linea, lineaPrevia = "", extract;
            numLines = 0;
            while ((linea = stream.ReadLine()) != null) {
                numLines++;
            }
            int contador = 0, lineaPreviaPos = 0;
            Chapter currentChapter = null;
            int currentChapterIndex = -1;
            Section currentSection = null;
            int currentSectionIndex = -1;
            string currentSectionID = "";
            Par currentPar = null;

            progressBar.Value = 0;
            progressBar.Maximum = numLines;
            stream.DiscardBufferedData();
            stream.BaseStream.Seek(0, SeekOrigin.Begin);
            while ((linea = stream.ReadLine()) != null) {
                if (linea.StartsWith(chapterStart)) {
                    //Si es un documento
                    extract = Book.Extract(linea, chapterStart, "}");
                    if (extract == null ) {
                        errores.Add("Chapter no se pudo extraer en línea " + contador.ToString());
                    } else {
                        currentChapterIndex++;
                        currentChapter = new Chapter(currentChapterIndex, extract);
                        chapters.Add(currentChapter);
                        currentSection = null;
                        currentSectionIndex = -1;
                    }
                } else if (linea.StartsWith(sectionStart)) {
                    //Si es una seccion
                    extract = Book.Extract(linea, sectionStart, "}");
                    if (extract == null) {
                        errores.Add("Section no se pudo extraer en línea " + contador.ToString());
                    } else {
                        currentSectionIndex++;
                        currentSectionID = currentChapterIndex.ToString() + ":" + currentSectionIndex.ToString();
                        currentSection = new Section(currentSectionIndex, currentSectionID, extract);
                        currentChapter.AddSection(currentSection);
                    }
                } else if (linea.StartsWith(oldidStart)) {
                    //Si es un párrafo con la antigua referencia
                    lineaPrevia = linea;
                    lineaPreviaPos = contador;
                } else if (linea.StartsWith(parStart)) {
                    //Si es un párrafo en el que hay footnotes
                    if (lineaPreviaPos == contador - 1) {
                        currentPar = new Par(linea, lineaPrevia);
                        pars.Add(currentPar);
                        currentSection.AddPar(currentPar);
                    } else {
                        errores.Add("Línea previa incorrecta en línea " + contador.ToString());
                    }
                } else if (lineaPreviaPos > 0) {
                    errores.Add("Algo pasa aquí: " + contador.ToString());
                    errores.Add("Algo pasa aquí: " + contador.ToString());
                    errores.Add("Algo pasa aquí: " + contador.ToString());
                }
                contador++;
                progressBar.Value = contador;
            }
            stream.Close();
        }

        public int GetNumLines() {
            return numLines;
        }

        public Par GetPar(int index) {
            if (index >= 0 && index < pars.Count) {
                return pars[index];
            } else return null;
        }

        public int GetParLength() {
            return pars.Count;
        }

        public string GetFilepath() {
            return filepath;
        }

        public static string Extract(string content, string start, string end) {
            int index = content.IndexOf(start);
            if (index == -1) return null;
            int index2 = content.IndexOf(end, index);
            if (index2 == -1) return null;
            return content.Substring(index + start.Length, index2 - index - start.Length);
        }
    }
}
