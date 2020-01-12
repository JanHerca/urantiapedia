using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    class Section {
        private int index = 0;
        private string id = "";
        private string title = "";
        private List<Par> pars = new List<Par>();

        public Section(int index, string id, string title) {
            this.index = index;
            this.id = id;
            this.title = title;
        }

        /// <summary>
        /// Returns the index of the section. Section indexes start in zero
        /// and the zero section is a section without title. This zero section
        /// always exist but can be empty, without parragraphs.
        /// </summary>
        /// <returns>Index of section starting in zero.</returns>
        public int GetIndex() {
            return index;
        }

        /// <summary>
        /// Returns the unique identifier of the section with the 
        /// format {chapter_index}:{section_index}.
        /// </summary>
        /// <returns>Identifier of the section.</returns>
        public string GetID() {
            return id;
        }

        /// <summary>
        /// Returns the title of the section. The title always include
        /// the index in the start.
        /// </summary>
        /// <returns>The title of the section.</returns>
        public string GetTitle() {
            return title;
        }

        /// <summary>
        /// Returns the number of parragraphs of the section.
        /// </summary>
        /// <returns>The number of parragraphs.</returns>
        public int GetParLength() {
            return pars.Count;
        }

        /// <summary>
        /// Returns a parragraph or null if the index passed not exist.
        /// </summary>
        /// <param name="index">Index of parragraph starting at zero.</param>
        /// <returns>The parragraph or null.</returns>
        public Par GetPar(int index) {
            if (index >= 0 && index < pars.Count) {
                return pars[index];
            } else return null;
        }

        /// <summary>
        /// Adds a parragraph.
        /// </summary>
        /// <param name="par">Parragraph.</param>
        public void AddPar(Par par) {
            pars.Add(par);
        }
    }
}
