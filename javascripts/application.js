window.Surfer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $(main);
    router = new Surfer.Routers.Router($rootEl);
    Backbone.history.start();
  }
}

// UTILITY FUNCTIONS

// imgError replaces broken image links with default broken-image png
// ref:  http://stackoverflow.com/questions/92720/jquery-javascript-to-replace-broken-images?lq=1
var imgError = function (image) {
  image.onerror = '';
  image.src = 'http://www.solid-run.com/wiki/images/7/75/No_image_available.png';
  return this;
}