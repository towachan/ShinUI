/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'shin-ui',
    podModulePrefix: 'shin-ui/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' ",
      'font-src': "'self' ",
      'connect-src': "'self' http://bigsword.online:8080",
      'img-src': "'self' ",
      'style-src': "'self' 'unsafe-inline' "
    },

    APP: {
      ajax: "requests/"
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.ajax = "requests/";
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if(environment === 'tc'){
    ENV.baseURL = '/dist';
    ENV.APP.ajax = "http://bigsword.online:8080/bigsword/msgchannel";
  }

  if( environment === 'dist'){
    ENV.baseURL = '/dist';
  }

  if (environment === 'production') {

  }

  return ENV;
};
