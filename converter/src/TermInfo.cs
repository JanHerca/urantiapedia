using System;
using System.Collections.Generic;
using System.Text;

namespace UBSearch {
    /// <summary>
    /// Clase que representa una información asociada a un término
    /// de El Libro de Urantia. Puede estar vinculada jerárquicamente
    /// a otra información, y contener o no una lista de referencias.
    /// Si no está vinculada es que es una información de primer nivel.
    /// </summary>
    public class TermInfo {
        private string content = "";
        private TermInfo parent = null;
        private List<string> references = new List<string>();

        public TermInfo(string content, TermInfo parent) {
            this.content = content;
        }
    }
}
