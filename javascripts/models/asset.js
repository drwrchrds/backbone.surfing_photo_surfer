Surfer.Models.Asset = Backbone.Model.extend({
  parse: function(jsonResp) {
    return jsonResp.data;
  },

  rendered: false
});
