using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    public class Par {
        private readonly string footnoteStart = "\\footnote{";
        private readonly string idStart = "\\textsuperscript{";
        private readonly string oldidStart = "%\\textsuperscript{(";
        private string content = null;
        private string otherContent = null;
        private string id = "";
        private string oldid = null;
        private List<Footnote> footnotes = new List<Footnote>();

        public Par(string content, string otherContent) {
            this.content = content;
            this.otherContent = otherContent;
            ExtractID();
            ExtractOldID();
            ExtractFootnotes();
        }

        private void ExtractFootnotes() {
            footnotes.Clear();
            if (content.IndexOf(footnoteStart) == -1) return;

            int i = 0, open = 0, index;
            char c;
            while (i < content.Length) {
                index = content.IndexOf(footnoteStart, i);
                if (index == -1) break;
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
        }

        private void ExtractID() {
            string extract = Book.Extract(content, idStart, "}");
            if (extract != null) {
                id = extract;
            }
        }

        private void ExtractOldID() {
            string extract = Book.Extract(otherContent, oldidStart, "}");
            if (extract != null) {
                oldid = extract;
            }
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
        /// Returns the ID of parragraph.
        /// </summary>
        /// <returns>The ID.</returns>
        public string GetID() {
            return id;
        }

        /// <summary>
        /// Returns the old ID of parragraph.
        /// The old identifier is based on number pages of english version,
        /// not in sections.
        /// </summary>
        /// <returns>The old ID.</returns>
        public string GetOldID() {
            return oldid;
        }
    }
}
