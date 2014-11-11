Surfer.Views.ShowAlbum = Backbone.View.extend({
  className: 'show-album', 
  
  initialize: function() {
    this.model.assets().fetch({
      data: {
        per_page: 30
      }
    });
    this.listenTo(this.model.assets(), 'sync',
          this.renderAndMasonry.bind(this));
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
    $assets.hide();

    this.$el.masonry({
      columnWidth: 200,
      itemSelector: '.asset-list-item',
      gutter: 10,
      isFitWidth: true
    });
    var view = this;
    $assets.imagesLoaded().progress(function (imgLoad, image) {
      var $asset = $(image.img).parents('.asset-list-item');
      $asset.show();
      view.$el.masonry('appended', $asset).fadeIn();
    });
  },
  
  template: _.template($('#template-show-album').html())
});