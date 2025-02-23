import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../docs/.vuepress/dist/index.html");
console.log("Processing file:", filePath);

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    if (!data.includes('go-import')) {
        console.error("Meta tag not found in index.html");
        return;
    }

    const updatedData = data.replace(
        '<meta name="go-import" content="gorim.org/gorim git https://github.com/rimba47prayoga/gorim">',
        `<meta name="go-import" content="gorim.org/gorim git https://github.com/rimba47prayoga/gorim">
     <meta name="go-import" content="gorim.org/gorim-cli git https://github.com/rimba47prayoga/gorim-cli">`
    );

    fs.writeFile(filePath, updatedData, "utf8", (writeErr) => {
        if (writeErr) {
            console.error("Error writing file:", writeErr);
        } else {
            console.log("✅ Meta tag updated successfully!");
        }
    });
});