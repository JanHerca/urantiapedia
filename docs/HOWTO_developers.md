# Urantiapedia - HOWTO para developers

## Instalación de un servidor de pruebas

1. Instalar [XAMPP](https://www.apachefriends.org/es/index.html). Conviene instalarlo fuera de Archivos de programa, por ejemplo, en c:\xampp.
2. Arrancar el XAMPP Control Manager que está en el raíz de la instalación de XAMPP.
3. Pulsar primero en el botón Start de Apache, luego en el de MySQL.
4. Para comprobar que funciona http://localhost/dashboard/
5. Instalar el módulo de WikiMedia con [Bitnami](https://bitnami.com/stack/xampp?utm_source=bitnami&utm_medium=installer&utm_campaign=XAMPP%2BInstaller).
7. Al instalar meter la password de MySQL (por defecto es pwdpwd) y crear un usuario para la wiki.
8. Se abrirá la web al finalizar, algo así como: http://192.168.1.10/wiki/index.php/Main_Page.
9. Hacer login para comprobar que funciona el usuario creado en 7.

## Templates

Para importar templates en la Urantiapedia:

1. Asegurarse que la extension Scribunto está disponible en el raíz de la instalación de Mediaki /extensions/Scribunto y que las siguientes dos líneas están añadidas al final a LocalSettings.php (también el raíz):
```
wfLoadExtension( 'Scribunto' );
$wgScribuntoDefaultEngine = 'luastandalone';
```
2. Exportar una template, por ejemplo, de la Wikipedia, entrando en la página de exportación: https://en.wikipedia.org/wiki/Special:Export
3. Añadir manualmente uno o varios nombres de templates, por ejemplo, Template:Anchor
4. Marcar todas las casillas y exportar. Se genera un fichero XML.
5. Ir a /Special:Import de la Urantiapedia e importar el XML. Como interwiki prefix usar en, es segun corresponda a la Wikipedia que hayamos usado para hacer el export de la template.



## Hacer copias de seguridad




## Referencias

https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki_on_XAMPP

https://www.ryadel.com/en/how-to-add-wikipedia-mbox-templates-to-your-own-mediawiki/
