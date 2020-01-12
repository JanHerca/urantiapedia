using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    
    public class FootnotePart {
        private readonly string partStart = "\\textit{";
        private string content = null;
        private string text = null;
        private string[] references = null;
        private readonly string[] abreviaturas = new string[] {
                "Gn", "Ex", "Lv", "Nm", "Dt", "Jos",
                "Jue", "Rt", "1 S", "2 S", "1 R", "2 R",
                "1 Cr", "2 Cr", "Esd", "Neh", "Est",
                "1 Mac", "2 Mac", "Job", "Sal", "Pr",
                "Ec", "Cnt", "Eclo",
                "Sab", "Is", "Jer", "Lm", "Bar",
                "Ez", "Dn", "Os", "Jl", "Am", "Abd", "Jon", "Miq",
                "Nah", "Hab", "Sof", "Hag", "Zac", "Mal",
                "Mt", "Mc", "Lc", "Jn", "Hch", "Ro",
                "1 Co", "2 Co", "Gl", "Ef", "Flp",
                "Col", "1 Ts", "2 Ts", "1 Ti", "2 Ti",
                "Tit", "Flm", "Heb", "Stg", "1 P", "2 P", "1 Jn",
                "2 Jn", "3 Jn", "Jud", "Ap", "Bel",
                "Man", "Tb", "1 Hen", "AsMo"
            };
        private bool hasRefRepeated = false;

        public FootnotePart(string content) {
            this.content = content;
            ExtractTextAndReferences();
            CheckRepeatedReference();
        }

        private bool ExtractTextAndReferences() {
            if (content == null) return false;
            if (!content.StartsWith(partStart)) return false;
            int index = content.IndexOf("}");
            if (index == -1) return false;
            text = content.Substring(partStart.Length, index - partStart.Length);
            string refs = content.Substring(index);
            if (refs.StartsWith("}:")) {
                refs = refs.Substring(2);
            }
            references = refs.Split(new char[] { ';' });
            for (int n = 0; n < references.Length; n++) references[n] = references[n].Trim();
            return true;
        }

        public void CheckRepeatedReference() {
            hasRefRepeated = false;
            if (references == null) return;
            int contador = 0;
            for (int n = 0; n < abreviaturas.Length; n++) {
                string ab = abreviaturas[n];
                contador = 0;
                for (int m = 0; m < references.Length; m++) {
                    if (!references[m].StartsWith(ab)) continue;
                    string[] parts = references[m].Split(new char[] { ' ' });
                    if (parts.Length > 1) {
                        if (parts[0] == ab) contador++;
                    } else {
                        contador = 2; //La referencia está mal así que la marcamos igualmente
                        break;
                    }
                }
                if (contador > 1) {
                    hasRefRepeated = true;
                    break;
                }
            }
        }

        public bool HasReferenceRepeated() {
            return hasRefRepeated;
        }

        public string GetText() {
            return this.text;
        }

        public string[] GetReferences() {
            return this.references;
        }
    }
}
