using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    public class Par {
        private readonly string footnoteStart = "\\footnote{";
        private readonly string idStart = "\\textsuperscript{";
        private readonly string oldidStart = "%\\textsuperscript{(";
        private readonly string oldidEnd = ")}";
        private readonly string commonEnd = "}";
        private readonly string italicStart = "\\textit{";

        // El párrafo tal y como viene del fichero LaTeX
        private string content = null;
        // La línea previa, con la referencia antigua por página
        private string otherContent = null;
        // El párrafo pero libre de notas al pie y de cualquier marcado
        private string contentCleaned = null;
        private string id = "";
        private string oldid = null;
        private List<Footnote> footnotes = new List<Footnote>();

        /// <summary>
        /// Constructor de un párrafo.
        /// </summary>
        /// <param name="content">El texto completo del párrafo.</param>
        /// <param name="otherContent">El texto completo de la línea
        /// anterior al párrafo, que contiene la referencia según
        /// el estilo antiguo, mediante número de página.</param>
        public Par(string content, string otherContent) {
            this.content = content;
            this.otherContent = otherContent;
            ExtractID();
            ExtractOldID();
            ExtractFootnotes();
            ExtractCleaned();
        }

        private void ExtractFootnotes() {
            footnotes.Clear();
            if (content.IndexOf(footnoteStart) == -1) {
                this.contentCleaned = content;
                return;
            }

            int i = 0, open = 0, index;
            char c;
            StringBuilder sb = new StringBuilder();
            while (i < content.Length) {
                index = content.IndexOf(footnoteStart, i);
                if (index == -1) {
                    sb.Append(content.Substring(i));
                    break;
                } else {
                    sb.Append(content.Substring(i, index - i));
                }

                i = index + footnoteStart.Length;
                open = 1;
                while (open > 0) {
                    c = content[i];
                    if (c == '{') open++;
                    else if (c == '}') open--;
                    i++;
                }
                footnotes.Add(new Footnote(content.Substring(index + footnoteStart.Length, 
                    i - index - footnoteStart.Length - 1)));
            }
            this.contentCleaned = sb.ToString();
        }

        private void ExtractCleaned() {
            int i = this.contentCleaned.IndexOf(commonEnd);
            string cleaned = this.contentCleaned.Substring(i + 1);
            i = 0;
            cleaned = cleaned.Replace(italicStart, "");
            cleaned = cleaned.Replace(commonEnd, "");
            this.contentCleaned = cleaned;
        }

        private void ExtractID() {
            string extract = CommonTasks.Extract(content, idStart, commonEnd);
            if (extract != null) {
                id = extract;
            }
        }

        private void ExtractOldID() {
            string extract = CommonTasks.Extract(otherContent, oldidStart, oldidEnd);
            if (extract != null) {
                oldid = extract;
            }
        }

        public string GetContent() {
            return content;
        }

        public string GetContentCleaned() {
            return contentCleaned;
        }

        public Footnote GetFootnote(int index) {
            if (index >= 0 && index < footnotes.Count) {
                return footnotes[index];
            } else return null;
        }

        public int GetFootnotesLength() {
            return footnotes.Count;
        }

        /// <summary>
        /// Devuelve la referencia moderna, usando sección.
        /// </summary>
        /// <returns>Referencia.</returns>
        public string GetID() {
            return id;
        }

        /// <summary>
        /// Devuelve la referencia antigua, usando página.
        /// </summary>
        /// <returns>Referencia.</returns>
        public string GetOldID() {
            return oldid;
        }
    }
}
