using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Globalization;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace UBSearch {
    public partial class Form1 : Form {

        private struct Posicion {
            public int Inicio;
            public int Fin;
        }

        public Form1() {
            InitializeComponent();
        }

        private void buttonBuscar_Click(object sender, EventArgs e) {
            this.label7.Text = "0";

            string[] latexFiles = GetLatexFiles();
            if (latexFiles == null) return;

            string cadena = this.textBoxCadenas.Text;
            if (cadena.Length == 0) {
                MessageBox.Show("Introducir cadena de búsqueda.");
                return;
            }
            bool hayexclusion = (this.textBoxExclusion.Text != string.Empty);
            string[] exclusion = new string[] { };
            if (hayexclusion) {
                exclusion = this.textBoxExclusion.Text.Split(new char[] { ',' });
                for (int i = 0; i < exclusion.Length; i++) {
                    exclusion[i] = exclusion[i].Trim();
                    if (exclusion[i].IndexOf(cadena) == -1) {
                        MessageBox.Show("La cadena de exclusión " + exclusion[i] + 
                            " no contiene la cadena " + cadena + ".");
                        return;
                    }
                }
            }

            //Leer fichero LateX
            int contador, total, indice, inicio, fin;
            int posValida = 0, posValidaInicio = 0, posValidaFin = 0;
            string linea, referencia, log = "";
            string busqueda = "\\textsuperscript{";
            bool incluido = true;
            List<string> resultados = new List<string>();
            System.IO.StreamReader fichero;

            for (int f = 0; f < latexFiles.Length; f++) {
                contador = 0;
                total = 0;
                indice = -1;
                posValida = 0;
                posValidaInicio = 0;
                posValidaFin = 0;
                fichero = new System.IO.StreamReader(latexFiles[f]);

                //Contar lineas existentes
                while ((linea = fichero.ReadLine()) != null) {
                    total++;
                }
                this.progressBar1.Maximum = total;
                fichero.DiscardBufferedData();
                fichero.BaseStream.Seek(0, System.IO.SeekOrigin.Begin);

                while ((linea = fichero.ReadLine()) != null) {
                    incluido = false;
                    //Buscar recursivamente
                    List<Posicion> encuentros = this.IndexesOf(linea, cadena);


                    if (encuentros.Count > 0) {
                        if (hayexclusion) {
                            List<Posicion> encuentrosExclusiones = new List<Posicion>();
                            for (int i = 0; i < exclusion.Length; i++) {
                                List<Posicion> encuentrosExclusion = this.IndexesOf(linea, exclusion[i]);
                                for (int j = 0; j < encuentrosExclusion.Count; j++) {
                                    Posicion p = new Posicion();
                                    p.Inicio = encuentrosExclusion[j].Inicio;
                                    p.Fin = encuentrosExclusion[j].Fin;
                                    encuentrosExclusiones.Add(p);
                                }
                            }
                            for (int i = 0; i < encuentros.Count; i++) {
                                bool excluida = false;
                                int inicial = encuentros[i].Inicio;
                                for (int j = 0; j < encuentrosExclusiones.Count; j++) {
                                    int min = encuentrosExclusiones[j].Inicio;
                                    int max = encuentrosExclusiones[j].Fin;
                                    if (min < inicial && inicial < max) {
                                        excluida = true;
                                    }
                                }
                                if (!excluida) {
                                    incluido = true;
                                    posValida = i;
                                    break;
                                }
                            }
                        } else {
                            incluido = true;
                            posValida = 0;
                        }

                        if (incluido) {
                            //Obtener la referencia
                            indice = linea.IndexOf(busqueda);
                            if (indice != -1) {
                                inicio = indice + busqueda.Length;
                                fin = linea.IndexOf('}', inicio);
                                referencia = linea.Substring(inicio, fin - inicio);
                                //Añadir a resultados
                                resultados.Add(referencia);
                                posValidaInicio = encuentros[posValida].Inicio - 45;
                                if (posValidaInicio <= fin) posValidaInicio = fin + 1;
                                posValidaFin = encuentros[posValida].Fin + 45;
                                if (posValidaFin >= linea.Length) posValidaFin = linea.Length - 1;
                                log += referencia + "   " + linea.Substring(posValidaInicio, posValidaFin - posValidaInicio) + "\r\n";
                                this.textBoxLog.Text = log;
                            }
                        }
                    }
                    contador++;
                    this.progressBar1.Value = contador;
                }

                fichero.Close();
            }
            //Presentar resultados
            StringBuilder sb = new StringBuilder();
            for (int n = 0; n < resultados.Count; n++) {
                sb.Append(resultados[n] + (n == resultados.Count - 1 ? "" : ", "));
            }
            this.label7.Text = resultados.Count.ToString();
            this.textBoxResultados.Text = this.compactarReferencias(sb.ToString());

        }

        private List<Posicion> IndexesOf(string cadena, string busqueda) {
            List<Posicion> resultado = new List<Posicion>();
            int indice = -1;
            while ((indice = cadena.IndexOf(busqueda, indice + 1)) != -1) {
                Posicion p = new Posicion();
                p.Inicio = indice;
                p.Fin = indice + busqueda.Length;
                resultado.Add(p);
            }
            return resultado;
        }

        private void buttonCopiar_Click(object sender, EventArgs e) {
            Clipboard.SetText(this.textBoxResultados.Text);
        }

        private string compactarReferencias(string referencias) {
            //Compacta referencias. Por ejemplo, en lugar de tener 124:8.1, 124:8.2, 124:8.3
            // tendríamos 124:8.1-3
            //Sólo funciona con párrafos completamente consecutivos

            string[] entradas = referencias.Split(new char[] { ',' });
            List<string> salidas = new List<string>();
            int ultimo = -1;
            for (int n = 0; n < entradas.Length; n++) {
                string entrada = entradas[n].Trim();
                if (n == 0) {
                    salidas.Add(entrada);
                } else {
                    string salidaUltima = salidas[salidas.Count - 1];

                    int indice1 = salidaUltima.IndexOf(".");
                    string resto1 = salidaUltima.Substring(0, indice1);
                    int parrafo1 = Int32.Parse(salidaUltima.Substring(indice1 + 1));

                    int indice2 = entrada.IndexOf(".");
                    string resto2 = entrada.Substring(0, indice2);
                    int parrafo2 = Int32.Parse(entrada.Substring(indice2 + 1));

                    if (resto1 == resto2 && (parrafo2 == parrafo1 + 1 || parrafo2 == ultimo + 1)) {
                        ultimo = parrafo2;
                        if (n == entradas.Length - 1) {
                            salidas[salidas.Count - 1] += "-" + ultimo.ToString();
                        }
                    } else {
                        if (ultimo != -1) {
                            salidas[salidas.Count - 1] += "-" + ultimo.ToString();
                            ultimo = -1;
                        }
                        salidas.Add(entrada);
                    }
                }
            }

            List<string> salidas2 = new List<string>();
            string concatenado = "";
            for (int n = 0; n < salidas.Count; n++) {
                string salida = salidas[n];
                if (n == 0) {
                    salidas2.Add(salida);
                    
                } else {
                    string salidaUltima = salidas2[salidas2.Count - 1];

                    int indice1 = salidaUltima.IndexOf(".");
                    string resto1 = salidaUltima.Substring(0, indice1);

                    int indice2 = salida.IndexOf(".");
                    string resto2 = salida.Substring(0, indice2);
                    string parrafo2 = salida.Substring(indice2 + 1);

                    if (resto1 == resto2) {
                        concatenado += "·" + parrafo2;
                        if (n == entradas.Length - 1) {
                            salidas2[salidas2.Count - 1] += concatenado;
                            concatenado = "";
                        }
                    } else {
                        if (concatenado != "") {
                            salidas2[salidas2.Count - 1] += concatenado;
                            concatenado = "";
                        }
                        salidas2.Add(salida);
                    }

                }
            }

            StringBuilder sb = new StringBuilder();
            for (int n = 0; n < salidas2.Count; n++) {
                sb.Append(salidas2[n] + (n == salidas2.Count - 1 ? "" : ", "));
            }

            return sb.ToString();
        }

        private void buttonNombres_Click(object sender, EventArgs e) {
            this.label7.Text = "0";
            //Obtenemos lista de ficheros LaTEX
            string currentFolder = AppDomain.CurrentDomain.BaseDirectory;

            string[] latexFiles = null;
            try {
                latexFiles = System.IO.Directory.GetFiles(currentFolder, "*.tex");
            } catch (Exception ex) {
                MessageBox.Show(ex.Message);
            }
            //Comprobaciones
            if (latexFiles == null) {
                MessageBox.Show("No se han encontrado ficheros LaTEX en la carpeta de la aplicación.");
                return;
            }

            List<string> exclusiones = new List<string>();
            string[] vocablos = new string[] {
                "\\Textit", "\\Textdegree", "\\Textordmasculine", "A", "Aquel",
                "Aquél", "Aquella", "Aquellas", "Aquello", "Aquellos", "C", "E", "El",
                "Él", "Ella", "En", "Es", "Éste", "Este", "Ésta", "I","La", "Las", "Le", "Les",
                "Lo", "Los", "O", "Oh", "U", "Un", "Una", "Unos", "Unas", "Y"
            };
            for (int n = 0; n < vocablos.Length; n++)
                exclusiones.Add(vocablos[n]);

            if (this.textBoxExclusion.Text != string.Empty) {
                string[] vocablos2 = this.textBoxExclusion.Text.Split(new char[] { ',' });
                for (int i = 0; i < vocablos2.Length; i++) {
                    vocablos2[i] = vocablos2[i].Trim();
                    if (!exclusiones.Contains(vocablos2[i]))
                        exclusiones.Add(vocablos2[i]);
                }
            }

            //Leer fichero LateX
            int contador, total, indice;
            string linea, linea2;
            bool found = false;
            string[] palabras;
            string palabra, palabra_minuscula;
            List<string> resultados = new List<string>();
            List<string> palabras_minusculas = new List<string>();
            CultureInfo cultureInfo = Thread.CurrentThread.CurrentCulture;
            TextInfo textInfo = cultureInfo.TextInfo;
            System.IO.StreamReader fichero;

            for (int f = 0; f < latexFiles.Length; f++) {
                fichero = new System.IO.StreamReader(latexFiles[f]);
                contador = 0;
                total = 0;
                indice = -1;

                //Contar lineas existentes
                while ((linea = fichero.ReadLine()) != null) {
                    total++;
                }
                this.progressBar1.Maximum = total;
                fichero.DiscardBufferedData();
                fichero.BaseStream.Seek(0, System.IO.SeekOrigin.Begin);

                while ((linea = fichero.ReadLine()) != null) {
                    if (linea.StartsWith("\\textsuperscript{")) {
                        indice = linea.IndexOf("}");
                        linea2 = linea.Substring(indice + 1).Trim();
                        palabras = linea2.Split(
                            new char[] { ' ', '.', ',', ';', '¡', '!', '¿', '?',
                            '<', '>', '{', '}', '(', ')', '`', '\'', '[', ']',
                            '-', ':', '0', '1', '2', '3', '4', '5', '6', '7',
                            '8', '9' },
                            StringSplitOptions.RemoveEmptyEntries);
                        for (int n = 0; n < palabras.Length; n++) {
                            palabra_minuscula = palabras[n].ToLower();
                            if (palabra_minuscula == palabras[n] && 
                                !palabras_minusculas.Contains(palabra_minuscula)) {
                                palabras_minusculas.Add(palabra_minuscula);
                            }
                            if (palabras[n].ToUpper()[0] == palabras[n][0]) {
                                palabra = textInfo.ToTitleCase(palabras[n].ToLower());
                                if (!exclusiones.Contains(palabra) &&
                                    !resultados.Contains(palabra)) {
                                    resultados.Add(palabra);
                                }
                            }
                        }
                    }
                    contador++;
                    this.progressBar1.Value = contador;
                }

                fichero.Close();
            }

            //Un resultado es nombre propio si no aparece nunca en otro lugar
            //su versión en minúsculas
            this.progressBar1.Maximum = resultados.Count;
            contador = 0;

            for (int i = resultados.Count - 1; i >= 0; i--) {
                if (palabras_minusculas.Contains(resultados[i].ToLower())) {
                    resultados.RemoveAt(i);
                }
                contador++;
                this.progressBar1.Value = contador;
            }

            resultados.Sort();

            //Presentar resultados
            StringBuilder sb = new StringBuilder();
            for (int n = 0; n < resultados.Count; n++) {
                sb.Append(resultados[n] + "\r\n");
            }
            this.textBoxLog.Text = sb.ToString();
            this.label7.Text = resultados.Count.ToString();

        }

        /// <summary>
        /// Corrije el fichero Paramony.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void button1_Click(object sender, EventArgs e) {
            string currentFolder = AppDomain.CurrentDomain.BaseDirectory;

            string[] rutas = System.IO.Directory.GetFiles(currentFolder, "Paramony.txt");
            if (rutas.Length == 0) {
                MessageBox.Show("No se encuentra Paramony.txt");
                return;
            }
            string ruta = rutas[0];

            //http://www.biblija.net/help.es/abbrevs.es.php

            string[] libros = new string[] {
                "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua",
                "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings",
                "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther",
                "1 Maccabees", "2 Maccabees", "Job","Psalms","Proverbs",
                "Ecclesiastes","Song of Solomon", "Sirach (Ecclesiasticus)",
                "Wisdom of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Baruch",
                "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
                "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
                "Matthew", "Mark", "Luke", "John", "Acts of the Apostles", "Romans",
                "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians",
                "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy",
                "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John",
                "2 John", "3 John", "Jude", "Revelation", "Bel and the Dragon",
                "Prayer of Manesseh", "Tobit", "Enoch", "Moses Asumption"
            };

            string[] abreviaturas = new string[] {
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

            string linea;
            string[] valores;
            StringBuilder sbErrores = new StringBuilder();
            StringBuilder sbResultados = new StringBuilder();
            bool errores = false;
            int total = 0;
            int contador = 0;
            string refA, refB, name, biblebook, bibleref, chapter, biblekey, key, content;
            int bbi;
            SortedDictionary<string, SortedDictionary<string, string>> resultados = new SortedDictionary<string, SortedDictionary<string, string>>();
            SortedDictionary<string, string> items;
            System.IO.StreamReader fichero = new System.IO.StreamReader(ruta);

            //Contar lineas existentes
            while ((linea = fichero.ReadLine()) != null) {
                total++;
            }
            this.progressBar1.Maximum = total;
            fichero.DiscardBufferedData();
            fichero.BaseStream.Seek(0, System.IO.SeekOrigin.Begin);

            while ((linea = fichero.ReadLine()) != null) {
                valores = linea.Split(new char[] { '\t' }, StringSplitOptions.RemoveEmptyEntries);
                if (valores.Length != 6) {
                    errores = true;
                    sbErrores.Append("Error en " + linea + "\r\n");
                } else {
                    refA = valores[1];
                    if (refA.Contains("/")) {
                        refB = refA.Split(new char[] { '/' })[0];
                    } else {
                        refB = refA;
                    }
                    name = valores[2];
                    key = refB + " " + name;
                    biblebook = valores[3];
                    bbi = Array.IndexOf(libros, biblebook);
                    chapter = valores[4];
                    if (bbi != -1) {
                        bibleref = abreviaturas[bbi] + " " + compactarCapituloVersiculo(chapter);
                        biblekey = bbi.ToString() + "|" + chapter;
                        if (!resultados.ContainsKey(key)) {
                            items = new SortedDictionary<string, string>();
                            items.Add(biblekey, bibleref);
                            resultados.Add(key, items);
                        } else {
                            items = resultados[key];
                            if (!items.ContainsKey(biblekey)) {
                                items.Add(biblekey, bibleref);
                            }
                        }
                    } else {
                        errores = true;
                        sbErrores.Append("Error en " + linea + "\r\n");
                    }

                }
                contador++;
                this.progressBar1.Value = contador;
            }
            fichero.Close();

            if (errores) {
                this.textBoxLog.Text = sbErrores.ToString();
            } else {
                
                foreach(KeyValuePair<string, SortedDictionary<string, string>> entry in resultados) {
                    StringBuilder sb2 = new StringBuilder();
                    bool first = true;
                    foreach(KeyValuePair<string, string> entry2 in entry.Value) {
                        if (!first) sb2.Append("; ");
                        if (first) first = !first;
                        sb2.Append(entry2.Value);
                    }

                    sbResultados.Append(entry.Key + ": " + sb2.ToString() + "\r\n");
                }
                this.textBoxLog.Text = sbResultados.ToString();
            }
            
        }

        private string compactarCapituloVersiculo(string entrada) {
            //compacta un capitulo versiculo haciendo que los números no tengan ceros a la izquierda
            // por ejemplo: 01:08 es convertido a 1:8 o 01:08-09,02 a 1:8-9,2

            char[] seps = { ':', '-', ',', '.', ';' };

            char caracter;
            string numStr = "";
            StringBuilder sb = new StringBuilder();
            for (int n = 0; n < entrada.Length; n++) {
                caracter = entrada[n];
                if (Array.IndexOf(seps, caracter) != -1) {
                    if (numStr != "") {
                        sb.Append(numStr);
                        numStr = "";
                    }
                    sb.Append(caracter);
                } else {
                    if (numStr == "") {
                        if (caracter != '0') {
                            numStr = numStr + caracter;
                        }
                    } else {
                        numStr = numStr + caracter;
                    }
                }
            }
            if (numStr != "") {
                sb.Append(numStr);
            }
            return sb.ToString();
        }

        /// <summary>
        /// Buscar citas bíblicas incorrectas.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void button2_Click(object sender, EventArgs e) {
            //Buscar todos los párrafos con footnotes donde las abreviaturas biblicas se repiten
            string[] latexFiles = this.GetLatexFiles();
            if (latexFiles == null) return;

            //Leer fichero LateX
            List<string> resultados = new List<string>();

            for (int f = 0; f < latexFiles.Length; f++) {
                resultados.Add(latexFiles[f]);
                Book book = new Book(latexFiles[f], this.progressBar1);
                if (book.GetParLength() > 0) {
                    for (int p = 0; p < book.GetParLength(); p++) {
                        Par par = book.GetPar(p);
                        string refer = par.GetID();
                        bool isOK = true;
                        if (par.GetFootnotesLength() > 0) {
                            for (int n = 0; n < par.GetFootnotesLength(); n++) {
                                Footnote footnote = par.GetFootnote(n);
                                for (int m = 0; m < footnote.GetFootnotePartsLength(); m++) {
                                    if (footnote.GetFootnotePart(m).HasReferenceRepeated()) {
                                        isOK = false;
                                        break;
                                    }
                                }
                                if (!isOK) break;
                            }
                        }
                        if (!isOK) resultados.Add(refer);
                    }
                }
            }

            //Presentar resultados
            StringBuilder sb = new StringBuilder();
            for (int n = 0; n < resultados.Count; n++) {
                sb.Append(resultados[n] + "\r\n");
            }
            this.txtRefRepeated.Text = sb.ToString();

        }

        /// <summary>
        /// Convierte de LaTeX a JSON.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void button3_Click(object sender, EventArgs e) {

        }

        /// <summary>
        /// Convierte de JSON a LaTeX.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void button4_Click(object sender, EventArgs e) {

        }

        private string[] GetLatexFiles() {
            //Obtenemos lista de ficheros LaTEX
            string currentFolder = AppDomain.CurrentDomain.BaseDirectory;

            string[] latexFiles = null;
            try {
                latexFiles = System.IO.Directory.GetFiles(currentFolder, "*.tex");
            } catch (Exception ex) {
                MessageBox.Show(ex.Message);
            }
            //Comprobaciones
            if (latexFiles == null) {
                MessageBox.Show("No se han encontrado ficheros LaTEX en la carpeta de la aplicación.");
            }
            return latexFiles;
        }


    }
}
