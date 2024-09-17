/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  semi: false,
  printWidth: 100,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
}
