/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  app.import('bower_components/bootstrap/dist/css/bootstrap.css', {destDir: 'assets'});
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets' });
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css', {destDir: 'assets'});
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css.map', { destDir: 'assets' });
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css', {destDir: 'assets'});
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css.map', { destDir: 'assets' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('vendor/js/bootstrap-datepicker.js', { destDir: 'js'});
  app.import('vendor/js/moment.js', { destDir: 'js'});
  app.import('vendor/css/bootstrap-datepicker3.css', { destDir: 'assets'});
  app.import('vendor/css/bootstrap-datepicker3.css.map', { destDir: 'assets'});
  app.import('vendor/js/load.js', { destDir: 'assets'});
      // app.import('bower_components/bootstrap/dist/img/glyphicons-halflings.png',{destDir: 'img'});
  // app.import('bower_components/bootstrap/dist/img/glyphicons-halflings-white.png',{destDir: 'img'});


  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
