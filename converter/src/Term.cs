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

        /// <summary>
        /// Devuelve o establece el nombre del término.
        /// </summary>
        public string Name {
            get {
                return this.name;
            }
            set {
                this.name = value;
            }
        }

        /// <summary>
        /// Devuelve la abreviatura del nombre del término.
        /// </summary>
        /// <returns>Abreviatura.</returns>
        public string GetAbbreviation() {
            string[] subs = this.name.Split(new char[] { ' ' });
            string abb = "";
            foreach (string a in subs) abb += a[0] + ".";
            return abb;
        }

        /// <summary>
        /// Devuelve o establece la lista de términos relacionados.
        /// </summary>
        public List<string> SeeAlso {
            get {
                return this.seeAlso;
            }
            set {
                this.seeAlso = value;
            }
        }

        /// <summary>
        /// Devuelve o establece la lista de informaciones de este término.
        /// </summary>
        public List<TermInfo> Infos {
            get {
                return this.infos;
            }
            set {
                this.infos = value;
            }
        }

        /// <summary>
        /// Añade una nueva información al término.
        /// </summary>
        /// <param name="info">Información a añadir.</param>
        /// <returns>Índice que ocupa la nueva información en la lista.</returns>
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

        /// <summary>
        /// Devuelve true si este término es una redirección, es decir,
        /// si no contiene ninguna información y sólo tiene un término
        /// relacionado.
        /// </summary>
        /// <returns>True o False.</returns>
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
                if (info.Level > level) count++;
                else break;
            }
            return count;
        }

        /// <summary>
        /// Devuelve una representación en forma de texto de este objeto.
        /// </summary>
        /// <returns>Texto.</returns>
        public override string ToString() {
            StringBuilder sb = new StringBuilder();
            sb.Append(Name + ": ");
            foreach (string seeAlso in SeeAlso) sb.Append(seeAlso + " | ");
            foreach (string r in References) sb.Append(r + " | ");
            sb.Append("\r\n");
            foreach (TermInfo ti in Infos) {
                sb.Append("[" + ti.Level.ToString() + "] " + ti.Content + ": ");
                foreach (string r in ti.References) sb.Append(r + " | ");
                sb.Append("\r\n");
            }
            sb.Append("--------------------------------------------\r\n");
            return sb.ToString();
        }
    }
}
