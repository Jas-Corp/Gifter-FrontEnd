module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "import", next: "*" }, // Ligne vide après les imports
      { blankLine: "any", prev: "import", next: "import" }, // Permet des lignes vides entre les imports
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin", // Modules Node.js intégrés
          "external", // Librairies tierces (ex : react, lodash)
          "internal", // Tes propres modules (si configurés dans ton projet)
          "parent", // Imports relatifs au niveau parent (../)
          "sibling", // Imports relatifs au même niveau (./)
          "index", // Imports d'index (./index.js)
        ],
        pathGroups: [
          {
            pattern: "@/**", // Pour les imports commençant par '@'
            group: "internal",
            position: "before",
          },
          {
            pattern: "../**", // Pour les imports commençant par '..'
            group: "parent",
            position: "before",
          },
          {
            pattern: "./*.module.scss", // Pour les imports de styles CSS modules
            group: "index",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "external"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },

  settings: {
    "import/resolver": {
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        map: [
          ["@/api", "/src/api"],
          ["@/features", "/src/features"],
          ["@/ui", "/src/components/ui"],
          ["@/form", "/src/components/form"],
          ["@/utils", "/src/utils"],
        ],
      },
    },
  },
};
