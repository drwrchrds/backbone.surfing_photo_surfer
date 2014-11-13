Surfer.Models.Album = Backbone.Model.extend({
  assets: function () {
    if(!this._assets) {
      this._assets = new Surfer.Collections.Assets([], this);
    }
    return this._assets;
  },
  
  idAttribute: 'shortcut',
  
  urlRoot: 'http://api.getchute.com/v2/albums',
  
  parse: function (jsonResp) {
    var data = jsonResp.data;
    return data;
  }
});