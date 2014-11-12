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
    var assetsList = new Surfer.Views.AssetsList({ model: album });
    
    this.$rootEl.html(assetsList.$el);
    this.$albumDetails.html(albumInfo.$el);
  }
});
