---
title: "Urantiapedia — Configurar el proyecto de GitHub"
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
        <td><a href="/es/help/github_edit_on_web">Trabajar directamente desde la web de GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_edit_local">Trabajar localmente en el PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Trabajar con GitHub localmente en tu PC

Esta solución para trabajar en GitHub es bastante más compleja que la opción previa explicada en este manual, trabajar directamente desde la web de GitHub. Por esta razón sólo se recomienda para usuarios que tengan ciertos conocimientos de Git y GitHub. Es una opción mucho más flexible y potente que nos permite editar Urantiapedia de modos más rápidos y de mayor alcance. Además, permite ejecutar unas herramientas, llamadas *Urantiapedia Tools*, que realizan tareas automatizadas muy rápidas.

Esta debería ser la opción más recomendable para los usuarios *Administradores* o *Editores Jefe*, mientras que la opción de trabajar directamente desde la web de GitHub se recomienda para los usuarios *Editores Asistentes*.

Lo primero para trabajar localmente en GitHub es realizar varias instalaciones de software que vamos a explicar. Luego daremos unos consejos de configuración.

:warning: Se asume que antes de seguir estos pasos ya nos hemos creado una cuenta en GitHub y hemos hecho las necesarias copias (_forks_) de los proyectos de Urantiapedia a n uestra cuenta, tal y como se detalla en [Primeros pasos en GitHub](/es/help/github_fork).

## Instala Git en tu PC

1. Navega a https://git-scm.com/.
2. Descarga el instalador para tu sistema operativo. Tienes un tutorial completo de cómo instalarlo en diferentes SO aquí: [Instalar Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). En Windows usa el instalador y deja las opciones por defecto.
3. Comprueba que Git está correctamente instalado ejecutando esto en un terminal: `git --version`. Si devuelve el número de versión entonces Git está correcto.
4. Ejecuta los siguientes comandos en un terminal (Git instala un terminal llamado Git CMD que puedes usar) para configurar tu identidad en Git, con tu nombre y correo. Esto es necesario para que Git te configure como contribuidor de código.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Instala Node.js en tu PC

Node.js es un requisito para hacer funcionar las *Urantiapedia Tools*. Si no las vas a ejecutar nunca te puedes saltar este paso, aunque es recomendable.
1. Navega a https://nodejs.org/.
2. Descarga Node.js. Usa la versión LTS actual disponible.
3. Instala con las opciones por defecto.
4. Comprueba que Node.js está correctamente instalado. Abre un terminal y ejecuta `node -v`. Si aparece el número de versión entonces Node.js está correcto.

## Instala VS Code y GitLens

Es muy recomendable el uso de Visual Studio Code.

1. Navega a https://code.visualstudio.com/.
2. Descarga e instálalo. Durante la instalación es recomendable marcar la opción «Añadir acción ‘Abrir con Code’ al menú contextual de los directorios» si eres un usuario de Windows.
3. Ábrelo. La primera vez que se abre puedes establecer algunas opciones. Sáltalas.
4. En VS Code haz click en el botón _Extensiones_ en la botonera lateral izquierda. Es muy recomendable instalar una extensión llamada «GitLens». Suele estar en la lista de las extensiones más populares. Localízala y haz click en el botón de instalar.
5. Ahora tendrás un nuevo botón para GitLens en la botonera de la izquierad de VS Code. Haz click en él y click en el botón _Welcome (Quick setup)_. Se abre la página _Welcome_. Es recomendabble seleccionar _Source control layout_ como vista por defecto. Esto hace que GitLens se fusione con el panel _Source control_ por defecto de VS Code.

## Clona los proyectos de Urantiapedia

1. Abre la web de GitHub y navega a tu cuenta.
2. Abre tus copias de los proyectos (_forks_) de la Urantiapedia que deberías tener creados.
3. En la página principal de cada copia haz clic en el menú verde llamado _Code_ y en él haz click para copiar la URL del proyecto, algo como `https://github.com/<username>/urantiapedia.git` y `https://github.com/<username>/urantiapedia-backup.git`.

![](/image/help/github_setting_1.png)

4. Abre VS Code, abre el panel _Source control_ y haz click en _Clone repository_.

![](/image/help/github_setting_2.png)

5. En la casilla de texto que aparece teclea o pega la ruta copiada antes.
6. Selecciona _Clone from GitHub_.

![](/image/help/github_setting_3.png)

7. Haz click en _Allow in the GitHub extension to sign in_.
8. Aparece una página web pidiendo autorización de VS Code para acceder GitHub. Haz click en _Continue_.
9. Haz click en _Authorize github_.
10. Ahora se te redirige a una nueva página web donde se abre un mensaje. Haz click en _Open VS Code_.
11. Ahora haz click en _Open_ para permitir el uso de la ruta proporcionada. Si algo va mal repite desde el punto 4.
12. Cuando se muestre el nombre del repositorio de tu proyecto de la Urantiapedia en la central de comandos selecciónalo. Aparecerá un cuadro de diálogo preguntando por una carpeta. Selecciona cualquier carpeta o crea una para el proyecto.

![](/image/help/github_setting_4.png)

13. Espera unos minutos para que VS Code clone el repositorio. Finalmente haz click en _Open repo_. También haz click en _Yes, I trust the authors_.
14. El proyecto se abrirá correctamente.
15. Realiza estos mismos pasos para cada proyecto, para *urantiapedia* y para *urantiapedia-backup*.

## Configurar las *Urantiapedia Tools*

Las *Urantiapedia Tools* es una aplicación de escritorio desarrollada en JavaScript con [Electron](https://www.electronjs.org/). Sirve para ejecutar procesos muy rápidos que modifican cientos de páginas al tiempo. Si no vas a necesitar usarla puedes saltar este paso. Para instalarla y ejecutarla sigue estos pasos:

1. Abre el proyecto *urantiapedia* en VS Code. Para ello puedes hacerlo de dos modos:
  - Abre VS Code. Selecciona _File > Open folder_. Selecciona la carpeta raíz del proyecto, la que contiene el fichero `package.json`.
  - Opcionalmente, en Windows puedes abrir el proyecto mediante el menú contextual de la carpeta raíz y seleccionar _Abrir con Code_.
3. Abre un terminal usando _Terminal > New Terminal_. Asegúrate de que el terminal está abierto en la carpeta raíz del proyecto. 
4. Para instalar las dependencias de *Urantiapedia Tools* ejecuta: `npm install`. Espera hasta que todas se instalan.

![](/image/help/github_setting_5.png)

5. El proyecto se configura con una configuración de ejecución por defecto. Presiona F5 para ejecutar la aplicación o en el terminal ejecuta `npm run start`.
6. La aplicación se abre. Por defecto se abre una ventana _Dev Tools_ para poder depurar. Si no estás desarrollando puedes ignorarla o cerrarla.

![](/image/help/uptools.png)



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
        <td><a href="/es/help/github_edit_on_web">Trabajar directamente desde la web de GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_edit_local">Trabajar localmente en el PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>