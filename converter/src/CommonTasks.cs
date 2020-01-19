using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace UBSearch {
    public struct Position {
        public int Start;
        public int End;
    }

    public struct Excerpt {
        public string Reference;
        public string Extract;
        public Position Position;
    }

    public class CommonTasks {
        /// <summary>
        /// Devuelve las rutas de los ficheros de la carpeta dada.
        /// </summary>
        /// <param name="folder">Carpeta</param>
        /// <param name="extension">Extensión de los ficheros a buscar</param>
        /// <returns>Array de las rutas.</returns>
        public static string[] GetFiles(string folder, string extension) {
            string[] files = null;
            try {
                files = Directory.GetFiles(folder, extension);
            } catch (Exception ex) {
                throw ex;
            }
            //Comprobaciones
            if (files.Length == 0) {
                throw new FileNotFoundException("No se han encontrado ficheros " +
                    extension + " en la carpeta seleccionada.");
            }
            return files;
        }

        /// <summary>
        /// Extrae de un texto una porción delimitada por dos textos. Se extrae la primera aparición,
        /// las demás se ignoran.
        /// </summary>
        /// <param name="content">Texto del que extraer.</param>
        /// <param name="start">Texto delante.</param>
        /// <param name="end">Texto detrás.</param>
        /// <returns>Texto.</returns>
        public static string Extract(string content, string start, string end) {
            int index = content.IndexOf(start);
            if (index == -1) return null;
            int index2 = content.IndexOf(end, index);
            if (index2 == -1) return null;
            return content.Substring(index + start.Length, index2 - index - start.Length);
        }

        /// <summary>
        /// Devuelve una lista de todas las posiciones en las que un texto se da en una cadena.
        /// </summary>
        /// <param name="input">Cadena en la que buscar.</param>
        /// <param name="searchText">Texto de búsqueda.</param>
        /// <returns>Lista de posiciones.</returns>
        public static List<Position> IndexesOf(string input, string searchText) {
            List<Position> result = new List<Position>();
            int index = -1;
            while ((index = input.IndexOf(searchText, index + 1)) != -1) {
                Position p = new Position();
                p.Start = index;
                p.End = index + searchText.Length;
                result.Add(p);
            }
            return result;
        }

        /// <summary>
        /// Compacta referencias. Por ejemplo, en lugar de tener 124:8.1, 124:8.2, 124:8.3
        /// tendríamos 124:8.1-3. Sólo funciona con párrafos completamente consecutivos.
        /// </summary>
        /// <param name="refs">Texto con las referencias separada por comas.</param>
        /// <returns>Texto con las referencias más compactas.</returns>
        public static string ReduceRefs(string refs) {
            string[] arRefs = refs.Split(new char[] { ',' });
            List<string> output = new List<string>();
            int last = -1;
            for (int n = 0; n < arRefs.Length; n++) {
                string refer = arRefs[n].Trim();
                if (n == 0) {
                    output.Add(refer);
                } else {
                    string lastOutput = output[output.Count - 1];

                    string[] arSubrefs1 = lastOutput.Split(new char[] { '.' });
                    string sectionRef1 = arSubrefs1[0];
                    int par1 = Int32.Parse(arSubrefs1[1]);

                    string[] arSubrefs2 = refer.Split(new char[] { '.' });
                    string sectionRef2 = arSubrefs2[0];
                    int par2 = Int32.Parse(arSubrefs2[1]);

                    if (sectionRef1 == sectionRef2 && (par2 == par1 + 1 || par2 == last + 1)) {
                        last = par2;
                        if (n == arRefs.Length - 1) {
                            output[output.Count - 1] += "-" + last.ToString();
                        }
                    } else {
                        if (last != -1) {
                            output[output.Count - 1] += "-" + last.ToString();
                            last = -1;
                        }
                        output.Add(refer);
                    }
                }
            }

            List<string> output2 = new List<string>();
            string joined = "";
            for (int n = 0; n < output.Count; n++) {
                string item = output[n];
                if (n == 0) {
                    output2.Add(item);

                } else {
                    string lastItem = output2[output2.Count - 1];

                    string[] arSubrefs1 = lastItem.Split(new char[] { '.' });
                    string sectionRef1 = arSubrefs1[0];

                    string[] arSubrefs2 = item.Split(new char[] { '.' });
                    string sectionRef2 = arSubrefs2[0];
                    string par2 = arSubrefs2[1];

                    if (sectionRef1 == sectionRef2) {
                        joined += "·" + par2;
                        if (n == output.Count - 1) {
                            output2[output2.Count - 1] += joined;
                            joined = "";
                        }
                    } else {
                        if (joined != "") {
                            output2[output2.Count - 1] += joined;
                            joined = "";
                        }
                        output2.Add(item);
                    }

                }
            }

            StringBuilder sb = new StringBuilder();
            for (int n = 0; n < output2.Count; n++) {
                sb.Append(output2[n] + (n == output2.Count - 1 ? "" : ", "));
            }

            return sb.ToString();
        }

        /// <summary>
        /// Convierte una referencia a estilo wiki.
        /// Ejemplos: 
        /// 8:2 > {{luref|8|2|1|}}
        /// 10:8.3 > {{luref|10|8|3|.3}}
        /// 43:5.1-3 > {{luref|43|5|1|.1-3}}
        /// 125:6.1sec > {{luref|125|6|1|.1sec}}
        /// 80:4.6,9 > {{luref|80|4|6|.6,9}}
        /// </summary>
        /// <param name="reference">Referencia.</param>
        /// <returns>Referencia en estilo Wiki.</returns>
        public static string RefToWiki(string reference) {
            string[] nums = reference.Split(new char[] { ':' });
            string wiki = "";
            string template = "{{luref|{0}|{1}|{2}|{3}}}";
            if (nums.Length == 2) {
                int i = nums[1].IndexOf('.');
                if (i == -1) {
                    wiki = String.Format(template, nums[0], nums[1], "1", "");
                } else {
                    string n1 = nums[1].Substring(0, i);
                    string n2 = nums[1].Substring(i + 1);
                    string[] nn = n2.Split(new char[] { ',', '.', '-' });
                    wiki = String.Format(template, nums[0], n1, nn[0], n2);
                }
            }
            return wiki;
        }
    }
}
