using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    /// <summary>
    /// Clase que contiene una representación en memoria de un documento
    /// de El Libro de Urantia. Contiene una lista de Section (secciones).
    /// Siempre hay una sección cero incluso si no contiene párrafos. En esta
    /// sección es donde están los párrafos anteriores a la sección 1 de un
    /// documento.
    /// </summary>
    class Paper {
        private int index = 0;
        private string title = "";
        private List<Section> sections = new List<Section>();

        /// <summary>
        /// Crea un nuevo objeto Paper con un documento de El Libro de Urantia.
        /// </summary>
        /// <param name="index">Índice del documento empezando en cero.</param>
        /// <param name="title">Título del documento.</param>
        public Paper(int index, string title) {
            this.index = index;
            this.title = title;
        }

        /// <summary>
        /// Devuelve el índice del documento empezando en cero.
        /// El documento cero es el Prólogo.
        /// </summary>
        /// <returns>Índice del documento.</returns>
        public int GetIndex() {
            return this.index;
        }

        /// <summary>
        /// Devuelve el título del capítulo.
        /// </summary>
        /// <returns>El título.</returns>
        public string GetTitle() {
            return this.title;
        }

        /// <summary>
        /// Devuelve el número de secciones.
        /// Siempre hay una sección cero incluso si no contiene
        /// párrafos.
        /// </summary>
        /// <returns>Número de secciones.</returns>
        public int GetSectionLength() {
            return this.sections.Count;
        }

        /// <summary>
        /// Devuelve la sección en el índice dato o null si no existe.
        /// </summary>
        /// <param name="index">El índice.</param>
        /// <returns>El objeto con la sección.</returns>
        public Section GetSection(int index) {
            if (index >= 0 && index < sections.Count) {
                return sections[index];
            } else return null;
        }

        /// <summary>
        /// Añade una sección al final de las existentes.
        /// </summary>
        /// <param name="section">El objeto sección a añadir.</param>
        public void AddSection(Section section) {
            this.sections.Add(section);
        }

    }
}
