import fs from "fs";
import path from "path";
import { glob } from "glob";
import { createObjectCsvWriter } from "csv-writer";
import * as xlsx from "xlsx";

// Get command-line arguments
const args = process.argv.slice(2);
const saveExcel = args.includes("-f"); // Check if "-f" flag is present

const directory = "src/**/*.{js,ts,tsx,json}";

// Regex for detecting media files (images & videos)
const MEDIA_REGEX = /(["'`])(\/[^"'`]+\.(jpg|jpeg|png|webp|gif|mp4|mov|MOV|MP4))\1|(["'`])(https?:\/\/[^"'`]+\.(jpg|jpeg|png|webp|gif|mp4|mov|MOV|MP4))\4/gi;

// Define output file names
const CSV_FILE = "media_references.csv";
const EXCEL_FILE = "media_references.xlsx";

// Define data structure
interface MediaReference {
  link: string;
  filePath: string;
  lineNumber: number;
}

// Function to analyze media usage
async function analyzeMediaUsage() {
  try {
    const files: string[] = await glob(directory);
    let mediaReferences: MediaReference[] = [];

    for (const file of files) {
      const content = fs.readFileSync(file, "utf8");
      const lines = content.split("\n");

      lines.forEach((line, index) => {
        let match;
        while ((match = MEDIA_REGEX.exec(line)) !== null) {
          const link = match[2] || match[5]; // Capture local or prod link
          if (link) {
            mediaReferences.push({
              link,
              filePath: file,
              lineNumber: index + 1, // Line numbers start at 1
            });
          }
        }
      });
    }

    console.log(`✅ Found ${mediaReferences.length} media references.`);
    await saveToCSV(mediaReferences);
    
    if (saveExcel) {
      saveToExcel(mediaReferences);
    }
  } catch (error) {
    console.error("❌ Error analyzing media usage:", error);
  }
}

// Function to save results to CSV
async function saveToCSV(data: MediaReference[]) {
  const csvWriter = createObjectCsvWriter({
    path: CSV_FILE,
    header: [
      { id: "link", title: "Media Link" },
      { id: "filePath", title: "Referencing File" },
      { id: "lineNumber", title: "Line Number" },
    ],
  });

  await csvWriter.writeRecords(data);
  console.log(`✅ Data saved to ${CSV_FILE}`);
}

// Function to save results to Excel (only if "-f" flag is present)
function saveToExcel(data: MediaReference[]) {
  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Media References");
  xlsx.writeFile(workbook, EXCEL_FILE);
  console.log(`✅ Data saved to ${EXCEL_FILE}`);
}

// Run the analysis
analyzeMediaUsage();
