# urantiapedia-syntax README

Extension to highlight with different colors the syntax of the Urantiapedia Topic Index files, that are the `*.txt` files included in `input/topic-index-*` folders.

## Features

- Highlights Topic Index files

## What's in the folder

* This folder contains all of the files necessary for your extension.
* `package.json` - this is the manifest file in which you declare your language support and define the location of the grammar file that has been copied into your extension.
* `syntaxes/urantiapedia.tmLanguage.json` - this is the Text mate grammar file that is used for tokenization.
* `language-configuration.json` - this is the language configuration, defining the tokens that are used for comments and brackets.

## Requirements

Open your workspace settings (`.vscode/settings.json`) and add the following configuration, if not previously added:

```json
{
  "files.associations": {
    "input/topic-index-*/**/*.txt": "urantiapedia"
  }
}
```

## Development

### Get up and running straight away

* Make sure the language configuration settings in `language-configuration.json` are accurate.
* Press `F5` to open a new window with your extension loaded.
* Create a new file with a file name suffix matching your language.
* Verify that syntax highlighting works and that the language configuration settings are working.

### Make changes

* Make changes to `syntaxes/urantiapedia.tmLanguage.json`
* You can relaunch the extension from the debug toolbar after making changes to the files listed above.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

### Add more language features

* To add features such as IntelliSense, hovers and validators check out the VS Code extenders documentation at https://code.visualstudio.com/docs

### Install your extension

* Change dir to the one of the extension: `cd urantiapedia-syntax`
* Package the extension with `vsce package` (requires `vsce`, install globally with `npm install -g vsce`)
* Install extension with `code --install-extension urantiapedia-syntax-0.0.1.vsix`
* Reload window with `Ctrl Shft P` + `Developer: Reload window` if needed.
* To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.

## Release Notes

### 0.0.1

Initial release

**Enjoy!**
