Surfer.Views.ShowAsset = Backbone.View.extend({
  template: _.template($('#template-show-asset').html()),

  initialize: function () {
    this.listenTo(this.collection, 'modal', this.showModal);
  },

  render: function (asset) {
    var renderedContent = this.template({
      asset: asset 
    });

    this.$el.html(renderedContent);
    return this;
  },

  showModal: function (asset) {
    // why does asset.attributes have lots of assets inside?
    this.render(asset);
    
    // don't pop the modal until image is loaded
    this.$el.imagesLoaded(function () {
      $(modal).modal();
    });
  }
});
