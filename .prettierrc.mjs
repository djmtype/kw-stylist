/** @type {import("prettier").Config} */
export default {
 plugins: ["prettier-plugin-astro"],
 overrides: [
   {
     files: "*.astro",
     options: {
       parser: "astro",
       semi: false,
       trailingComma: "es5",
       proseWrap: "preserve"
      //  htmlWhitespaceSensitivity: "ignore",
      //  printWidth: 120,
     },
   },
 ],
};