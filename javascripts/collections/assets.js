Surfer.Collections.Assets = Backbone.Collection.extend({
  currentPage: 1,

  initialize: function (models, album) {
    this.album = album;
  },
  
  url: function () {
    return this.album.url() + '/assets'
  },
  
  parse: function (jsonResp) {
    return jsonResp.data;
  },

  nextPage: function () {
    return ++this.currentPage;
  },

  fetchNextPage: function (successCallback) {

    this.fetch({
      data: {
        per_page: 30,
        page: this.nextPage()
      },
      success: successCallback
    });
  }
});
