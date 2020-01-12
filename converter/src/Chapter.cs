using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    class Chapter {
        private int index = 0;
        private string title = "";
        private List<Section> sections = new List<Section>();

        public Chapter(int index, string title) {
            this.index = index;
            this.title = title;
        }

        /// <summary>
        /// Returns the index of the chapter starting in zero.
        /// The chapter zero is the prologue.
        /// </summary>
        /// <returns>Index of the chapter.</returns>
        public int GetIndex() {
            return this.index;
        }

        /// <summary>
        /// Returns the title of the chapter.
        /// </summary>
        /// <returns>The title.</returns>
        public string GetTitle() {
            return this.title;
        }

        /// <summary>
        /// Returns the number of sections.
        /// There is always a section zero even if it has no
        /// parragraphs in it.
        /// </summary>
        /// <returns>Number of sections.</returns>
        public int GetSectionLength() {
            return this.sections.Count;
        }

        /// <summary>
        /// Returns the section at the given index or null if not exist.
        /// </summary>
        /// <param name="index">The index.</param>
        /// <returns>The section.</returns>
        public Section GetSection(int index) {
            if (index >= 0 && index < sections.Count) {
                return sections[index];
            } else return null;
        }

        /// <summary>
        /// Adds a section.
        /// </summary>
        /// <param name="section">The section.</param>
        public void AddSection(Section section) {
            this.sections.Add(section);
        }

    }
}
