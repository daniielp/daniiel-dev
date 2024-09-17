import eslintPluginAstro from "eslint-plugin-astro"
import checkFile from "eslint-plugin-check-file"
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    extends: ["prettier"],
    files: ["src/**/*"],
    plugins: {
      "check-file": checkFile
    },
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: ["error"],
      quotes: ["error", "double"],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE"
        },
        {
          ignoreMiddleExtensions: true
        }
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!^[.*": "KEBAB_CASE"
        }
      ]
    }
  }
]
