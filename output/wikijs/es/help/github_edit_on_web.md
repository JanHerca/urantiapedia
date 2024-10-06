---
title: "Urantiapedia — Trabajar directamente desde la web de GitHub"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_fork">Primeros pasos en GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_setting.md">Configurar el proyecto Urantiapedia de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Trabajar directamente desde la web de GitHub es el procedimiento recomendado porque es muy sencillo comparado con el procedimiento para trabajar localmente en el PC. Es la opción recomendada para los usuarios *Editores Asistentes*. Para los usuarios *Administradores* o *Editores Jefe* se recomienda la opción que se explica en las páginas siguientes de este manual.

Vamos a suponer un ejemplo donde editaremos un artículo que tiene errores de traducción. Los pasos serían estos:

1. Entra en tu *fork* del proyecto *Urantiapedia* (`https://github.com/user-name/urantiapedia` donde _user-name_ es tu nombre de usuario).
2. Navega hasta cualquier archivo que desees modificar usando el listado de directorios. En nuestro ejemplo vamos a corregir un error en un archivo que está en `urantiapedia / output / wikijs / es /article / Alain_Cyr / Our_Experience...`. Una vez en el archivo éste se puede leer cómodamente en su modo _Preview_, como se muestra en la imagen. Ahí hemos detectado un error que dice _pero las cuentas se perdieron_ en lugar de algo más correcto como _pero perdí la cuenta_.

![](/image/help/github_edit_1.png)

3. Haz clic en el menu superior con un icono de un lápiz y selecciona _Edit in place_.

![](/image/help/github_edit_2.png)

4. Entrarás al modo de edición. Busca el texto que estaba mal y modifícalo. Cuando hayas hecho todos los cambios necesarios al archivo haz click en el botón verde _Commit changes..._

![](/image/help/github_edit_3.png)

5. Se te pedirá una confirmación de que deseas guardar unos cambios. Deja el mensaje por defecto o pon un mensaje más descriptivo de tus cambios donde dice _Commit message_. Mantén seleccionada la opción _Commit directly to the master branch_ (no te preocupes de eso puesto que eres el único trabajando en tu copia del proyecto). Finalmente haz click en _Commit changes_.

![](/image/help/github_edit_4.png)

6. Ahora crearemos una solicitud de cambios (_pull request_) para enviar los cambios que hemos hecho en nuestra copia del proyecto al proyecto original. Para ello selecciona en el menu principal de GitHub la opción _Pull requests_. Si es tu primera vez te aparecerá una lista vacía, como en la imagen siguiente.

![](/image/help/github_edit_5.png)

7. Haz clic en el botón verde _New pull request_ para crear una nueva solicitud de cambios. Aparecerá una pantalla de comparación entre tus cambios y el proyecto original. Si la comparación no ha encontrado conflictos aparecerá un mensaje _Able to merge_. Puedes pulsar en el botón verde _Create pull request_ para crear finalmente la solicitud de cambios.

![](/image/help/github_edit_6.png)

8. Una última pantalla permite introducir un título y descripción a la solicitud de cambios. Pulsa finalmente en el botón verde _Create pull request_ para crear la solicitud.

![](/image/help/github_edit_7.png)

9. La última pantalla nos desplaza al proyecto original (**atención**, no estamos más en la página de nuestra copia del proyecto) donde podemos ver la solicitud de cambios enviada y añadida a las _Pull requests_ del proyecto original. Ahora solo nos queda esperar a que los *Administradores* acepten o no los cambios, momento en que veremos en nuestra lista de _pull requests_ la confirmación de la aceptación. Esta operación no es inmediata, puede tardar días, pero eso no significa que no puedas continuar trabajando, haciendo nuevas modificaciones y solicitudes de cambios, repitiendo los pasos aquí explicados. Tu lista de solitudes de cambios (_pull requests_) puede ser lo larga que necesites.

![](/image/help/github_edit_8.png)

> :warning: IMPORTANTE: Todos estos pasos en el proyecto *urantiapedia* deberás reproducirlos de nuevo en el proyecto *urantiapedia-backup* siempre que desees que tu nombre de usuario quede reflejado en el proyecto como autor de los cambios. Si no es el caso, basta con introducir los cambios sólo en el proyecto *urantiapedia* y los Administradores se encargarán de introducir los cambios por ti en el proyecto *urantiapedia-backup*, que es el que se sincroniza con el sitio web. En este segundo caso el usuario *Administrador* que subió tus cambios es que el figurará como autor de ellos.
> Esta duplicidad puede parecer engorrosa pero es necesaria por temas de seguridad.
{.is-warning}

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_fork">Primeros pasos en GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_setting.md">Configurar el proyecto Urantiapedia de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>