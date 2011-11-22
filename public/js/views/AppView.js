window.AppView = Backbone.View.extend({
  template: _.template($("#appview-template").html()),
  events: {
    'click button.addscratch' : "newscratch"
  },
  initialize: function() {
    _.bindAll(this,'render', 'newscratch');
    this.collection = new NoteList();
    this.collection.bind('add',this.addOne, this);
    this.render();
  },
  addOne : function(note) { 
    v = new NoteView({model: note});
    $(this.el).find('.scratches').append(v.render().el);
  },
  newscratch : function() {
    this.collection.add({title: "Untitled" });
  },
  render: function() {
    $(this.el).html(this.template(this.collection));
    return this;
  }


});
