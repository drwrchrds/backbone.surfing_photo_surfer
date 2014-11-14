window.Surfer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $(main);
    
    new Surfer.Routers.Router($rootEl);
    Backbone.history.start();
  }
};

// UTILITY FUNCTIONS

// imgError callback replaces broken imgs with a custom broken-image png
Surfer.imgError = function (image) {
  image.onerror = '';
  image.src = 'images/no_image_available.png';
  return this;
};
