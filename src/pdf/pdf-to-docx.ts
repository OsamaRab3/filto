
import AsposePdf from 'asposepdfnodejs';
import fs from 'fs';
import  ConversionResult  from '../types/converstionResult.js';
import AsposePdfConversionResult from '../types/AsposePdfConversionResult.js';

export async function convertPdfToDocx(inputPdf: string, outputDocx: string): Promise<ConversionResult> {
    if (!fs.existsSync(inputPdf)) {
        return {
            success: false,
            message: `Input file not found: ${inputPdf}`
        };
    }

    try {
      
        const AsposePdfModule = await AsposePdf();
        
        const result = await new Promise<AsposePdfConversionResult>((resolve) => {
            const conversion = AsposePdfModule.AsposePdfToDocX(inputPdf, outputDocx);
            resolve(conversion);
        });

        if (result.errorCode === 0) {
            return {
                success: true,
                message: `Successfully converted PDF to DOCX: ${outputDocx}`
            };
        } else {
            return {
                success: false,
                message: `Conversion failed: ${result.errorText || 'Unknown error'}`,
                error: new Error(result.errorText || 'Unknown error during conversion')
            };
        }
    } catch (error: any) {
        return {
            success: false,
            message: `Error during conversion: ${error.message}`,
            error
        };
    }
}