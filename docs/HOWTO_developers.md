# Urantiapedia - HOWTO para developers

## Instalación de un servidor de pruebas

1. Instalar [XAMPP](https://www.apachefriends.org/es/index.html). Conviene instalarlo fuera de Archivos de programa, por ejemplo, en c:\xampp.
2. Arrancar el XAMPP Control Manager que está en el raíz de la instalación de XAMPP.
3. Pulsar primero en el botón Start de Apache, luego en el de MySQL.
4. Para comprobar que funciona http://localhost/dashboard/
5. Instalar el módulo de WikiMedia con [Bitnami](https://bitnami.com/stack/xampp?utm_source=bitnami&utm_medium=installer&utm_campaign=XAMPP%2BInstaller).
7. Al instalar meter la password de MySQL (por defecto es pwdpwd) y crear un usuario para la wiki.
8. Se abrirá la web al finalizar, algo así como: http://192.168.1.10/wiki/index.php/Main_Page o http://localhost/wiki/index.php/Main_Page segun esté configurado localhost.
9. Hacer login para comprobar que funciona el usuario creado en 7.

---

## Templates

Para importar templates en la Urantiapedia:

1. Asegurarse que la extension Scribunto está disponible en el raíz de la instalación de Mediawiki /extensions/Scribunto y que las siguientes dos líneas están añadidas al final a LocalSettings.php (también el raíz):
```
wfLoadExtension( 'Scribunto' );
$wgScribuntoDefaultEngine = 'luastandalone';
```
2. Puede que Lua no funcione si el binario de Lua no tiene permisos de ejecución. Ir a la carpeta extensions/Scribunto/includes/engines/LuaStandalone/binaries/*sistema op*/ y cambiar los permisos a ejecución ( 7 5 5 ).
3. Exportar una template, por ejemplo, de la Wikipedia, entrando en la página de exportación: https://en.wikipedia.org/wiki/Special:Export
4. Añadir manualmente uno o varios nombres de templates, por ejemplo, Template:Anchor
5. Marcar todas las casillas y exportar. Se genera un fichero XML.
6. Ir a /Special:Import de la Urantiapedia e importar el XML. Como interwiki prefix usar `en` o `es` segun corresponda a la Wikipedia que hayamos usado para hacer el export de la template.

Más información en:

https://www.mediawiki.org/wiki/Extension:Scribunto#Installation

---

## Quitar el título a la página principal

1. Hay que editar Common.css, que en realidad es una página de la Wiki. Hay que ir a la página MediaWiki:Commons.css. Editar esa página equivale a editar un CSS que se aplicará detrás de cualquier skin en uso.
2. Añadir esta línea:
```
body.page-Main_Page.action-view h1.firstHeading, body.page-Main_Page.action-submit h1.firstHeading { display: none; }
```

Más información en:

https://www.mediawiki.org/wiki/Manual:FAQ#How_do_I_hide_the_main_page_title?

---

## Instalar la extension MobileFrontend

Esta extensión permite mostrar la Wiki de un modo más amigable en dispositivos móviles:

1. Descargar la extensión de: https://www.mediawiki.org/wiki/Extension:MobileFrontend/es
2. Copiar el fichero .gz comprimido de la extensión a la carpeta extensions.
3. Descomprimir el fichero.
4. Modificar LocalSettings.php añadiendo esta línea:
```
wfLoadExtension( 'MobileFrontend' );
```
5. Navegar a la página Special:Version para comprobar que la extensión se ha cargado.

---

## Cargas masivas de páginas con la extensión DataTransfer

    Es preferible usar el sitema de importTextFiles.php. Es más rápido y fiable y el formato de entrada es simplemente formato wiki.
    
1. Descargar la extensión DataTransfer: https://www.mediawiki.org/wiki/Extension:Data_Transfer
2. Copiar el fichero .gz comprimido de la extensión a la carpeta extensions.
3. Descomprimir el fichero.
4. Modificar LocalSettings.php añadiendo esta línea:
```
wfLoadExtension( 'DataTransfer' );
```
5. Añadir lo siguiente para permitir que el contenido del Free_Text no sea parseado:
```
$wgDataTransferViewXMLParseFreeText = false;
```
6. Ver un ejemplo de qué se debe cargar haciendo una descarga desde ?title=Special:ViewXML&titles=nombre_de_la_pagina
7. Cargar mediante Special:ImportXML

La carga no es inmediata. Usa el sistema de jobs de MediaWiki, lo cual significa que cada poco que se visitan páginas se lanzan un número de jobs.

Para examinar la lista de jobs: https://urantiapedia.site/api.php?action=query&meta=siteinfo&siprop=statistics

Cambiar el número de jobs que se ejecutan tras cada visita modificar el LocalSettings.php añadiendo:
```
$wgJobRunRate = 100;
```
Lo anterior eleva el número de jobs tras cada visita a 100, lo cual es mucho cuando la web está funcionando con muchos usuarios concurrentes. Conviene dejarlo en 1 o incluso 0.1 cuando la página ya está publicada y siendo masivamente accedida.

---

## Cargas masivas con el script de mantenimiento importTextFiles.php

https://www.mediawiki.org/wiki/Manual:ImportTextFiles.php

Ejecutar este comando en PuTTy:
```
cd public_html/maintenance
php importTextFiles.php -u <user> -s "Adición de referencias" --rc --overwrite files_to_import/*.wiki
```
El comando anterior actualiza las páginas cuyos nombres coincidan con los nombres de archivo de los ficheros wiki que estén en la carpeta `files_to_import` dentro de la carpeta `maintenance`. En lugar de "Adición de referencias", poner el mensaje que se quiera dar a todas las actualizaciones.


---

## Cambiar permisos de un usuario

Se hace desde la página Special:UserRights. Está accesible desde `Special pages` en el menu principal y luego en la sección User Rights. 

Para cambiar a un usuario los permisos hay que añadirle o quitarle de un User Group. Hay varios grupos creados con diferentes permisos.

---

## Hacer copias de seguridad

1. Abrir el XAMPP Control Panel y hacer click en el botón Shell para abrir una línea de comandos
2. Por defecto la carpeta será la de instalación de XAMPP
2. Lanzar el siguiente comando: 
```
mysqldump --port=<puerto> --user=<user> --password=<password> <nombre_bd> > dump.sql
```
3. donde <puerto> es el puerto de MySql/MariaDB que suele ser el 3306, <user> y <password> el nombre de usuario y contraseña del administrador de la base de datos. Si no se conoce mirar el fichero LocalSettings.php de la carpeta mediawiki\htdocs. <nombre_db> es el nombre de la base de datos con la wiki.
4. Se genera la copia de seguridad como un fichero dump.sql en la carpeta de instalación de XAMPP. Poner fecha en el nombre y guardar el archivo.

---


## Referencias

https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki_on_XAMPP

https://www.ryadel.com/en/how-to-add-wikipedia-mbox-templates-to-your-own-mediawiki/
