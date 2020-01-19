using System;
using System.IO;
using System.Collections.Generic;
using System.Windows.Forms;
using System.Text;

namespace UBSearch {
    /// <summary>
    /// Clase que representa una lista de términos de El Libro de Urantia.
    /// </summary>
    public class TopicIndex {
        private readonly string comment = "#";
        private readonly string errorString = "{0}, línea {1}: {2}";
        private List<Term> terms = new List<Term>();
        private string[] filepaths = null;
        private List<string> errors = new List<string>();
        private ProgressBar progressBar = null;

        /// <summary>
        /// Crea un objeto TopicIndex que representa una lista de términos 
        /// de El Libro de Urantia.
        /// </summary>
        /// <param name="filepaths">Rutas de fichero TXT con los input.</param>
        /// <param name="progressBar">Barra de progreso en la que mostrar 
        /// progresos.</param>
        public TopicIndex(string[] filepaths, ProgressBar progressBar) {
            this.filepaths = filepaths;
            this.progressBar = progressBar;
            Read();
        }

        private void Read() {
            terms.Clear();
            errors.Clear();
            if (filepaths == null) return;

            string line, linePrevious = "", name, content;
            List<string> seeAlso, refs, refs2;
            int count = 0, level;
            FileInfo fileinfo = null;
            Term currentTerm = null;
            TermInfo currentTermInfo = null;
            int currentTermInfoIndex = -1;

            progressBar.Value = 0;
            progressBar.Maximum = filepaths.Length;

            for (int f = 0; f < filepaths.Length; f++) {
                fileinfo = new FileInfo(filepaths[f]);
                StreamReader stream = new StreamReader(filepaths[f]);

                count = 0;
                currentTermInfoIndex = -1;

                while ((line = stream.ReadLine()) != null) {
                    if (!line.StartsWith(comment)) {
                        if (line != "" && linePrevious == "") {
                            name = ExtractName(line);
                            seeAlso = ExtractSeeAlso(line);
                            refs = ExtractReferences(line);
                            if (name != "" && seeAlso != null && refs != null) {
                                currentTerm = new Term(name, seeAlso, refs);
                                terms.Add(currentTerm);
                            } else {
                                if (name == "") {
                                    errors.Add(String.Format(errorString, fileinfo.Name, count,
                                        "No se pudo extraer el nombre del término"));
                                }
                                if (seeAlso == null) {
                                    errors.Add(String.Format(errorString, fileinfo.Name, count,
                                        "No se pudo extraer los 'Vea también' del término"));
                                }
                                if (refs == null) {
                                    errors.Add(String.Format(errorString, fileinfo.Name, count,
                                        "No se pudo extraer las referencias del término"));
                                }
                            }
                        } else if (line != "" && currentTerm != null) {
                            content = ExtractContent(line);
                            refs2 = ExtractReferences(line);
                            level = ExtractLevel(line);
                            if (content != "" && refs2 != null) {
                                currentTermInfo = new TermInfo(content, level, refs2);
                                currentTermInfoIndex = currentTerm.AddInfo(currentTermInfo);
                            } else {

                            }
                        } else if (line == "" && currentTerm != null) {
                            currentTerm = null;
                        }
                        linePrevious = line;
                    }
                    count++;
                }
                stream.Close();
                progressBar.Value = f + 1;
            }
        }

        /// <summary>
        /// Procesa todos los términos y escribe un fichero estilo Wiki
        /// por cada uno de ellos.
        /// </summary>
        /// <param name="folder">Carpeta de salida.</param>
        public void WriteAsWiki(string folder) {
            progressBar.Value = 0;
            progressBar.Maximum = GetTermLength();

            Term term = null;
            List<TermInfo> infos = null;
            string filename = null, filepath = null, line = null;

            //Bucle por todos los términos
            for (int n = 0; n < GetTermLength(); n++) {
                term = terms[n];
                infos = term.Infos;
                filename = term.Name.Replace(" ", "_");
                filepath = Path.Combine(folder, filename);
                StreamWriter stream = new StreamWriter(filepath);

                //Primero escribimos el nivel cero
                TermInfo ti;
                StringBuilder sb = new StringBuilder();
                for(int t = 0; t < infos.Count; t++) {
                    ti = infos[t];
                    if (ti.Level == 0 && term.GetSubinfoLength(t) < 4) {
                        //TODO 
                    }
                }

                stream.WriteLine(line);

                stream.Close();
            }

            
        }

