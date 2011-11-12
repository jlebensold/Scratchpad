window.Note = Backbone.Model.extend({
  url: function() { return '/notes/'+ this.id; },
  defaults: function(){
    return {
      id: null,
      title: "New Note",
      description: "",
      completed: false,
      order: -1
    };
  }
  

});
