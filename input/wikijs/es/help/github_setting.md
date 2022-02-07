---
title: Urantiapedia - Configurar el proyecto de GitHub
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

## Instala Git en tu PC

1. Navega a https://git-scm.com/.
2. Descarga el instalador para tu sistema operativo. Tienes un tutorial completo de cómo instalarlo en diferentes SO aquí: [Instalar Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). En Windows usa el instalador y deja las opciones por defecto.
3. Comprueba que Git está correctamente instalado ejecutando esto en un terminal: `git --version`. Si devuelve el número de versión entonces Git está correcto.
4. Ejecuta los siguientes comandos en un terminal (Git instala un terminal llamado Git CMD que puedes usar) para configurar tu identidad en Git, con tu nombre y correo. Esto es necesario para que Git te configure como contribuidor de código.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Crea una cuenta en GitHub

Necesitas una cuenta en GitHub.
1. Navega a https://github.com
2. Si ya tienes una cuenta, haz click en *Sign in* y valídate.
3. Si no tienes una cuenta, crea una haciendo click en *Sign up*. Introduce un nombre de usuario, un correo, y una contraseña. Una vez con una cuenta, entra en GitHub con ella.
4. La primera vez que entras en GitHub, te pedirá una verificación a través del correo electrónico. Una vez verificado, aparecerás en tu página de GitHub.

## Instala Node.js en tu PC

Node.js es un requisito para hacer funcionar las *Urantiapedia Tools*.
1. Navega a https://nodejs.org/.
2. Descarga Node.js. Usa la versión LTS actual disponible.
3. Instala con las opciones por defecto.
4. Comprueba que Node.js está correctamente instalado. Abre un terminal y ejecuta `node -v`. Si aparece el número de versión entonces Node.js está correcto.

## Hacer un fork del proyecto Urantiapedia

1. Abre la página del proyecto de la *Urantiapedia*: https://github.com/JanHerca/urantiapedia
2. Crea un *fork* del proyecto. Un *fork* no es sino una copia de un proyecto en tu propia cuenta, de modo que los cambios hechos a la copia no afecten al proyecto original. Para hacer el *fork* haz click en el botón *Fork* de la esquina superior derecha de la página de GitHub.
3. En unos pocos segundos una copia del proyecto de la *Urantiapedia* se creará en tu cuenta de GitHub. Este proyecto es una copia neuva y completa en la que puedes hacer todos los cambios que necesites sin afectar al proyecto original.

## Instala VS Code y GitLens

Es muy recomendable el uso de Visual Studio Code.

1. Navega a https://code.visualstudio.com/.
2. Descarga e instálalo. Durante la instalación es recomendable marcar la opción "Añadir acción 'Abrir con Code' al menú contextual de los directorios" si eres un usuario de Windows.
3. Ábrelo. La primera vez que se abre puedes establecer algunas opciones. Sáltalas.
4. En VS Code haz click en el botón Extensiones en la botonera lateral izquierda. Es muy recomendable instlar una extensión llamada "GitLens". Suele estar en la lista de las extensiones más populares. Localízala y haz click en el botón de instalar.
5. Ahora tendrás un nuevo botón para GitLens en la botonera de la izquierad de VS Code. Haz click en él y click en el botón "Welcome (Quick setup)". Se abre la página Welcome. Es recomendabble seleccionar "Source control layout" como vista por defecto. Esto hace que GitLens se fusione con el panel "Source control" por edfecto de VS Code.

## Clona el proyecto Urantiapedia

1. Abre la web de GitHub y navega a tu cuenta.
2. Abre tu fork del proyecto de la Urantiapedia que has creado antes.
3. En la página principal localiza un menú verde llamado "Code" y en él haz click para copiar la URL del proyecto, algo como `https://github.com/<username>/urantiapedia.git`.
4. Abre VS Code, abre el panel "Source control" y haz click en "Clone repository".
5. En la casilla de texto que aparece teclea o pega la ruta copiada antes.
6. Selecciona "Clone from GitHub".
7. Haz click en Allow in the GitHub extension to sign in.
8. Aparece una página web pidiendo autorización de VS Code para acceder GitHub. Haz click en Continue.
9. Haz click en Authorize github.
10. Ahora se te redirige a una nueva página web donde se abre un mensaje. Haz click en "Open VS Code".
11. Ahora haz click en Open para permitir el uso de la ruta proporcionada. Si algo va mal repite desde el punto 4.
12. Cuando se muestra el nombre del repositorio de tu proyecto de la Urantiapedia repository en la central de comandos selecciónalo. Aparecerá un cuadro de diálogo preguntango por una carpeta. Selecciona cualquier carpeta o crea una para el proyecto.
13. Espera unos segundos para que VS Code clone el repo. Finalmente haz click en "Open repo". También haz click en "Yes, I trust the authors".
14. El proyecto se abrirá correctamente.

