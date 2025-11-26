
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import ConversionResult from '../types/converstionResult.js';

export async function MergePdfs(inputPdf: string[], output: string = "merged.pdf"): Promise<ConversionResult> {
    if (!fs.existsSync(inputPdf[0])) {
        return {
            success: false,
            message: `Input file not found: ${inputPdf}`
        };
    }

    try {
        const pdfToMerge = inputPdf.map(filePath => fs.readFileSync(filePath));

        const mergedPdf = await PDFDocument.create();
        for (const pdfBytes of pdfToMerge) {
            const pdf = await PDFDocument.load(pdfBytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => {
                mergedPdf.addPage(page);
            });
        }

        const buf = await mergedPdf.save();
        fs.writeFileSync(output, buf);

        return {
            success: true,
            message: `Successfully Merged PDFs: ${inputPdf.map(pdf => {
                return pdf
            })} into -> ${output}`
        };
    } catch (error: any) {
        return {
            success: false,
            message: `Error during Merge: ${error.message}`,
            error
        };
    }
}