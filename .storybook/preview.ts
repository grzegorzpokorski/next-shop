import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
      stylePreview: true,
      dark: { ...themes.dark },
      light: { ...themes.normal },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
