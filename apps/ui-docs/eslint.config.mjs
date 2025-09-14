// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { config as reactInternalConfig } from '@wani-works/eslint-config/react-internal';

export default [
  ...reactInternalConfig,
  ...storybook.configs['flat/recommended'],
];
