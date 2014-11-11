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
    if(data.user) {
      this.user().set(data.user);
      delete data.user;
    }
    return data;
  },
  
  user: function () {
    if(!this._user) {
      this._user = new Surfer.Models.User({}, this);
    } 
    return this._user;
  }
});