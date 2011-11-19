window.NoteView = Backbone.View.extend({
  template: _.template($("#appview-template").html()),
  initialize: function() {
    _.bindAll(this,'render');

  },
  render: function() {
    $(this.el).html(this.template(this.collection));
    return this;
  }


});
