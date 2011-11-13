window.NoteListView = Backbone.View.extend({
  template: _.template($("#notelistview-template").html()),
  initialize: function() {
    _.bindAll(this,'render');

  },
  render: function() {
    $(this.el).html(this.template(this.collection));
    return this;
  }


});
