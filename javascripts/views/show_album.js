Surfer.Views.ShowAlbum = Backbone.View.extend({
  className: 'show-album', 
  
  initialize: function () {
    var view = this;
    
    this.model.fetch()
    this.model.assets().fetch({
      data: {
        per_page: 30
      },
      success: function () {
        view.renderAndMasonry();
      }
    });
    
    // this.listenTo(this.model.assets(), 'sync', this.renderAndMasonry.bind(this));
    // this.listenTo(this.model, 'sync', this.renderAndMasonry.bind(this));
  },

  
  render: function() {
    var renderedContent = this.template({
      album: this.model,
      assets: this.model.assets()
    })
    
    this.$el.html(renderedContent);
    return this;
  },
  
  renderAndMasonry: function() {
    this.render();

    var $assets = this.$('.asset-list-item');
    var $assetsList = this.$('.assets-list');
    $assets.hide();
    $assetsList.masonry({
      columnWidth: 200,
      itemSelector: '.asset-list-item',
      gutter: 10,
      isFitWidth: true
    });
    
    var view = this;
    $assets.imagesLoaded().progress(function (imgLoad, image) {
      var $asset = $(image.img).parents('.asset-list-item');
      $asset.show();
      $assetsList.masonry('appended', $asset).fadeIn();
    });
  },
  
  template: _.template($('#template-show-album').html())
});