Surfer.Views.AssetsList = Backbone.View.extend({
  className: 'assets-list', 
  
  tagName: 'section',
  
  events: {
    'click .asset-list-item img': 'showModal'
  },

  initialize: function () {
    var view = this;
    
    this.model.assets().fetch({
      data: {
        per_page: 30
      },
      success: function () {
        view.renderAndMasonry();
      }
    });
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

  showModal: function(event) {
    var $img = $(event.target);
    var id = $img.data('id');

    var asset = this.model.assets().get(id);
    this.model.assets().trigger('modal', asset);
  },
  
  template: _.template($('#template-assets-list').html())
});
