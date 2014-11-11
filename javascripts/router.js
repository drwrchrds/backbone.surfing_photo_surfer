Surfer.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },
  
  routes: {
    '': 'showAlbum',
    '/assets/:id': 'showLightbox'
  },
  
  showAlbum: function() {
    var router = this;
    album = new Surfer.Models.Album({ shortcut: 'aus6kwrg' });
    album.fetch();
    
    var indexView = new Surfer.Views.ShowAlbum({ model: album });
    this.$rootEl.html(indexView.$el);
  },
  
  showLightBox: function() {
  }
});