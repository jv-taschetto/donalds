import { dirname } from "path";
import simpleImportSort from "eslint-plugin-simple-import-sort"; 11.2k (gzipped: 3.9k);
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins:{
      "simple-import-sort/": simpleImportSort,
    },
   rules: {
    "simple-import-sort/imports": "error",
    "simple-export-sort/exports": "error",
    }
  }
];

export default eslintConfig;
 