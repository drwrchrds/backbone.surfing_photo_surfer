Surfer.Views.AssetsList = Backbone.View.extend({
  attributes: {
    'data-masonry-options': JSON.stringify({
      columnWidth: 200, 
      itemSelector: ".asset-list-item",
      gutter: 10,
      isFitWidth: true
    })
  },

  className: 'assets-list js-masonry', 
  
  tagName: 'section',
  
  events: {
    'click .asset-list-item img': 'showModal'
  },

  initialize: function () {
    this.collection.fetchNextPage();
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function () {
    var that = this;
    this.collection.each(function (asset) {
      if(!asset.rendered) {
        var $tile = $(that.listItemTemplate({ asset: asset }));
        $tile.hide();
        that.$el.append($tile);
        
        // use imagesLoaded callback to ensure image has arrived before
        // revealing and 'masonrying' the item.
        $tile.imagesLoaded(function () {
          $tile.show();
          that.$el.masonry('appended', $tile).fadeIn();
        });
        
        asset.rendered = true;
      }
    });
    
    this.delegateEvents();
    this.bindScrollEvents();
  },
  
  bindScrollEvents: function () {
    
    var view = this;
    function bindScroll() {
      if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $(window).unbind('scroll');
        view.collection.fetchNextPage();
      }
    }

    $(window).scroll(bindScroll);
  },

  showModal: function(event) {
    var $img = $(event.target);
    var id = $img.data('id');

    var asset = this.collection.get(id);
    this.collection.trigger('modal', asset);
  },
  
  listItemTemplate: _.template($('#template-assets-list-item').html())
});
