import { Args, Command } from '@oclif/core';
import { convertImagesToPDF } from './image-to-pdf.js';
import fs from 'fs';
import path from 'path';

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

  private validateImages(files: string[]) {
    if (files.length === 0) this.error('Please provide at least one image file.');

    for (const file of files) {
      if (!fs.existsSync(file)) this.error(`File not found: ${file}`);

      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.png'].includes(ext)) {
        this.error(`Unsupported image format: ${ext}. Allowed: .jpg, .png`);
      }
    }
  }

  public async run(): Promise<void> {
    await this.parse(Convert);
    const args = process.argv.slice(3);
    const output = args[args.length - 1];
    const inputs = args.slice(0, -1);

    this.validateImages(inputs);
      this.log(`Converting images: ${inputs}`);
      const result = await convertImagesToPDF(inputs, output) as { success: boolean; message: string };

    if (result.success) {
      this.log(`✓ ${result.message}`);
    } else {
      this.error(result.message);
    }
  }
}
