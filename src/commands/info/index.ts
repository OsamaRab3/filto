import { Args, Command, Flags } from '@oclif/core'
import { PDFParse } from 'pdf-parse';
import fs from 'fs';

export default class Info extends Command {
  static override description = 'Show info about a PDF file'

  static override args = {
    input: Args.string({ description: 'input PDF file', required: true }),
  }

  static override flags = {
    title: Flags.boolean({ char: 't', description: 'show title' }),
    creator: Flags.boolean({ char: 'c', description: 'show creator' }),
    pages: Flags.boolean({ char: 'n', description: 'show number of pages' }),
    size: Flags.boolean({ char: 'z', description: 'show size' })
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Info)

    try {
      const parser = new PDFParse({ url: args.input });
      const pdfDocument = await parser.getInfo();
      await parser.destroy();

      if (flags.title) this.log(`Title: ${pdfDocument.info?.Title || 'N/A'}`)
      if (flags.creator) this.log(`Creator: ${pdfDocument.info?.Creator || 'N/A'}`)
      if (flags.pages) this.log(`Pages: ${pdfDocument.total || 0}`)
      if (flags.size) {
        const stats = fs.statSync(args.input);
        let size = stats.size;
        let unit = 'B';

        if (size > 1024) { size /= 1024; unit = 'KB'; }
        if (size > 1024) { size /= 1024; unit = 'MB'; }

        this.log(`Size: ${size.toFixed(2)} ${unit}`);
      }

    } catch (error) {
      this.error(`Failed to read PDF info: ${error}`)
    }
  }
}
