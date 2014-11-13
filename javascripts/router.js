Surfer.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$assetsList = $(main);
    this.$albumDetails = $(albumDetails);
    this.$modal = $(modal);
  },
  
  routes: {
    '': 'main'
  },
  
  main: function() {
    var album = new Surfer.Models.Album({ shortcut: 'aus6kwrg' });
    
    var albumInfo = new Surfer.Views.AlbumInfo({ model: album });
    var assetsList = new Surfer.Views.AssetsList({ collection: album.assets() });
    var assetModal = new Surfer.Views.ShowAsset({ collection: album.assets() });
    
    this.$assetsList.html(assetsList.$el);
    this.$albumDetails.html(albumInfo.$el);
    this.$modal.html(assetModal.$el);
  }
});