## Configurar las *Urantiapedia Tools*

Las *Urantiapedia Tools* es una aplicación de escritorio desarrollada en JavaScript con [Electron](https://www.electronjs.org/). Para instalarla y ejecutarla sigue estos pasos:

1. Abre VS Code y selecciona File > Open folder. Entonces selecciona la carpeta raíz del proyecto, la que contiene el fichero `package.json`.
2. Opcionalmente, en Windows puedes abrir el menú contextual de la carpeta raíz y seleccionar "Abrir con Code".
3. Abre un terminal usando Terminal > New Terminal. Asegúrate de que el terminal está abierto en la carpeta raíz del proyecto. 
4. Para instalar las dependencias ejecuta: `npm install`. Espera hasta que todas se instalan.
5. El proyecto se configura con una configuración de ejecución por defecto. Presiona F5 para ejecutar la apliación o en el terminal ejecuta `npm start`.
6. La aplicación se abre. Por defecto se abre una ventana Dev Tools para poder depurar. Si no está desarrollando puedes ignorarla o cerrarla.

![](/image/uptools.png)

## Hacer commit y push de cambios

Tu repositorio local es una copia completa del proyecto para que pueda guardar los cambios cada vez que tengas algunos cambios que se puedan publicar.

1. Verás que tienes cambios cuando aparezca un número en el icono del botón "Source control".
2. Haz click en "Source control".
3. En el subpanel "Source control", verás una lista de archivos modificados. Pasa el ratón sobre ellos y haz click en el botón "Stage changes" que aparecerá.
4. Una vez que los cambios están en el *stage*, introduce un mensaje para el *commit* y haz click en el botón "Commit". Los cambios se agregan a tu repositorio local.
5. Para enviar tus cambios a tu repositorio remoto en GitHub, haz click en el botón "Sync changes" que aparece cuando existen nuevos *commits*. Esto hará un *pull* y *push* recibiendo y enviando cualquier cambio entre tu copias local y remota del proyecto.
6. Puedes verificar que tus *commits* se envían correctamente abriendo tu página de GitHub Urantiapedia.

## Crear "pull requests" para el proyecto principal de Urantiapedia

Cuando tengas un número suficiente de *commits* enviados a tu propia *fork* del proyecto Urantiapedia, puedes enviar tus cambios al proyecto principal para que los cambios puedan revisarse y fusionarse en él. Esto se denomina "pull request" en la terminología de GitHub.

1. Abre tu página de Urantiapedia en GitHub.
2. Asegúrate de estar en la rama principal que se llama "master". La rama aparece en un menú en la parte superior de la lista de archivos.
3. Selecciona el menú Contribute que aparece a continuación y luego selecciona "Open pull request". Si el menú dice "This branch is not ahead of the upstream master" ("Esta rama no está por delante de la rama master"), primero debes hacer un *fetch* del proyecto principal. Mira más adelante.
4. Agrega un título a tus contribuciones. También puedes agregar una descripción.
5. Haz click en "Create pull request".
6. Esto enviará una notificación a los usuarios "administradores" del proyecto que fusionarán sus cambios si no encuentran problemas.

## Sincroniza tu fork

Como *Urantiapedia* es el esfuerzo de un equipo de colaboradores, es común que en cualquier momento tu fork del proyecto no esté sincronizado con el proyecto principal. Es una buena práctica que antes de cualquier *pull request* sincronices tu *fork* con el proyecto principal.

1. Abre tu página de Urantiapedia en GitHub.
2. Selecciona el menú "Fetch upstream" que aparece debajo del selector de ramas y haz click en "Fetch and merge". Esto copiará todos los cambios nuevos del proyecto principal a tu fork del proyecto.
3. Ve a VS Code.
4. Abre el proyecto como ya se ha explicado.
5. En el panel "Source control", ve al subpanel "Remotes". Debes tener un repositorio remoto listado allí llamado `JanHerca/urantiapedia`. Haz click en el botón "Fetch" al lado del nombre. Esta acción recupera y envía cambios al mismo tiempo para sincronizar el repositorio local.
6. A veces, los cambios en el código de las "Urantiapedia Tools" implican cambios en las dependencias. Debes instalar o actualizar nuevas dependencias ejecutando el comando `npm install` desde una terminal en VS Code. Esto actualizará las dependencias del proyecto.