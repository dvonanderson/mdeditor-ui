'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    hinting: false,
    'ember-cli-babel': {
      includeExternalHelpers: true,
    },
    babel: {
      sourceMaps: 'inline',
    },
    sourceMaps: {
      enabled: true,
      extensions: ['js'],
    }
  });

  return app.toTree();
};
