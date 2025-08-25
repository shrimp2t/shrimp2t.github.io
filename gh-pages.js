// scripts/fix-gh-pages.js
import fs from "fs";
import path from "path";

const outDir = "./docs";

// Đệ quy duyệt tất cả file html/css/js
function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walk(filePath);
    } else if (/\.(html|js|css)$/.test(filePath)) {
      let content = fs.readFileSync(filePath, "utf8");
      // Thay /_next/... => /next/...
      content = content.replace(/\/_next\//g, "/next/");
      fs.writeFileSync(filePath, content, "utf8");
    }
  });
}

// Đổi tên folder _next thành next
fs.renameSync("./docs/_next", "./docs/next");

// Chạy replace trong toàn bộ out/
walk(outDir);
