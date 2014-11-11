Surfer.Collections.Assets = Backbone.Collection.extend({
  initialize: function (models, album) {
    this.album = album;
  },
  
  url: function () {
    return this.album.url() + '/assets'
  },
  
  parse: function (jsonResp) {
    return jsonResp.data;
  }
});