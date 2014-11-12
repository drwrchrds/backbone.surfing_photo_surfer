Surfer.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $(main);
    this.$albumDetails = $(albumDetails);
  },
  
  routes: {
    '': 'main'
  },
  
  main: function() {
    album = new Surfer.Models.Album({ shortcut: 'aus6kwrg' });
    
    var albumInfo = new Surfer.Views.AlbumInfo({ model: album });
    var indexView = new Surfer.Views.ShowAlbum({ model: album });
    
    this.$rootEl.html(indexView.$el);
    this.$albumDetails.html(albumInfo.$el);
  }
});
