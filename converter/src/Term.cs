using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    /// <summary>
    /// Clase que representa un término que aparece en El Libro de Urantia.
    /// Contiene una lista de TermInfo (informaciones), cada una con una lista
    /// de referencias del libro.
    /// Un término puede ser una redirección a otro término.
    /// Un término puede contener una lista de términos tipo "Ver también".
    /// </summary>
    public class Term {
        private string name = "";
        private string redirectName = null;
        private List<string> seeAlso = new List<string>();

        /// <summary>
        /// Crea un objeto que representa un término de El Libro de Urantia.
        /// </summary>
        /// <param name="name">Nombre del término.</param>
        public Term(string name) {
            this.name = name;
        }

        public string Name {
            get {
                return this.name;
            }
            set {
                this.name = value;
            }
        }

        public string RedirectName {
            get {
                return this.redirectName;
            }
            set {
                this.redirectName = value;
            }
        }

        public List<string> SeeAlso {
            get {
                return this.seeAlso;
            }
            set {
                this.seeAlso = value;
            }
        }
    }
}
