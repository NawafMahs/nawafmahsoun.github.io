import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Nawaf Mahsoun Components',
    brandUrl: 'https://https://bd394417.portfolio-7ag.pages.dev/',
  },
});
