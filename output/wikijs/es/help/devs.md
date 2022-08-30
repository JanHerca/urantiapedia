---
title: "Urantiapedia — Manual para Desarrolladores"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/devs">Manual para Editores Asistentes</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_setting">Configurar el proyecto de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Acerca de la Urantiapedia

[Urantiapedia](https://urantiapedia.org) es una web colaborativa basada en [Wiki.js](https://js.wiki/) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

## Acerca de Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) es una web que ha sido creada para unir y organizar a lectores de *El Libro de Urantia* que desean participar en proyectos inteligentes, propositados y altruistas en todo el mundo. Es el sitio web que gestiona el registro y la colaboración entre los voluntarios de *Urantiapedia*.

## Acerca de GitHub

El proyecto *Urantiapedia* en GitHub (https://github.com/JanHerca/urantiapedia) es un proyecto creado para servir de procedimiento rápido de creación inicial de contenido de la *Urantiapedia*. Contiene unos archivos en ciertos formatos y un software que ayudan a automatizar la creación de un contenido inicial.

## A quién va dirigido este manual

Este manual es para los «Desarrolladores», es decir, aquellos usuarios que cumplen los siguientes requisitos:
- registrados con una cuenta en [Blue Fields](https://blue-fields.netlify.app/), en [Urantiapedia](https://urantiapedia.org) y en [GitHub](https://github.com/).
- autorizados como colaboradores del proyecto por el equipo que dirige el proyecto en la plataforma [Blue Fields](https://blue-fields.netlify.app/).
- con buen conocimiento de HTML, CSS, Javascript, [Node.js](https://nodejs.org/es/), [Git](https://git-scm.com/), [GitHub](https://github.com/), [Bootstrap](https://getbootstrap.com/), y [Vue.js](https://vuejs.org/).

## Procedimiento de trabajo en GitHub

El proceso es el habitual en GitHub para cualquier desarrollador:
1. Se crea un *fork* (una copia en su propia cuenta) del proyecto de la *Urantiapedia* en GitHub https://github.com/JanHerca/urantiapedia para desarrollar en las *Urantiapedia Tools* o bien se crea un *fork* de Wiki.js (https://github.com/Requarks/wiki) para desarrollar en Wiki.js.
2. Se crea una copia local del proyecto en el PC. La copia local debe ser de la última versión de la rama master. Esto se hace primero con una acción *clone* y luego con acciones *pull* contra el proyecto, lo que descarga cualquier cambio a nuestra copia local.
3. Se realizan los cambios que desea en la copia local y se hacen *commits* a la copia local.
4. Se envían los cambios a GitHub mediante acciones *push*.
5. En el caso de las *Urantiapedia Tools* puesto que se dispone de la propiedad del código se puede hacer un *pull request* desde la web de GitHub. En el caso de *Wiki.js* como la propiedad es de un tercero, se debe proceder a hacer un *merge* en el *fork* creado en https://github.com/JanHerca/wiki para centralizar los *pull requests* al *upstream* de Wiki.js cuando resulte necesario y para coordinar el desarrollo.
6. Los *pull request* son revisados por desarrolladores autorizados, que se encargan de hacer un *merge* con la rama principal (master) de todos aquellos cambios que estén correctos. Cualquier cambio que no esté correcto será rechazado y se notificará para que se corrija.
7. Cuando los cambios se hacen a Wiki.js y están correctos se se puede proceder a lanzar una nueva versión del servidor. Esta tarea corre a cuenta de los «Administradores».
8. El proceso se repite cuantas veces sea necesario regresando al punto 3.

## Instalación de un servidor de pruebas

Ver https://docs.requarks.io/install.

Ver https://docs.requarks.io/install/upgrade.

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
        <td><a href="/es/help/devs">Manual para Editores Asistentes</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_setting">Configurar el proyecto de GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>
