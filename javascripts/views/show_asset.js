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
    this.render(asset);

    $(modal).modal();    
  }
});
