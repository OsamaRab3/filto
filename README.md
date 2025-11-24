<div align="center">
  <img src="./logo.svg" alt="Filto" width="200"/>
  <h1>Filto</h1>
  <p>
    <strong>Fast, lightweight, and privacy-focused CLI tool for file conversion</strong>
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

- **Images** → PDF
- **PDF** → Word (DOCX)
- **PowerPoint** → PDF
- **Excel** → PDF
- **PDF** → Images
- **HTML** → PDF
- **Merge** multiple PDFs into one
- **Split** PDFs into specific page ranges
- **Compress** PDFs to smaller sizes
- **Extract** text or images from PDFs
- **Convert** between various document formats

## Installation


### Quick Install
```bash

```

### From Source
```bash

```

##  Usage

```
filto [OPTIONS] COMMAND [ARGS]...
```

## Basic Commands
### 1. convert Images to PDF
convert single or multiple images to PDF file

**Single Image:**
```
filto convert image.png output.pdf
```
**Multiple Images:**

if you have a multiple image put in folder then run 

**Using glob pattern**
```
filto convert images/*.{jpg,png} output.pdf
```
**Or list files individually**
```
filto convert image1.jpg image2.png output.pdf
```


## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

<div align="center">
  Made with ❤️ by Osama Rabea
</div>
