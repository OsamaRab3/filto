// const tesseract = require("node-tesseract-ocr")
import tesseract from "node-tesseract-ocr"
import fs from 'fs'
interface Result {
    success: boolean;
    text?: string;
    error?: Error;
}
export async function extractTextFromImage(filePath: string, lang: string): Promise<Result> {
    try {
        if(!fs.existsSync(filePath)){
            return { success: false,  error: new Error('File does not exist') };
        }

        const config = {
            lang: lang,
            oem: 1,
            psm: 3,
        }
        const img = fs.readFileSync(filePath)
        const text = await tesseract.recognize(img, config);
        return { success: true, text: text };

    } catch (error: any) {
        return { success: false, error: error.message ? new Error(error.message) : error };
    }
}