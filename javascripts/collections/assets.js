Surfer.Collections.Assets = Backbone.Collection.extend({
  fetchedCount: 0,
  
  currentPage: 1,

  initialize: function (models, album) {
    this.album = album;
  },
  
  url: function () {
    return this.album.url() + '/assets';
  },
  
  parse: function (jsonResp) {
    return jsonResp.data;
  },

  nextPage: function () {
    return ++this.currentPage;
  },

  fetchNextPage: function (successCallback) {
    if (this.fetchedCount === 0 || 
            (this.album.get('images_count') && 
            !(this.fetchedCount > this.album.get('images_count')))) {
      
      this.fetch({
        data: {
          per_page: 10,
          page: this.nextPage()
        },
        success: successCallback
      });
      console.log('fetched next page');
      this.fetchedCount += 10;
    }
  }
});
