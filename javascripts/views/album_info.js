Surfer.Views.AlbumInfo = Backbone.View.extend({
  template: _.template($('#template-album-info').html()),
  
  events: {
    'click .see-more': 'toggleDetails'
  },
  
  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {
    var renderedContent = this.template({
      album: this.model
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  toggleDetails: function () {
    this.$('.more-details').slideToggle();
    return false;
  }
});