# Format for indexes of articles

Format is TSV. `Rainbow CSV` is a recommended plugin for VS Code that colorizes and lints the format.

Lines can be any of next types:

- index title `\tab` external index link `\tab` is-title `\tab` index tags

- volume title `\tab` --- `\tab` is-volume `\tab` ---

- issue title `\tab` issue cover path `\tab` is-issue `\tab` ---

- article title `\tab` article path `\tab` author `\tab` article tags

Considerations:

- is-title: there must be only one line with this at the beginning
- is-volume: all lines until a new is-volume line will belong to same volume
- is-issue: all articles until a new is-issue or is-volume will belong to same issue
- author: must be one that gives author path name when replacing spaces with `_`. If there is no author use `---`.
- article tags: only tags relevant for the article, not `article` or the tag of the magazine, that will be in index tags.
- for translations only needed is: english title `\tab` translated title. Sames lines must be in the same line index. The index is what is used to match the translation (because there can be articles with same title).