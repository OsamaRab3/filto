import imageToPDF from 'image-to-pdf';
import * as imageToPDFModule from 'image-to-pdf';
// const imageToPDF = (imageToPDFModule as any).default || imageToPDFModule;
import { sizes } from 'image-to-pdf';
import fs from 'fs';

interface ConversionResult {
  success: boolean;
  message: string;
  error?: Error;
}

export async function convertImagesToPDF(inputImages:string[], outputPDF:string): Promise<ConversionResult>  {
  return new Promise((resolve) => {
    try {
      const pdfStream = imageToPDF(inputImages, sizes.A4);
      const writeStream = fs.createWriteStream(outputPDF);

      pdfStream.pipe(writeStream);

      writeStream.on('finish', () => {
        resolve({
          success: true,
          message: `Converted ${inputImages.length} images → ${outputPDF}`,
        });
      });

      writeStream.on('error', (err:Error) => {
        resolve({
          success: false,
          message: `Error writing file: ${err.message}`,
          error: err,
        });
      });

      pdfStream.on('error', (err:Error) => {
        resolve({
          success: false,
          message: `Conversion error: ${err.message}`,
          error: err,
        });
      });
    } catch (error: any) {
      resolve({
        success: false,
        message: `Unexpected error: ${error.message}`,
        error,
      });
    }
  });
}
