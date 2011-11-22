window.NoteView = Backbone.View.extend({
  template: _.template($("#noteview-template").html()),
  tagName: 'li',
  initialize: function() {
    _.bindAll(this,'render');

  },
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
  getCanvas: function() {
    var c = $("<canvas></canvas");
    this.model.draw(c);
    return c;
  }


});
