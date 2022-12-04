'use strict';

var path = require('path');

module.exports = {
  name: require('./package').name,
  included(app) {
    this._super.included.apply(this, arguments);

    this.includeBootstrapStyles(app);
  },

  /**
   * Finds the Bootstrap styles folder and includes it into the running applications
   * `sassOptions.includePaths.
   */
  includeBootstrapStyles(app) {
    const bootstrapPath =
      "../../node_modules/bootstrap/dist/css"

    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];

    app.options.sassOptions.includePaths.push(bootstrapPath);
  }
};
