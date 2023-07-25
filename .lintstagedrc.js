module.exports = {
  "*.{js,jsx,ts,tsx,md,mdx,graphql,yml,yaml,css,scss,json}": (filenames) => [
    `pnpm prettier --write ${filenames.join(" ")}`,
  ],
  ".{js,jsx,ts,tsx}": (filenames) =>
    `next lint --fix --quiet ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" --file ")}`,
};
