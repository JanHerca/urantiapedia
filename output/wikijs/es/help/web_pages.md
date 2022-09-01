---
title: Manejo de páginas
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
        <td><a href="/es/help/web_basics">Interfaz y uso básico de Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/web_editors">Uso de editores</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Crear una pagina

Hay varias formas de crear una página nueva:

- Desde el botón **Nueva página**, ubicado en la esquina superior derecha de la página.
- Haciendo clic en un enlace que apunta a una página inexistente.
- Escribiendo manualmente la ruta en la barra de direcciones del navegador.

Consulta la guía [Interfaz y uso básico de Urantiapedia](/es/help/web_basics) sobre cómo crear tu primera página paso a paso.


## Editar una página

Puedes editar una página existente haciendo clic en el icono **Lápiz** en la esquina inferior derecha de cualquier página o usando el **Menú de página**, ubicado en la esquina superior derecha de la página.

El editor seleccionado al crear la página por primera vez se cargará automáticamente. Ten en cuenta que es posible [cambiar de editor](/es/help/web_editors) una vez que se crea una página.


## Carpetas

Urantiapedia no se basa en una estructura de carpetas tradicional para organizar las páginas. En su lugar, se utiliza la ruta de la página.

Por ejemplo, en un sistema tradicional, para crear una página en `article/Ann_Bendall/Adam_and_Eve`, primero debes crear una carpeta `article`, luego abrir esta carpeta y crear una subcarpeta llamada `Ann_Bendall` para finalmente poder crear una página dentro llamada `Adam_and_Eve`.

En Urantiapedia, puedes crear directamente una página en la ruta `article/Ann_Bendall/Adam_and_Eve`. Las carpetas `article` y `Ann_Bendall` se inferirán automáticamente, pero en realidad no existen fuera del contexto de la ruta de la página. Por lo tanto, no tienes que administrar carpetas y, de este modo, puedes concentrarse únicamente en la ruta que deseas para tus páginas.

Por esta razón, no hay opción para crear carpetas. Simplemente escribe la ruta completa que desees. Las carpetas se inferirán automáticamente al momento de la creación.

## Restricciones de nombres

Las siguientes rutas no se pueden usar para contenido y están reservadas para uso del sistema.

### Páginas de un solo carácter

**Todas** las rutas de un solo carácter están reservadas para acceder a varias partes de Urantiapedia:

- `a`: Área de Administración
- `c`: Comentarios
- `e`: Editor de páginas
- `f`: Administrador de recursos
- `h`: Historial de la página
- `i`: Explorar página por ID
- `p`: Perfil de usuario
- `s`: Fuente de la página
- `t`: Etiquetas
- `u`: Punto final de carga *(API)*
- `w`: Wiki personal
{.grid-lista}

### Etiquetas de idioma IETF

Las etiquetas de idioma en los formatos que se enumeran a continuación están reservadas para especificar el espacio de nombres de configuración regional que se usará.

- Código de idioma de dos letras (por ejemplo, `en`, `fr`)
- Código de configuración regional específico del país (por ejemplo, `en-us`, `fr-ca`)
{.grid-lista}

### Palabras reservadas

Las rutas no pueden coincidir exactamente con los términos que se muestran continuación o ser la primera parte de la ruta. Por ejemplo, `register` o `register/test` no son rutas válidas, pero `registering` es correcto.

- _assets
- favicon *\[.ico]*
- graphql
- healthz
- home *(reservado para la página de inicio raíz)*
- login
- logout
- register
{.grid-list}

### Caracteres ilegales

Las rutas no pueden contener los siguientes caracteres:

- Espacios *(utiliza guiones bajos en su lugar)*
- Puntos *(reservados para extensiones de archivo)*
- Caracteres de URL no seguros *(como signos de puntuación, comillas, símbolos matemáticos, etc.)*

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/web_basics">Interfaz y uso básico de Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/web_editors">Uso de editores</a></td>
      </tr>
    </tbody>
  </table>
</figure>