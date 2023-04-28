/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/pages/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs/preset',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {},
    },
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/designer-system-ignite/';
    }

    return config;
  },
};
export default config;
