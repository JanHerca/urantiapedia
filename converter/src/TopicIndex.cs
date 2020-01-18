using System;
using System.IO;
using System.Collections.Generic;
using System.Windows.Forms;

namespace UBSearch {
    /// <summary>
    /// Clase que representa una lista de términos de El Libro de Urantia.
    /// </summary>
    public class TopicIndex {
        private readonly string comment = "#";
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
            if (filepaths == null) return;

            string line, linePrevious = "", name;
            int count = 0;
            FileInfo fileinfo = null;
            Term currentTerm = null;

            progressBar.Value = 0;
            progressBar.Maximum = filepaths.Length;

            for (int f = 0; f < filepaths.Length; f++) {
                fileinfo = new FileInfo(filepaths[f]);
                StreamReader stream = new StreamReader(filepaths[f]);

                count = 0;

                while ((line = stream.ReadLine()) != null) {
                    if (!line.StartsWith(comment)) {
                        if (line != "" && linePrevious == "") {
                            name = ExtractName(line);
                            if (name != "") {
                                currentTerm = new Term(name);

                                terms.Add(currentTerm);
                            }
                        } else if (line == "" && currentTerm != null) {

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
            name = name.Trim();
            int i3 = name.IndexOf(',');
            if (i3 != -1) {
                string[] subs = name.Split(new char[] { ',' });
                name = subs[1].Trim() + " " + subs[0].Trim();
            }
            return name;
        }
    }
}
