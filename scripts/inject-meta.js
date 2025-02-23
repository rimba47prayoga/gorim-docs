import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.join(__dirname, "../docs/.vuepress/dist");
const FILES_TO_UPDATE = ["index.html", "404.html"]; // Inject into both

const META_TAG = `<meta name="go-import" content="gorim.org/gorim git https://github.com/rimba47prayoga/gorim">
<meta name="go-import" content="gorim.org/gorim-cli git https://github.com/rimba47prayoga/gorim-cli">`;

FILES_TO_UPDATE.forEach((file) => {
    const filePath = path.join(BUILD_DIR, file);
    console.log(`Processing file: ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`);
        return;
    }

    let data = fs.readFileSync(filePath, "utf8");

    if (!data.includes("go-import")) {
        console.error(`⚠️ Meta tag not found in ${file}`);
        return;
    }

    if (!data.includes(META_TAG)) {
        data = data.replace(
            '<meta name="go-import" content="gorim.org/gorim git https://github.com/rimba47prayoga/gorim">',
            META_TAG
        );

        fs.writeFileSync(filePath, data, "utf8");
        console.log(`✅ Meta tag updated successfully in ${file}`);
    } else {
        console.log(`⚠️ Meta tag already exists in ${file}, skipping.`);
    }
});