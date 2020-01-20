using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    /// <summary>
    /// Clase que representa una información asociada a un término
    /// de El Libro de Urantia. Puede estar vinculada jerárquicamente
    /// a otra información, y contener o no una lista de referencias.
    /// Si no está vinculada es que es una información de primer nivel,
    /// o nivel cero.
    /// </summary>
    public class TermInfo {
        private string content = "";
        private int level = 0;
        private List<string> references = new List<string>();

        /// <summary>
        /// Crea un objeto que representa una información asociada a un
        /// término de El Libro de Urantia.
        /// </summary>
        /// <param name="content">Contenido de la información.</param>
        /// <param name="level">Nivel de esta información dentro de la
        /// jerarquía. El primer nivel es el cero.</param>
        /// <param name="references">Lista de referencias del libro donde
        /// aparece esta información.</param>
        public TermInfo(string content, int level, List<string> references) {
            this.content = content;
            this.level = level;
            this.references = references;
        }

        /// <summary>
        /// Devuelve o establece el contenido de la información.
        /// </summary>
        public string Content {
            get {
                return this.content;
            }
            set {
                this.content = value;
            }
        }

        /// <summary>
        /// Devuelve o establece el nivel de esta información dentro 
        /// de la jerarquía. El primer nivel es el cero.
        /// </summary>
        public int Level {
            get {
                return this.level;
            }
            set {
                this.level = value;
            }
        }

        /// <summary>
        /// Devuelve o establece la lista de referencias del libro
        /// donde aparece esta información.
        /// </summary>
        public List<string> References {
            get {
                return this.references;
            }
            set {
                this.references = value;
            }
        }

        /// <summary>
        /// Convierte esta información a formato wiki.
        /// Si aparece el nombre del término en forma de abreviatura
        /// se reemplaza por el nombre del término.
        /// </summary>
        /// <param name="abb">Abreviatura del término.</param>
        /// <param name="name">Nombre del término.</param>
        /// <returns></returns>
        public string ToWiki(string abb, string name) {
            StringBuilder sb = new StringBuilder();
            string content2 = content.Replace(abb, name);
            sb.Append(content2);

            if (References.Count > 0) {
                for (int n = 0; n < References.Count; n++) {
                    sb.Append(CommonTasks.RefToWiki(References[n]));
                    if (n > 0 && n != References.Count - 1) sb.Append(" ");
                }
            }
            return sb.ToString();
        }
    }
}
