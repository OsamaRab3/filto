<div align="center">
  <img src="./logo.svg" alt="Filto" width="200"/>
  <h1>Filto</h1>
  <p>
    <strong>⚡ Fast, lightweight, and privacy-focused CLI tool for file conversion</strong>
  </p>
  <p>
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#examples">Examples</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#license">License</a>
  </p>
  
  [![GitHub release (latest by date)](https://img.shields.io/github/v/release/OsamaRab3/filto?color=blue)](https://github.com/OsamaRab3/filto/releases/latest)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![GitHub issues](https://img.shields.io/github/issues/OsamaRab3/filto?color=blue&label=issues)](https://github.com/OsamaRab3/filto/issues)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/OsamaRab3/filto/pulls)
</div>

## Features

- **Privacy First**: Runs entirely offline - no file uploads to external servers
- **Lightning Fast**: Optimized for quick file conversions
- **Versatile**: Supports multiple file formats and conversion types
- **Batch Processing**: Convert multiple files or entire folders at once
- **Cross-Platform**: Works on Windows, macOS, and Linux

### Supported Conversions

#### Currently Available
- **Images** → PDF (supports PNG, JPG)
- **PDF** → Word (DOCX)
- **PDF** → PowerPoint (PPTX)
- **PDF** → Images (JPG)
- **PDF** → Text (TXT) - Extract text content from PDF files
- **PDF Info** → Display metadata (title, creator, page count, file size)

#### Coming Soon
- PowerPoint → PDF
- Excel → PDF
- HTML → PDF
- Merge multiple PDFs
- PDF compression
- PDF text extraction

## Installation
### Quick Install 
Install Filto using npm:

```bash
npm install filto
```

### Verify Installation
```bash
filto --version
```

### From Source
1. Clone the repository:
```bash
git clone https://github.com/OsamaRab3/filto.git
cd filto
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Link it globally:
```bash
npm link
```

## Usage

```
filto convert <input> <output>
```

## Basic Commands
### 1. Convert Images to PDF
Convert single or multiple images to PDF file

**Single Image:**
```
filto convert image.png output.pdf
```
**Multiple Images:**

if you have a multiple image put in folder then run 

**Using glob pattern**
```
filto convert images/ output.pdf
```

---
### 2. Convert Pdf to Docx 
```
filto convert input.pdf output.docx 
```
---
### 3. Convert Pdf to Pptx 
```
filto convert input.pdf out.pptx
```
---
### 4. Convert Pdf to Images

```
filto convert input.pdf output.jpg
```

---
### 2. Get PDF Information
Display information about a PDF file

**Show specific information (use any combination of flags):**
```
filto info input.pdf -t -c -n -z
```

**Flags:**
- `-t, --title`: Show document title
- `-c, --creator`: Show document creator
- `-n, --pages`: Show number of pages
- `-z, --size`: Show file size

---
### 3. Extract Text from PDF
Extract text content from PDF files

**Basic extraction:**
```
filto extract input.pdf
```

**Extract from specific page:**
```
filto extract input.pdf -p 1
```

**Save to output file:**
```
filto extract input.pdf -o extracted.txt
```

**Extract from specific page and save to file:**
```
filto extract input.pdf --page 1 --output page1.txt
```
---
## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

<div align="center">
  Made with ❤️ by Osama Rabea
</div>
