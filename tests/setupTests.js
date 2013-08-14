App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

App.Router.reopen({
  location: 'none'
});

function exists(selector) {
  return !!find(selector).length;
}
