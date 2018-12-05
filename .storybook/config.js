import { configure, addDecorator } from '@storybook/react';
import 'storybook-chromatic/storybook-addon';
import 'storybook-chromatic';
import { withNotes } from '@storybook/addon-notes';

import '../src/index.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);

configure(loadStories, module);