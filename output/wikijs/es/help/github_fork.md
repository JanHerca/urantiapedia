---
title: "Urantiapedia — Primeros pasos en GitHub"
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
        <td><a href="/es/help/devs">Manual para Desarrolladores</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_edit_on_web.md">Trabajar directamente desde la web de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Antes de hacer nada en GitHub, deberás seguir estos pasos:

1. Necesitas una cuenta en GitHub. Navega a https://github.com
2. Si ya tienes una cuenta, haz click en *Sign in* y valídate.
3. Si no tienes una cuenta, crea una haciendo click en *Sign up*. Introduce un nombre de usuario, un correo, y una contraseña. Una vez con una cuenta, entra en GitHub con ella.
4. La primera vez que entras en GitHub, te pedirá una verificación a través del correo electrónico. Una vez verificado, aparecerás en tu página de GitHub.
5. Abre las páginas de los proyectos de la *Urantiapedia*: 
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
6. Crea un *fork* de los proyectos. Un *fork* no es sino una copia de un proyecto en tu propia cuenta, de modo que los cambios hechos a la copia no afecten al proyecto original. Para hacer los *fork* haz click en el botón *Fork* de la esquina superior derecha de cada página de proyecto GitHub.

![](/image/help/github_fork_1.png)

7. En unos pocos segundos una copia de los proyectos de la *Urantiapedia* se creará en tu cuenta de GitHub. Estos proyectos son una copia nueva y completa en la que puedes hacer todos los cambios que necesites sin afectar a los proyectos originales. Comprueba que los tienes haciendo clic en el menu de tu usuario y selecciona _Your repositories_ para volver a tu cuenta. Deberías ver los dos proyectos y un mensaje indicando _Forked from ..._.

![](/image/help/github_fork_2.png)

![](/image/help/github_fork_3.png)

8. A partir de aquí existen dos opciones:
  - [Trabajar directamente desde la web de GitHub](/es/help/github_edit_on_web). Este procedimiento es el recomendado porque es muy sencillo.
  - Trabajar localmente en el PC. Este procedimiento es más complejo. Require de más pasos:
    - [Configurar el proyecto Urantiapedia de GitHub](/es/help/github_setting)
    - [Seguir el flujo de trabajo de GitHub](/es/help/github_edit_local)


## :warning: IMPORTANTE: Cómo mantener tu copia actualizada

Tus copias (*forks*) de los dos proyectos de *Urantiapedia* (*urantiapedia* y *urantiapedia-backup*) son copias que GitHub no actualiza automáticamente. Desde el momento en que las creas, en el proyecto original otros usuarios irán creando cambios, y esos cambios no se repercutirán de forma automática a tus proyectos. Tus proyectos, recuerda, **son una copia independiente**, y los cambios que se hacen en la copia o en el original no se sincronizan de forma desasistida en el otro.

**Es muy importante, pues, que antes de hacer ningún cambio a los archivos de tus copias, asegures que están sincronizadas con el estado actual de los proyectos originales.**

Para ello, **antes de cualquier sesión de trabajo** (que se detalla en los pasos siguientes de este manual) **deberás seguir estos sencillos pasos**:

1. Haz clic en cada uno de tus copias de los proyectos, y una vez en ellos haz clic en la opción _Sync fork_. Se te mostrará un menú indicando cuántos guardados (_commits_) se han hecho al proyecto original que no están en tu copia. En la imagen observa que hay 4 guardados que no tenemos y por tanto nuestra copia está desactualizada (_This branch is out-of-date_). Simplemente haz clic en _Update branch_ para traer a tu copia los cambios que hay en el proyecto original.

![](/image/help/github_fork_4.png)

2. Espera unos segundos mientras GitHub actualiza tu copia. Al finalizar, si vuelves a hacer clic en la opción _Sync fork_ verás que ya está todo actualizado indicando que los cambios no están retrasados respecto al original (_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

Deberás recordar realizar esta operación en cada proyecto cada vez que desees iniciar un trabajo de cambios. ¿Qué se puede hacer si nos olvidamos de hacer esta operación? Normalmente no pasará nada siempre y cuando los archivos que vayamos a modificar no hayan ya recibido alguna modificación. Se podrá seguir trabajando sin problemas y realizar todas las tareas que se indican en los pasos siguientes del manual, pero se recomienda encarecidamente que se siga esta práctica más segura de ejecutar estos pasos antes de cualquier edición.

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/web_html_editor">Uso del editor HTML</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_edit_on_web.md">Trabajar directamente desde la web de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>