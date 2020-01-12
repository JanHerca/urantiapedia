using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    public class Footnote {
        private readonly string partStart = "\\textit{";
        private string content = null;
        private List<FootnotePart> footnoteParts = new List<FootnotePart>();

        public Footnote(string content) {
            this.content = content;
            ExtractParts();
        }

        private bool ExtractParts() {
            footnoteParts.Clear();
            if (content.IndexOf(partStart) == -1) {
                return false;
            }

            int i = 0, index, index2;
            while (i < content.Length) {
                index = content.IndexOf(partStart, i);
                if (index == -1) break;
                index2 = content.IndexOf(partStart, index + partStart.Length);
                if (index2 == -1) {
                    footnoteParts.Add(new FootnotePart(content.Substring(index)));
                    break;
                } else {
                    footnoteParts.Add(new FootnotePart(content.Substring(index, index2 - index)));
                    i = index2;
                }
            }
            return true;
        }

        public FootnotePart GetFootnotePart(int index) {
            if (index >= 0 && index < footnoteParts.Count) {
                return footnoteParts[index];
            } else return null;
        }

        public int GetFootnotePartsLength() {
            return footnoteParts.Count;
        }
    }
}
