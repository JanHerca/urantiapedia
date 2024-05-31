# HOWTO: Scan books

Sometimes a given book is not scanned or converted to text. To do that follow these steps:

1. If book is available in a site like archive.org, create snapshots of pages using a tool like Greenshot, that integrates with ImpScreen button to make it faster a serie of snaphsots.
2. Install TesseractOCR, free and Opensource, from here: https://github.com/UB-Mannheim/tesseract/wiki
3. Install Powershell extension 
4. Create a pair of folder, one with snaphsots, and one for texts.
5. Open VS Code in the root and from a **terminal prompt** create a file that list all snapshots: `dir *.* > ocr.ps1`
6. Make sure to have Powershell extension in VS Code.
7. Edit ps1 file with Powershel editor, so all commands are more or less like this: `& 'c:\Program Files\Tesseract-OCR\tesseract' ".\snapshots\<filename>.png" ".\texts\<filename>.txt"`
8. Click in `Execute All` button in Powershell editor. This creates a TXT file per PNG file scanned.
9. Make sure to have `Combine Files` extension in VS Code.
10. Right click in Texts folder and use Combine files. A temp file is created. Copy all content to a permanent TXT file.

A simpler way:

1. Create a file (`convert.ps1`):

```
Set-Location 'C:\Users\Scan'
Get-ChildItem -Filter '*.png' | ForEach-Object {
    & 'c:\Program Files\Tesseract-OCR\tesseract.exe' $_.Name ($_.BaseName)
}
```

2. Replace C:\Users\Scan with real path to scanned files.
3. Proceed like above 8.