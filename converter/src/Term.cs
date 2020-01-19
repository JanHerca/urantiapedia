using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    /// <summary>
    /// Clase que representa un término que aparece en El Libro de Urantia.
    /// Contiene una lista de TermInfo (informaciones), cada una con una lista
    /// de referencias del libro. El propio término en sí puede tener una lista
    /// de referencias del libro.
    /// Un término puede contener una lista de términos tipo "Ver también" (SeeAlso).
    /// Si un término no tiene TermInfo alguno y sólo tiene un término SeeAlso
    /// entonces ese término es una redirección.
    /// </summary>
    public class Term {
        private string name = "";
        private List<string> seeAlso = new List<string>();
        private List<TermInfo> infos = new List<TermInfo>();
        private List<string> references = new List<string>();

        /// <summary>
        /// Crea un objeto que representa un término de El Libro de Urantia.
        /// </summary>
        /// <param name="name">Nombre del término.</param>
        /// <param name="seeAlso">Lista de términos relacionados.</param>
        /// <param name="references">Lista de referencias.</param>
        public Term(string name, List<string> seeAlso, List<string> references) {
            this.name = name;
            this.seeAlso = seeAlso;
            this.references = references;
        }

        public string Name {
            get {
                return this.name;
            }
            set {
                this.name = value;
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

        public List<TermInfo> Infos {
            get {
                return this.infos;
            }
            set {
                this.infos = value;
            }
        }

        public int AddInfo(TermInfo info) {
            infos.Add(info);
            return infos.Count - 1;
        }

        public List<string> References {
            get {
                return this.references;
            }
            set {
                this.references = value;
            }
        }

        public bool IsRedirection() {
            return (this.infos.Count == 0 && this.seeAlso.Count == 1);
        }

        /// <summary>
        /// Devuelve el número de informaciones por debajo de la que tiene
        /// el índice dado.
        /// </summary>
        /// <param name="index">Índice de la información.</param>
        /// <returns>Número de subelementos en cualquier nivel.</returns>
        public int GetSubinfoLength(int index) {
            int count = 0;
            int level = infos[index].Level;
            if (index == infos.Count - 1) return 0;
            TermInfo info;
            for (int n = index + 1; n < infos.Count; n++) {
                info = infos[n];
                if (info.Level < level) count++;
                else break;
            }
            return count;
        }
    }
}
