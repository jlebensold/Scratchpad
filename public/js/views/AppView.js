window.AppView = Backbone.View.extend({
  template: _.template($("#appview-template").html()),
  events: {
    'click button.addscratch' : "newscratch"
  },
  initialize: function() {
    _.bindAll(this,'render', 'newscratch');
    this.collection = new NoteList();
    this.collection.bind('add',this.addOne, this);
    this.collection.bind('change:selected',this.render,this);
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
    var s = this.collection.filter(function(n) { return n.get('selected'); });
    
    this.collection.each(function(n) {
      var noteview= new NoteView({model:n});
      $(this.el).find('.scratches').append(noteview.render().el);
    },this);
    
    // draw selected
    if (s.length > 0)
    {
      var selectedView = new NoteView({model: s[0]});
      $(".canvas").html(selectedView.render().el);
    }
    return this;
  }


});
var v;
