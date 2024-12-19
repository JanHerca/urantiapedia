# urantiapedia-syntax README

Extension to highlight with different colors the syntax of the Urantiapedia Topic Index files, that are the `*.txt` files included in `input/topic-index-*` folders.

## Features

- Highlights Topic Index files

## Requirements

Open your workspace settings (`.vscode/settings.json`) and add the following configuration:

```json
{
  "files.associations": {
    "input/topic-index-*/**/*.txt": "urantiapedia"
  }
}
```

## Release Notes

### 1.0.0

Initial release

**Enjoy!**
