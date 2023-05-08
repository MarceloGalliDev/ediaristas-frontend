import '../src/UI/styles/globals.css'
import StoryThemeProvider from '../src/UI/themes/StoryThemeProvider'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    ),
  },
};

export const decorators = [StoryThemeProvider]

//quando incluimos dentro do preview ele é destinado ao global