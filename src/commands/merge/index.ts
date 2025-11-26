import { Args, Command, Flags } from '@oclif/core'
import { MergePdfs } from '../../merge/index.js';
export default class Merge extends Command {
  static override description = ' Merge multiple PDFs'

  static override args = {
    inputs: Args.string({ description: 'Input PDF files to merge', required: true, multiple: true }),
    output: Args.string({ description: 'Output merged PDF file', required: true }),
  }
  static override strict = false;

  public async run(): Promise<void> {
    const { args } = await this.parse(Merge)
    const { inputs } = args;

    if (inputs.length < 2) {
      this.error('Please provide at least two PDF files to merge.');
    }

    try {
      const argv = process.argv;
      const inputsArr = argv.slice(3, argv.length - 1);
      const result = await MergePdfs(inputsArr, argv[argv.length - 1]);

      if (result.success) {
        this.log(result.message);
      } else {
        this.error(result.message);
      }
    } catch (error: any) {
      this.error(`Unexpected error during merge: ${error.message}`);
    }

  }
}
