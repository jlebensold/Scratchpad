window.AppView = Backbone.View.extend({
  template: _.template($("#appview-template").html()),
  events: {
    'click button.addscratch' : "newscratch"
  },
  initialize: function() {
    _.bindAll(this,'render', 'newscratch','renderSelected');
    this.collection = new NoteList();
    this.collection.bind('add',this.addOne, this);
    this.collection.bind('change:selected',this.render,this);
    this.collection.bind('change:title',this.render,this);
    this.collection.bind('remove',this.render,this);
    this.render();
  },
  addOne : function(note) { 
    var v = new NoteView({model: note});
    $(this.el).find('.scratches').append(v.render().el);
  },
  newscratch : function() {
    this.collection.add({title: "Untitled" });
  },
  renderSelected: function(note) {
      this.options.selectedView = new NoteView({model: note});
      $(".canvas").html(this.options.selectedView.render().el);
      $(".canvas").prepend("<h1>"+note.get('title')+"</h1>");
  },
  getSelectedView: function() {
    return this.options.selectedView;
  },
  getSelected: function() {
    var s = this.collection.filter(function(n) { return n.get('selected'); });
    if (s.length>0) return s[0];
    return null;
  },
  render: function() {
    $(this.el).html(this.template(this.collection));
    
    this.collection.each(function(n) {
      var noteview= new NoteView({model:n});
      $(this.el).find('.scratches').append(noteview.render().el);
    },this);
    
    // draw selected
    var s = this.getSelected();
    if (s != null) this.renderSelected(s);
    return this;
  }


});