        /// <summary>
        /// Devuelve el término en el índice especificado.
        /// </summary>
        /// <param name="index">Índice del término empezando en cero.</param>
        /// <returns>Un objeto término.</returns>
        public Term GetTerm(int index) {
            if (index >= 0 && index < terms.Count) {
                return terms[index];
            } else return null;
        }

        /// <summary>
        /// Devuelve el número de términos.
        /// </summary>
        /// <returns>Número de términos.</returns>
        public int GetTermLength() {
            return terms.Count;
        }

        /// <summary>
        /// Devuelve el array de rutas de fichero.
        /// </summary>
        /// <returns>Array de rutas de fichero.</returns>
        public string[] GetFilepaths() {
            return filepaths;
        }

        private string ExtractName(string line) {
            string name = "";
            try {
                int i1 = line.IndexOf('(');
                int i2 = line.IndexOf('.');

                //Extraemos el nombre del término
                if (i1 != -1 && i2 == -1) {
                    name = line.Substring(0, i1);
                } else if (i1 == -1 && i2 != -1) {
                    name = line.Substring(0, i2);
                } else if (i1 != -1 && i2 != -1) {
                    name = line.Substring(0, Math.Min(i1, i2));
                } else {
                    name = line;
                }
                name = FlipName(name);
            } catch {
                return "";
            }
            return name;
        }

        private List<string> ExtractSeeAlso(string line) {
            List<string> seeAlso = new List<string>();
            try {
                string extract = "";
                int i1 = line.IndexOf("See also ");
                int i2 = line.IndexOf("See ");
                if (i1 != -1) {
                    extract = line.Substring(i1 + 9);
                } else if (i2 != -1) {
                    extract = line.Substring(i2 + 4);
                }
                extract = extract.Trim();
                if (extract != "") {
                    if (extract.Contains(";")) {
                        string[] seeAlsos = extract.Split(new char[] { ';' });
                        for (int n = 0; n < seeAlsos.Length; n++) {
                            seeAlso.Add(FlipName(seeAlsos[n]));
                        }
                    } else {
                        seeAlso.Add(FlipName(extract));
                    }
                }
            } catch {
                return null;
            }
            return seeAlso;
        }

        private List<string> ExtractReferences(string line) {
            List<string> refs = new List<string>();
            try {
                int i1 = line.IndexOf('(');
                int i2 = line.LastIndexOf(')');
                string extract = "";
                if (i1 != -1 && i2 != -1) {
                    extract = line.Substring(i1, i2 - i1);
                    string[] rr = extract.Split(new char[] { '(', ')' });
                    foreach (string r in rr) if (r.Trim() != "") refs.Add(r.Trim());
                }
            } catch {
                return null;
            }
            return refs;
        }

        private string ExtractContent(string line) {
            string content = "";
            try {
                int i1 = line.IndexOf('(');
                if (i1 == -1) {
                    content = line;
                } else {
                    content = line.Substring(0, i1);
                }
            } catch {
                content = "";
            }
            content = content.Trim();
            content = content[0].ToString().ToUpper() + content.Substring(1);
            return content;
        }

        private int ExtractLevel(string line) {
            int level = 0;
            for (int i = 0; i < line.Length; i++) {
                if (line[i] == '\t') {
                    level++;
                } else break;
            }
            return level;
        }

        private string FlipName(string name) {
            string flipName = name.Trim();
            int i3 = name.IndexOf(',');
            if (i3 != -1) {
                string[] subs = name.Split(new char[] { ',' });
                flipName = subs[1].Trim() + " " + subs[0].Trim();
            }
            return flipName;
        }
    }
}
