import { Args, Command } from '@oclif/core';
import fs from 'fs';
import path from 'path';

import { convertImagesToPDF } from '../../image-to-pdf/image-to-pdf.js';
import { convertPdfToDocx } from '../../pdf/pdf-to-docx.js';
import { convertPdfToPptx } from '../../pdf/pdf-to-ppt.js';
const { convertPdfToImages } = await import('../../pdf/pdf-to-images.js');


const SUPPORTED_INPUT_EXTENSIONS = ['pdf', 'png', 'jpg'];
const SUPPORTED_OUTPUT_EXTENSIONS = ['pdf', 'docx', 'pptx', 'jpg'];

export default class Convert extends Command {
  static override description =
    'Convert files between different formats (images, PDFs, PowerPoint, Word, etc.)';

  static override args = {
    input: Args.string({
      description: 'Input files or directory to convert',
      required: true,
    }),
    output: Args.string({
      description: 'Output file or directory for the converted file',
      required: true,
    }),
  };

  static override strict = false;

  private validateFileExtension(filePath: string, validExtensions: string[], type: 'input' | 'output'): string {
    if (type === 'input' && (filePath.includes('*') || filePath.endsWith('/'))) {
      return '';
    }

    const ext = path.extname(filePath).toLowerCase().replace('.', '');

    if (!validExtensions.includes(ext)) {
      const supported = validExtensions.map(e => `.${e}`).join(', ');
      this.error(`Unsupported ${type} file extension: .${ext}. Supported formats: ${supported}`);
    }

    if (type === 'input' && !fs.existsSync(filePath)) {
      this.error(`Input file not found: ${filePath}`);
    }

    return ext;
  }


  public async run(): Promise<void> {
    const { args } = await this.parse(Convert);
    const { input, output } = args;

    try {
      const outputExt = path.extname(output).toLowerCase().replace('.', '');
      if (!SUPPORTED_OUTPUT_EXTENSIONS.includes(outputExt)) {
        this.error(`Unsupported output format: .${outputExt} Supported formats: ${SUPPORTED_OUTPUT_EXTENSIONS.join(', ')}`);
      }

      if (input.includes('*') || input.endsWith('/')) {
        if (outputExt !== 'pdf') {
          this.error('Multiple file input requires PDF as output format');
        }
        await this.handleMultipleFiles(input, output);
      } else {
        const inputExt = this.validateFileExtension(input, SUPPORTED_INPUT_EXTENSIONS, 'input');

        if (inputExt === 'pdf' && outputExt === 'docx') {
          await this.convertPdfToDocx(input, output);
        } else if (['png', 'jpg'].includes(inputExt) && outputExt === 'pdf') {
          await this.convertImagesToPdf([input], output);
        } else if (inputExt === 'pdf' && outputExt === 'pptx') {
          await this.convertPdfToPptx(input, output);
        }else if (inputExt === 'pdf' && outputExt === 'jpg') {
          await this.convertPdfToImages(input, output);
        }

        else {
          this.error(`Unsupported conversion: ${inputExt} → ${outputExt}`);
        }
      }
    } catch (error: any) {
      this.error(`Conversion failed: ${error.message}`);
    }
  }

  private async convertPdfToDocx(inputPdf: string, outputDocx: string) {
    this.log(`Converting PDF to DocX: ${inputPdf} → ${outputDocx}`);
    const result = await convertPdfToDocx(inputPdf, outputDocx);
    if (result.success) {
      this.log(`✓ ${result.message}`);
    } else {
      throw new Error(result.message);
    }
  }
  private async convertPdfToPptx(inputPdf: string, outputPptx: string) {
    this.log(`Converting PDF to PPTX: ${inputPdf} → ${outputPptx}`);
    const result = await convertPdfToPptx(inputPdf, outputPptx);
    if (result.success) {
      this.log(`✓ ${result.message}`);
    } else {
      throw new Error(result.message);
    }
  }
    private async convertPdfToImages(inputPdf: string, outputPptx: string) {
    this.log(`Converting PDF to PPTX: ${inputPdf} → ${outputPptx}`);
    const result = await convertPdfToImages(inputPdf, outputPptx);
    if (result.success) {
      this.log(`✓ ${result.message}`);
    } else {
      throw new Error(result.message);
    }
  }

  private async convertImagesToPdf(inputFiles: string[], outputPdf: string) {
    this.log(`Converting ${inputFiles.length} image(s) to PDF: ${outputPdf}`);

    const result = await convertImagesToPDF(inputFiles, outputPdf) as { success: boolean; message: string };
    if (result.success) {
      this.log(`✓ ${result.message}`);
    } else {
      throw new Error(result.message);
    }
  }

  private async handleMultipleFiles(inputPattern: string, outputFile: string) {
    if (!outputFile.endsWith('.pdf')) {
      this.error('Multiple file input requires PDF as output format');
    }

    const files = await this.globFiles(inputPattern);
    if (files.length === 0) {
      this.error('No files found matching the input pattern');
    }
    await this.convertImagesToPdf(files, outputFile);
  }

  private async globFiles(pattern: string): Promise<string[]> {
    if (pattern.endsWith('/')) {
      const files = fs.readdirSync(pattern);
      return files
        .filter(file => ['.jpg', '.png'].includes(path.extname(file).toLowerCase()))
        .map(file => path.join(pattern, file));
    }
    else if (pattern.includes('*')) {
      const dir = path.dirname(pattern);
      const basePattern = path.basename(pattern).replace('*', '');
      const files = fs.readdirSync(dir);
      console.log('Base Pattern:', basePattern, 'Files:', files, dir);
      return files
        .filter(file => file.startsWith(basePattern) && ['.jpg', '.png'].includes(path.extname(file).toLowerCase()))
        .map(file => path.join(dir, file));
    }
    return [pattern];
  }
}