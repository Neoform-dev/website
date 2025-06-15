import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),{
    rules : {
      "no-unused-vars": "off", // Disable no-unused-vars rule
      "react/react-in-jsx-scope": "off", // Disable react/react-in-jsx-scope rule
      "react/jsx-uses-react": "off", // Disable react/jsx-uses-react rule
      "react/jsx-uses-vars": "warn", // Warn on unused JSX variables
      "react/no-unescaped-entities": "off", // Disable react/no-unescaped-entities rule
      "@typescript-eslint/no-unused-vars": [
        "warn", // Change to 'warn' to avoid errors in development
        {
          argsIgnorePattern: "^_", // Ignore unused function arguments that start with an underscore
          varsIgnorePattern: "^_", // Ignore unused variables that start with an underscore
        },
      ],
    },
  }
];

export default eslintConfig;
