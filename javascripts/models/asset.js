Surfer.Models.Asset = Backbone.Model.extend({
  idAttribute: 'shortcut',

  parse: function(jsonResp) {
    return jsonResp.data;
  },

  rendered: false
});
