import { Args, Command, Flags } from '@oclif/core'
import { PDFParse } from 'pdf-parse';
import fs from 'fs';

export default class Extract extends Command {
  static override description = 'Extract text from PDF file'

  static override args = {
    input: Args.string({ description: 'input PDF file', required: true }),
  }
  static override flags = {
    page: Flags.integer({ char: 'p', description: 'page number to extract text from' }),
    output: Flags.string({ char: 'o', description: 'output file to save extracted text' }),

  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Extract)

    try {
      const parser = new PDFParse({ url: args.input });

      if (flags.page) {
        const pdfDocument = await parser.getText({ partial: [flags.page] });
        await parser.destroy();

        if (flags.output) {
          fs.writeFileSync(flags.output, pdfDocument.text);
          this.log(`✓ Extracted text from page ${flags.page} saved to ${flags.output}`);
        } else {
          this.log(pdfDocument.text);
        }
      } else {
        const pdfDocument = await parser.getText();
        await parser.destroy();

        if (flags.output) {
          fs.writeFileSync(flags.output, pdfDocument.text);
          this.log(`✓ Extracted text saved to ${flags.output}`);
        } else {
          this.log(pdfDocument.text);
        }
      }
    } catch (error) {
      this.error(`Error extracting text: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}
