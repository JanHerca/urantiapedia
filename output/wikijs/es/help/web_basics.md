---
title: Interfaz y uso básico de Urantiapedia
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
        <td><a href="/es/help/web_pages">Manejo de páginas</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## La interfaz

![Interfaz](https://docs.requarks.io/assets/ui/ui-basics.jpg){.decor-radius .decor-shadow}

### Global
- **Navegación global**: un menú de navegación persistente, que se muestra en todas las páginas. Por lo general, consiste en páginas importantes o enlaces a sitios web externos.
- **Búsqueda global** - Encuentra rápidamente una página realizando una búsqueda.
- **Crear nueva página** - Crear una nueva página.
- **Menú de usuario**: acciones específicas del usuario, como Ver perfil, Administración y Cerrar sesión.
{.grid-lista .cuerpo-2}

### Por página
- **Acciones de página**: lista de acciones en la página actual, como Editar, Mover, Eliminar, Historial, etc.
- **Breadcrumbs** - Ruta completa a la página actual. Representa la estructura de carpetas.
- **Índice** - Secciones de la página actual. Basado en los encabezados del contenido.
- **Etiquetas de página** - Etiquetas asociadas a la página actual. Muestra páginas relacionadas haciendo clic en una etiqueta.
- **Autor** - Ver el autor y la fecha de la última modificación de la página.
- **Enlaces sociales** - Enlaces para Compartir / Imprimir la página actual.
- **Editar página / Acciones de página** - Menú de acceso rápido para editar o realizar otras acciones en la página actual.
{.grid-lista .cuerpo-2}

## Conceptos básicos

### Crear nueva página

Para crear una nueva página, haz clic en el botón **Nueva página**, ubicado en la esquina superior derecha de la página.

Aparecerá el siguiente cuadro de diálogo:
![Diálogo de nueva página](https://docs.requarks.io/assets/ui/ui-newpage-dialog.png =600x){.elevation-3 .radius-5}

1. Seleccione el idioma en el que crear la página *(la configuración regional actual se selecciona de forma predeterminada)*.
2. Introduce la ruta completa a la página que deseas crear.
   - La ruta no debe contener espacios *(utiliza guiones en su lugar)*, ni puntos, y debe consistir en caracteres seguros para una URL.
  - **NO** pongas la barra inclinada al final.
  - No es necesario crear carpetas. Introduce la ruta completa que deseas crear y las carpetas se crearán automáticamente. Por ejemplo, pon `article/Ann_Bendall/Adam_and_Eve` para crear automáticamente las subcarpetas `article` y `Ann_Bendall`.
3. Haz clic en **Seleccionar** para continuar.

### Seleccionar un editor

Al crear una nueva página, aparecerá el siguiente cuadro de diálogo:

![Diálogo de selección de editor](https://docs.requarks.io/assets/ui/ui-selecteditor-dialog.png =600x){.elevation-3 .radius-5}

Urantiapedia ofrece varios editores según el tipo de contenido que desees escribir o simplemente la preferencia del usuario. Algunos usuarios más técnicos generalmente optarán por el editor Markdown, mientras que los usuarios no técnicos pueden preferir el editor visual.

Para obtener una lista completa de editores y cómo usarlos, consulta:
- [Usando el editor visual](/es/help/web_visual_editor)
- [Usando el editor Markdown](/en/help/web_markdown_editor)
- [Usando el editor HTML](/es/help/web_html_editor)

### Introducir metadatos en las página

Al seleccionar un editor, aparecerá el cuadro de diálogo Metadatos de la página:

![Diálogo de metadatos de página](https://docs.requarks.io/assets/ui/ui-pageprops-dialog.png =600x){.elevation-3 .radius-5}

Introduce un **título**, **descripción** y **etiquetas** para tu página.

Finalmente, haz clic en **Aceptar** para cerrar el cuadro de diálogo y comenzar a escribir.

> Siempre puedes volver al cuadro de diálogo Metadatos de la página más adelante haciendo clic en el botón **Página**, ubicado en la esquina superior derecha de la página.
{.is-info}

### Guardar las páginas

Tu página no se crea hasta que presionas el botón **Crear** (ubicado en la esquina superior derecha de la página). Se guardará y renderizará, después de lo cual será redirigido automáticamente al resultado final. ¡Simplemente haz clic en el botón editar para volver a editarla! La página siempre volverá a abrirse con el mismo editor a menos que se especifique que se use uno distinto.

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/devs">Manual para Desarrolladores</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/web_pages">Manejo de páginas</a></td>
      </tr>
    </tbody>
  </table>
</figure>