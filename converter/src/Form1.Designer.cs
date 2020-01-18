namespace UBSearch {
    partial class Form1 {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing) {
            if (disposing && (components != null)) {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent() {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txtSearchText = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.txtExcluded = new System.Windows.Forms.TextBox();
            this.btnBuscar = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.txtResultados = new System.Windows.Forms.TextBox();
            this.txtLog = new System.Windows.Forms.TextBox();
            this.progressBar1 = new System.Windows.Forms.ProgressBar();
            this.buttonNombres = new System.Windows.Forms.Button();
            this.buttonCopiar = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.lblNumResult = new System.Windows.Forms.Label();
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.label7 = new System.Windows.Forms.Label();
            this.tabPage2 = new System.Windows.Forms.TabPage();
            this.label10 = new System.Windows.Forms.Label();
            this.txtResultLog = new System.Windows.Forms.TextBox();
            this.button2 = new System.Windows.Forms.Button();
            this.label9 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.label8 = new System.Windows.Forms.Label();
            this.tabPage3 = new System.Windows.Forms.TabPage();
            this.btnSelLatexFolder = new System.Windows.Forms.Button();
            this.txtLatexFolder = new System.Windows.Forms.TextBox();
            this.label14 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.btnSelTopicFolder = new System.Windows.Forms.Button();
            this.txtTopicFolder = new System.Windows.Forms.TextBox();
            this.label16 = new System.Windows.Forms.Label();
            this.btnSelParamony = new System.Windows.Forms.Button();
            this.txtParamony = new System.Windows.Forms.TextBox();
            this.label17 = new System.Windows.Forms.Label();
            this.label18 = new System.Windows.Forms.Label();
            this.btnSelWikiFolder = new System.Windows.Forms.Button();
            this.txtWikiFolder = new System.Windows.Forms.TextBox();
            this.label19 = new System.Windows.Forms.Label();
            this.label20 = new System.Windows.Forms.Label();
            this.btnTopicToWiki = new System.Windows.Forms.Button();
            this.label11 = new System.Windows.Forms.Label();
            this.tabControl1.SuspendLayout();
            this.tabPage1.SuspendLayout();
            this.tabPage2.SuspendLayout();
            this.tabPage3.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.label1.Location = new System.Drawing.Point(6, 3);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(620, 32);
            this.label1.TabIndex = 0;
            this.label1.Text = "Este buscador permite buscar referencias dentro de El Libro de Urantia. Utiliza c" +
    "omo fuente unos fichero LaTeX debidamente formateados (seleccionar ficheros en C" +
    "onfigurar). ";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(6, 41);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(81, 13);
            this.label2.TabIndex = 3;
            this.label2.Text = "Texto a buscar:";
            // 
            // txtSearchText
            // 
            this.txtSearchText.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtSearchText.Location = new System.Drawing.Point(129, 38);
            this.txtSearchText.Name = "txtSearchText";
            this.txtSearchText.Size = new System.Drawing.Size(497, 20);
            this.txtSearchText.TabIndex = 4;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(6, 70);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(104, 13);
            this.label3.TabIndex = 5;
            this.label3.Text = "Textos de exclusión:";
            // 
            // txtExcluded
            // 
            this.txtExcluded.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtExcluded.Location = new System.Drawing.Point(129, 67);
            this.txtExcluded.Name = "txtExcluded";
            this.txtExcluded.Size = new System.Drawing.Size(497, 20);
            this.txtExcluded.TabIndex = 6;
            // 
            // btnBuscar
            // 
            this.btnBuscar.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnBuscar.Location = new System.Drawing.Point(505, 103);
            this.btnBuscar.Name = "btnBuscar";
            this.btnBuscar.Size = new System.Drawing.Size(121, 41);
            this.btnBuscar.TabIndex = 7;
            this.btnBuscar.Text = "Buscar referencias";
            this.btnBuscar.UseVisualStyleBackColor = true;
            this.btnBuscar.Click += new System.EventHandler(this.btnBuscar_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(6, 212);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(129, 13);
            this.label4.TabIndex = 8;
            this.label4.Text = "Referencias encontradas:";
            // 
            // txtResultados
            // 
            this.txtResultados.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtResultados.Location = new System.Drawing.Point(10, 228);
            this.txtResultados.Multiline = true;
            this.txtResultados.Name = "txtResultados";
            this.txtResultados.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.txtResultados.Size = new System.Drawing.Size(472, 42);
            this.txtResultados.TabIndex = 9;
            // 
            // txtLog
            // 
            this.txtLog.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtLog.Location = new System.Drawing.Point(9, 293);
            this.txtLog.Multiline = true;
            this.txtLog.Name = "txtLog";
            this.txtLog.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.txtLog.Size = new System.Drawing.Size(617, 290);
            this.txtLog.TabIndex = 10;
            // 
            // progressBar1
            // 
            this.progressBar1.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.progressBar1.Location = new System.Drawing.Point(4, 621);
            this.progressBar1.Name = "progressBar1";
            this.progressBar1.Size = new System.Drawing.Size(639, 23);
            this.progressBar1.Step = 1;
            this.progressBar1.Style = System.Windows.Forms.ProgressBarStyle.Continuous;
            this.progressBar1.TabIndex = 11;
            // 
            // buttonNombres
            // 
            this.buttonNombres.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonNombres.Location = new System.Drawing.Point(506, 158);
            this.buttonNombres.Name = "buttonNombres";
            this.buttonNombres.Size = new System.Drawing.Size(121, 43);
            this.buttonNombres.TabIndex = 12;
            this.buttonNombres.Text = "Buscar potenciales nombres propios";
            this.buttonNombres.UseVisualStyleBackColor = true;
            this.buttonNombres.Click += new System.EventHandler(this.buttonNombres_Click);
            // 
            // buttonCopiar
            // 
            this.buttonCopiar.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonCopiar.Location = new System.Drawing.Point(506, 227);
            this.buttonCopiar.Name = "buttonCopiar";
            this.buttonCopiar.Size = new System.Drawing.Size(120, 43);
            this.buttonCopiar.TabIndex = 13;
            this.buttonCopiar.Text = "Copiar referencias a portapapeles";
            this.buttonCopiar.UseVisualStyleBackColor = true;
            this.buttonCopiar.Click += new System.EventHandler(this.buttonCopiar_Click);
            // 
            // label5
            // 
            this.label5.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.label5.Location = new System.Drawing.Point(7, 105);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(475, 39);
            this.label5.TabIndex = 14;
            this.label5.Text = resources.GetString("label5.Text");
            // 
            // label6
            // 
            this.label6.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.label6.Location = new System.Drawing.Point(7, 158);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(475, 29);
            this.label6.TabIndex = 15;
            this.label6.Text = "Pulsa directamente en \'Buscar potenciales nombres propios\' para obtener una lista" +
    " de todos los potenciales nombres propios";
            // 
            // lblNumResult
            // 
            this.lblNumResult.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNumResult.Location = new System.Drawing.Point(141, 210);
            this.lblNumResult.Name = "lblNumResult";
            this.lblNumResult.Size = new System.Drawing.Size(46, 15);
            this.lblNumResult.TabIndex = 16;
            this.lblNumResult.Text = "0";
            // 
            // tabControl1
            // 
            this.tabControl1.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.tabControl1.Controls.Add(this.tabPage1);
            this.tabControl1.Controls.Add(this.tabPage2);
            this.tabControl1.Controls.Add(this.tabPage3);
            this.tabControl1.Location = new System.Drawing.Point(0, 0);
            this.tabControl1.Name = "tabControl1";
            this.tabControl1.SelectedIndex = 0;
            this.tabControl1.Size = new System.Drawing.Size(647, 615);
            this.tabControl1.TabIndex = 18;
            // 
            // tabPage1
            // 
            this.tabPage1.Controls.Add(this.label7);
            this.tabPage1.Controls.Add(this.label1);
            this.tabPage1.Controls.Add(this.label2);
            this.tabPage1.Controls.Add(this.lblNumResult);
            this.tabPage1.Controls.Add(this.txtSearchText);
            this.tabPage1.Controls.Add(this.label6);
            this.tabPage1.Controls.Add(this.label3);
            this.tabPage1.Controls.Add(this.label5);
            this.tabPage1.Controls.Add(this.txtExcluded);
            this.tabPage1.Controls.Add(this.buttonCopiar);
            this.tabPage1.Controls.Add(this.btnBuscar);
            this.tabPage1.Controls.Add(this.buttonNombres);
            this.tabPage1.Controls.Add(this.label4);
            this.tabPage1.Controls.Add(this.txtResultados);
            this.tabPage1.Controls.Add(this.txtLog);
            this.tabPage1.Location = new System.Drawing.Point(4, 22);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage1.Size = new System.Drawing.Size(639, 589);
            this.tabPage1.TabIndex = 0;
            this.tabPage1.Text = "Buscador";
            this.tabPage1.UseVisualStyleBackColor = true;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(8, 277);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(116, 13);
            this.label7.TabIndex = 17;
            this.label7.Text = "Extractos encontrados:";
            // 
            // tabPage2
            // 
            this.tabPage2.Controls.Add(this.btnTopicToWiki);
            this.tabPage2.Controls.Add(this.label11);
            this.tabPage2.Controls.Add(this.label10);
            this.tabPage2.Controls.Add(this.txtResultLog);
            this.tabPage2.Controls.Add(this.button2);
            this.tabPage2.Controls.Add(this.label9);
            this.tabPage2.Controls.Add(this.button1);
            this.tabPage2.Controls.Add(this.label8);
            this.tabPage2.Location = new System.Drawing.Point(4, 22);
            this.tabPage2.Name = "tabPage2";
            this.tabPage2.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage2.Size = new System.Drawing.Size(639, 589);
            this.tabPage2.TabIndex = 1;
            this.tabPage2.Text = "Otras cosas";
            this.tabPage2.UseVisualStyleBackColor = true;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(8, 156);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(63, 13);
            this.label10.TabIndex = 21;
            this.label10.Text = "Resultados:";
            // 
            // txtResultLog
            // 
            this.txtResultLog.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtResultLog.Location = new System.Drawing.Point(11, 172);
            this.txtResultLog.Multiline = true;
            this.txtResultLog.Name = "txtResultLog";
            this.txtResultLog.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.txtResultLog.Size = new System.Drawing.Size(612, 411);
            this.txtResultLog.TabIndex = 22;
            // 
            // button2
            // 
            this.button2.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.button2.Location = new System.Drawing.Point(497, 62);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(126, 42);
            this.button2.TabIndex = 20;
            this.button2.Text = "Buscar citas bíblicas incorrectas";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // label9
            // 
            this.label9.Location = new System.Drawing.Point(8, 62);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(472, 42);
            this.label9.TabIndex = 19;
            this.label9.Text = "Haz click en esta opción para buscar todas las líneas que contienen citas bíblica" +
    "s en formato incorrecto en todos los ficheros LaTeX existentes en la carpeta de " +
    "la aplicación.";
            // 
            // button1
            // 
            this.button1.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.button1.Location = new System.Drawing.Point(497, 14);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(126, 42);
            this.button1.TabIndex = 18;
            this.button1.Text = "Corregir fichero Paramony.txt";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // label8
            // 
            this.label8.Location = new System.Drawing.Point(8, 14);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(472, 42);
            this.label8.TabIndex = 1;
            this.label8.Text = "Haz click en esta opción para ejecutar una ordenación correcta de citas bíblicas " +
    "en el fichero Paramony.txt descargado de la web de Fundación Urantia.";
            // 
            // tabPage3
            // 
            this.tabPage3.Controls.Add(this.btnSelWikiFolder);
            this.tabPage3.Controls.Add(this.txtWikiFolder);
            this.tabPage3.Controls.Add(this.label19);
            this.tabPage3.Controls.Add(this.label20);
            this.tabPage3.Controls.Add(this.btnSelParamony);
            this.tabPage3.Controls.Add(this.txtParamony);
            this.tabPage3.Controls.Add(this.label17);
            this.tabPage3.Controls.Add(this.label18);
            this.tabPage3.Controls.Add(this.btnSelTopicFolder);
            this.tabPage3.Controls.Add(this.txtTopicFolder);
            this.tabPage3.Controls.Add(this.label16);
            this.tabPage3.Controls.Add(this.label15);
            this.tabPage3.Controls.Add(this.btnSelLatexFolder);
            this.tabPage3.Controls.Add(this.txtLatexFolder);
            this.tabPage3.Controls.Add(this.label14);
            this.tabPage3.Controls.Add(this.label13);
            this.tabPage3.Location = new System.Drawing.Point(4, 22);
            this.tabPage3.Name = "tabPage3";
            this.tabPage3.Size = new System.Drawing.Size(639, 589);
            this.tabPage3.TabIndex = 2;
            this.tabPage3.Text = "Configurar";
            this.tabPage3.UseVisualStyleBackColor = true;
            // 
            // btnSelLatexFolder
            // 
            this.btnSelLatexFolder.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnSelLatexFolder.Location = new System.Drawing.Point(531, 30);
            this.btnSelLatexFolder.Name = "btnSelLatexFolder";
            this.btnSelLatexFolder.Size = new System.Drawing.Size(98, 29);
            this.btnSelLatexFolder.TabIndex = 3;
            this.btnSelLatexFolder.Text = "Seleccionar";
            this.btnSelLatexFolder.UseVisualStyleBackColor = true;
            this.btnSelLatexFolder.Click += new System.EventHandler(this.btnSelLatexFolder_Click);
            // 
            // txtLatexFolder
            // 
            this.txtLatexFolder.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtLatexFolder.Location = new System.Drawing.Point(115, 35);
            this.txtLatexFolder.Name = "txtLatexFolder";
            this.txtLatexFolder.Size = new System.Drawing.Size(410, 20);
            this.txtLatexFolder.TabIndex = 2;
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Location = new System.Drawing.Point(17, 40);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(82, 13);
            this.label14.TabIndex = 1;
            this.label14.Text = "Ficheros LaTeX";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Location = new System.Drawing.Point(8, 11);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(149, 13);
            this.label13.TabIndex = 0;
            this.label13.Text = "Entrada de El Libro de Urantia";
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Location = new System.Drawing.Point(8, 71);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(118, 13);
            this.label15.TabIndex = 4;
            this.label15.Text = "Entrada de Topic Index";
            // 
            // btnSelTopicFolder
            // 
            this.btnSelTopicFolder.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnSelTopicFolder.Location = new System.Drawing.Point(531, 97);
            this.btnSelTopicFolder.Name = "btnSelTopicFolder";
            this.btnSelTopicFolder.Size = new System.Drawing.Size(98, 29);
            this.btnSelTopicFolder.TabIndex = 7;
            this.btnSelTopicFolder.Text = "Seleccionar";
            this.btnSelTopicFolder.UseVisualStyleBackColor = true;
            this.btnSelTopicFolder.Click += new System.EventHandler(this.btnSelTopicFolder_Click);
            // 
            // txtTopicFolder
            // 
            this.txtTopicFolder.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtTopicFolder.Location = new System.Drawing.Point(115, 102);
            this.txtTopicFolder.Name = "txtTopicFolder";
            this.txtTopicFolder.Size = new System.Drawing.Size(410, 20);
            this.txtTopicFolder.TabIndex = 6;
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Location = new System.Drawing.Point(17, 107);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(71, 13);
            this.label16.TabIndex = 5;
            this.label16.Text = "Ficheros TXT";
            // 
            // btnSelParamony
            // 
            this.btnSelParamony.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnSelParamony.Location = new System.Drawing.Point(531, 166);
            this.btnSelParamony.Name = "btnSelParamony";
            this.btnSelParamony.Size = new System.Drawing.Size(98, 29);
            this.btnSelParamony.TabIndex = 11;
            this.btnSelParamony.Text = "Seleccionar";
            this.btnSelParamony.UseVisualStyleBackColor = true;
            // 
            // txtParamony
            // 
            this.txtParamony.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtParamony.Location = new System.Drawing.Point(115, 171);
            this.txtParamony.Name = "txtParamony";
            this.txtParamony.Size = new System.Drawing.Size(410, 20);
            this.txtParamony.TabIndex = 10;
            // 
            // label17
            // 
            this.label17.AutoSize = true;
            this.label17.Location = new System.Drawing.Point(17, 176);
            this.label17.Name = "label17";
            this.label17.Size = new System.Drawing.Size(66, 13);
            this.label17.TabIndex = 9;
            this.label17.Text = "Fichero TXT";
            // 
            // label18
            // 
            this.label18.AutoSize = true;
            this.label18.Location = new System.Drawing.Point(8, 140);
            this.label18.Name = "label18";
            this.label18.Size = new System.Drawing.Size(109, 13);
            this.label18.TabIndex = 8;
            this.label18.Text = "Entrada de Paramony";
            // 
            // btnSelWikiFolder
            // 
            this.btnSelWikiFolder.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnSelWikiFolder.Location = new System.Drawing.Point(531, 268);
            this.btnSelWikiFolder.Name = "btnSelWikiFolder";
            this.btnSelWikiFolder.Size = new System.Drawing.Size(98, 29);
            this.btnSelWikiFolder.TabIndex = 15;
            this.btnSelWikiFolder.Text = "Seleccionar";
            this.btnSelWikiFolder.UseVisualStyleBackColor = true;
            // 
            // txtWikiFolder
            // 
            this.txtWikiFolder.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtWikiFolder.Location = new System.Drawing.Point(115, 273);
            this.txtWikiFolder.Name = "txtWikiFolder";
            this.txtWikiFolder.Size = new System.Drawing.Size(410, 20);
            this.txtWikiFolder.TabIndex = 14;
            // 
            // label19
            // 
            this.label19.AutoSize = true;
            this.label19.Location = new System.Drawing.Point(17, 278);
            this.label19.Name = "label19";
            this.label19.Size = new System.Drawing.Size(69, 13);
            this.label19.TabIndex = 13;
            this.label19.Text = "Fichero WIKI";
            // 
            // label20
            // 
            this.label20.AutoSize = true;
            this.label20.Location = new System.Drawing.Point(8, 242);
            this.label20.Name = "label20";
            this.label20.Size = new System.Drawing.Size(99, 13);
            this.label20.TabIndex = 12;
            this.label20.Text = "Salida Urantiapedia";
            // 
            // btnTopicToWiki
            // 
            this.btnTopicToWiki.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnTopicToWiki.Location = new System.Drawing.Point(497, 114);
            this.btnTopicToWiki.Name = "btnTopicToWiki";
            this.btnTopicToWiki.Size = new System.Drawing.Size(126, 42);
            this.btnTopicToWiki.TabIndex = 24;
            this.btnTopicToWiki.Text = "Convertir Topic Index a formato Wiki";
            this.btnTopicToWiki.UseVisualStyleBackColor = true;
            this.btnTopicToWiki.Click += new System.EventHandler(this.btnTopicToWiki_Click);
            // 
            // label11
            // 
            this.label11.Location = new System.Drawing.Point(8, 114);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(472, 42);
            this.label11.TabIndex = 23;
            this.label11.Text = "Haz click en esta opción para convertir los ficheros TXT del Topic Index en fiche" +
    "ro WIKI localizando errores en el proceso.";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(648, 646);
            this.Controls.Add(this.tabControl1);
            this.Controls.Add(this.progressBar1);
            this.MaximizeBox = false;
            this.MinimumSize = new System.Drawing.Size(643, 620);
            this.Name = "Form1";
            this.Text = "Buscador de El Libro de Urantia y otras cosas";
            this.tabControl1.ResumeLayout(false);
            this.tabPage1.ResumeLayout(false);
            this.tabPage1.PerformLayout();
            this.tabPage2.ResumeLayout(false);
            this.tabPage2.PerformLayout();
            this.tabPage3.ResumeLayout(false);
            this.tabPage3.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtSearchText;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox txtExcluded;
        private System.Windows.Forms.Button btnBuscar;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox txtResultados;
        private System.Windows.Forms.TextBox txtLog;
        private System.Windows.Forms.ProgressBar progressBar1;
        private System.Windows.Forms.Button buttonNombres;
        private System.Windows.Forms.Button buttonCopiar;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label lblNumResult;
        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.TabPage tabPage1;
        private System.Windows.Forms.TabPage tabPage2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.TextBox txtResultLog;
        private System.Windows.Forms.TabPage tabPage3;
        private System.Windows.Forms.Button btnSelLatexFolder;
        private System.Windows.Forms.TextBox txtLatexFolder;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Button btnSelTopicFolder;
        private System.Windows.Forms.TextBox txtTopicFolder;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Button btnSelWikiFolder;
        private System.Windows.Forms.TextBox txtWikiFolder;
        private System.Windows.Forms.Label label19;
        private System.Windows.Forms.Label label20;
        private System.Windows.Forms.Button btnSelParamony;
        private System.Windows.Forms.TextBox txtParamony;
        private System.Windows.Forms.Label label17;
        private System.Windows.Forms.Label label18;
        private System.Windows.Forms.Button btnTopicToWiki;
        private System.Windows.Forms.Label label11;
    }
}

