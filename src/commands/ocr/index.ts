import { Args, Command, Flags } from '@oclif/core'
import fs from 'fs'
import { extractTextFromImage } from '../../ocr/index.js'

export default class Ocr extends Command {
  static override description = 'Extract text from images or scanned PDF files using OCR';


  static override args = {
    input: Args.string({ description: 'image or PDF file to process' }),
  }

  static override flags = {
    language: Flags.string({ char: 'l', description: 'language for OCR processing', required: true }),
    output: Flags.string({ char: 'o', description: 'output file to save extracted text', required: false ,default:'output.txt'}),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Ocr)
    const textResult = await extractTextFromImage(args.input as string, flags.language)
    this.log(`Text extraction ${textResult.success ? 'succeeded' : 'failed'}.`)
    fs.writeFileSync(flags.output || 'output.txt', textResult.text || '', 'utf-8')
    this.log(`Extracted text saved to ${flags.output || 'output.txt'}`)
  }
}
