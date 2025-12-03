import { dirname } from "path";
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
    // Add this object to override rules
    rules: {
      // Examples:
      "react/no-unescaped-entities": "off", // Disable completely
      "@typescript-eslint/no-unused-vars": "warn", // Turn into a warning instead of error
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
];

export default eslintConfig;
