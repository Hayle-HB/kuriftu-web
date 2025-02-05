import fs from "fs";
import path from "path";
import { glob } from "glob";

const directory = "src/**/*.{js,ts,tsx,json}";

// Define the S3 base URL (update this with your actual bucket)
const S3_BASE_URL = "https://kuriftu-public-media.s3.amazonaws.com";

// Regex to find local media references
const LOCAL_MEDIA_REGEX = /(["'`])\/([^"'`]+\.(jpg|jpeg|png|webp|gif|mp4|mov|MOV|MP4))\1/gi;

async function replaceLocalReferences() {
  try {
    const files: string[] = await glob(directory);

    files.forEach((file) => {
      let content = fs.readFileSync(file, "utf8");
      let updatedContent = content.replace(LOCAL_MEDIA_REGEX, (_, quote, filePath) => {
        return `${quote}${S3_BASE_URL}/${filePath}${quote}`;
      });

      if (content !== updatedContent) {
        fs.writeFileSync(file, updatedContent, "utf8");
        console.log(`Updated references in: ${file}`);
      }
    });

    console.log("✅ All local media references have been replaced with S3 URLs.");
  } catch (error) {
    console.error("❌ Error replacing local references:", error);
  }
}

// Run the replacement process
replaceLocalReferences();
