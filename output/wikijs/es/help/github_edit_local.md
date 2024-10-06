---
title: "Urantiapedia — Trabajar localmente en el PC"
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
        <td><a href="/es/help/github_setting">Configurar el proyecto de GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_content.md">Contenido del proyecto de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Hacer cambios en tu copia local y guardarlos

Tus repositorios locales son una copia completa de los proyectos que están en GitHub para que puedas guardar los cambios localmente cada vez que tengas algunos. Cuando trabajas en local puedes hacer cambios a cientos de archivos a la vez y luego hacer un único guardado (_commit_) de todos ellos.

1. Verás que tienes cambios cuando aparezca un número en el icono del botón _Source control_.

![](/image/help/github_setting_6.png)

2. Haz click en _Source control_.
3. En el subpanel _Source control_, verás una lista de archivos modificados. Pasa el ratón sobre ellos y haz click en el botón _Stage changes_ que aparecerá.

![](/image/help/github_setting_7.png)

4. Una vez que los cambios están en el *stage*, introduce un mensaje para el guardado (*commit*) y haz click en el botón _Commit_. Los cambios se agregan a tu repositorio local.
5. Para enviar tus cambios a tu repositorio remoto en GitHub, haz click en el botón _Sync changes_ que aparece cuando existen nuevos *commits*. Esto hará un *pull* y *push* recibiendo y enviando cualquier cambio entre tu copias local y remota del proyecto.
6. Puedes verificar que tus *commits* se envían correctamente abriendo tu página de GitHub Urantiapedia.

## Sincronizar cambios entre los dos proyectos de Urantiapedia

El proyecto *Urantiapedia* es la versión para desarrollo y trabajo con los contenidos. El proyecto *Urantiapedia-backup* contiene únicamente el contenido, y está sincronizado con la página web, por lo que introducir cambios en él equivale a hacer cambios masivos en la web, siempre que estos cambios sean introducidos por los Administradores o aceptados por los Administradores a través de una solicitud de cambios.

Si tus cambios en el proyecto *Urantiapedia* incluyen cambios en el contenido (carpeta `/output/wikijs`) debes sincronizar esos cambios con el proyecto *Urantiapedia-backup* con cualquier utilidad de sincronización o bien simplemente copiando y pegando entre carpetas.

Esta duplicidad de ambos proyectos puede resultar un poco engorrosa pero está diseñada así por temas de seguridad.

## Crear solicitudes de cambios (_pull requests_) para los proyectos de Urantiapedia

Cuando tengas un número suficiente de *commits* enviados a tus propias copias de los proyectos (*forks*) Urantiapedia, puedes enviar una solicitud de cambios a los proyectos originales (_pull requests_) para que los cambios puedan revisarse y fusionarse en ellos. Esto se denomina _pull request_ en la terminología de GitHub.

1. Abre cada una de las páginas de Urantiapedia en GitHub.
   - `https://github.com/<username>/urantiapedia`
   - `https://github.com/<username>/urantiapedia-backup`
2. Asegúrate de estar en la rama principal que se llama _master_. La rama aparece en un menú en la parte superior de la lista de archivos. Normalmente sólo tendrás esa rama.
3. Selecciona el menú _Contribute_ que aparece a continuación y luego selecciona _Open pull request_. Si el menú dice _This branch is not ahead of the upstream master_ (_Esta rama no está por delante de la rama master_), primero debes hacer un *fetch* del proyecto principal. Mira más adelante.

![](/image/help/github_setting_8.png)

4. Agrega un título a tus contribuciones. También puedes agregar una descripción.
5. Haz click en _Create pull request_. Haz un _pull request_ por cada proyecto en el que tengas cambios.

![](/image/help/github_edit_7.png)

6. Esto enviará una notificación a los *administradores* del proyecto que fusionarán sus cambios si no encuentran problemas.

## Sincroniza tus copias de los proyectos (_forks_)

Como *Urantiapedia* es el esfuerzo de un equipo de colaboradores, es común que en cualquier momento tus copias de los proyectos (*forks*) no estén sincronizadas con los proyectos originales. Es una buena práctica que antes de cualquier *pull request* sincronices tus *forks* con los proyectos originales.

1. Abre cualquiera de tus proyectos de Urantiapedia en GitHub.
2. Haz clic en la opción _Sync fork_. Se te mostrará un menú indicando cuántos guardados (_commits_) se han hecho al proyecto original que no están en tu copia. En la imagen observa que hay 4 guardados que no tenemos y por tanto nuestra copia está desactualizada (_This branch is out-of-date_). Simplemente haz clic en _Update branch_ para traer a tu copia los cambios que hay en el proyecto original.

![](/image/help/github_fork_4.png)

3. Espera unos segundos mientras GitHub actualiza tu copia. Al finalizar, si vuelves a hacer clic en la opción _Sync fork_ verás que ya está todo actualizado indicando que los cambios no están retrasados respecto al original (_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

4. Ve a VS Code.
5. Abre el proyecto como ya se ha explicado.
5. En el panel _Source control_, ve al subpanel _Commits_. Haz click en el botón pequeño _Fetch_ y luego en el botón _Pull_ al lado de éste. Esta acción recupera y envía cambios al mismo tiempo para sincronizar el repositorio local.

![](/image/help/github_setting_9.png)

6. A veces, los cambios en el código de las *Urantiapedia Tools* implican cambios en las dependencias. Debes instalar o actualizar nuevas dependencias ejecutando el comando `npm install` desde una terminal en VS Code. Esto actualizará las dependencias del proyecto.


## Resumen

En resumen, el proceso en GitHub es el siguiente (ver el diagrama):
1. Los «Editores jefe» se crean una copia (1) (*fork*) en su propia cuenta de los proyectos *Urantiapedia* en GitHub: *Urantiapedia* y *Urantiapedia-backup*. También mantienen sincronizadas estas copias mediante un _Sync fork_ o _Fetch upstream_ (1).
2. Los «Editores Jefe» se crean una copia local de los proyectos en su PC. Esto se hace a través de una acción *clone* (2) en VS Code. También mantienen esas copias locales sincronizadas a través de acciones *fetch* + *pull* en VS Code (2), que descargan cualquier cambio en la copia local.
3. Los «Editores jefe» realizan cambios en la copia local de los proyectos y hacen *commits* (3) en su copia local para ir guardando los cambios.
4. Los «Editores jefe» envían sus cambios a sus proyectos de GitHub a través de acciones *push* (4).
5. Luego, los «Editores jefe» crean solicitudes de cambios (*pull requests*) (5) desde el sitio web de GitHub para ambos proyectos: *Urantiapedia* y *Urantiapedia-backup*.
6. Estos *pull requests* de los «Editores Jefe» son revisados por un «Administrador», quien se encarga de hacer una fusión (*merge*) (6) de todos aquellos cambios que sean correctos. Cualquier cambio que no sea correcto será rechazado (6) y se notificará a los «Editores Jefe» para que lo corrijan.
7. Cuando los cambios son correctos, el «Administrador» la fusión (*merge*) en el proyecto *urantiapedia-backup* original provoca que los cambios se sincronicen automáticamente con la web, que en pocos minutos aparecerá actualizada. (7)

![](/image/help/github_workflow_version_2.png)

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_setting">Configurar el proyecto de GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_content.md">Contenido del proyecto de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>