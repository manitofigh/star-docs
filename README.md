# Star Docs

## Getting started

To get started with this template locally, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.
**Note**: If another process is already using port 3000, the next port (e.g., 3001, 3002, etc.) is automatically tried sequentially until a free port is found. Just be aware of what is printed in your console.

## Node.js version too low?

Heads up: This project uses [Next.js](https://nextjs.org/).

To use Next.js, you need Node.js version `18.18` or newer.

Check your current node version use:

```bash
node --version
```

If it's below the required version, upgrade to the latest LTS version using `nvm` (Node Version Manager).

See https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating to install `nvm`.

After `nvm` is installed, run:

```bash
# As of today (Sept 25 2024), the newest LTS version for node is 20.17.0
nvm install 20
```

Followed by:

```bash
nvm use 20
```

Double-check the version upgrade with `node --version`.

## Code Consistency

### Prettier for code formatting

Some argue formatting is purely opinionated, but you can't deny someone belongs to a mental hospital if they have 15 space indentation and no semiconols when working with e.g., JS/TS.

If you've noticed, there is a `.prettierrc` file at the root of the app, indicating how the code is re-formatted upon each save.

Whatever you indicate in that file, you can configure your editor so that on each save, it reformats your file based on the set rules.

There's no black magic. It just takes in your file, sends it through Prettier, and replaces your current file with whatever Prettier spits out based on your `.prettierrc` file.

**BUT**, this does not happen by default unless you have your editor set up in a way to recognize the `.prettierrc` file at the root of your directory, and trigger that functionality upon each save.

#### VSCode

Follow the steps at: https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code#step-2-formatting-code-on-save

#### NeoVim

You need `conform.nvim`, `mason.nvim`, and `mason-lspconfig.nvim` installed.

Then, setup `mason.nvim` to ensure `prettier` is installed.

Finally, configure `conform.nvim` to autoformat upon saving.

If it helps, you can look at an example that has it setup at [this repo](https://github.com/manitofigh/nvim/blob/main/init.lua)

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/markdoc/search.mjs` file.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).
