window.Note = Backbone.Model.extend({
  defaults: function(){
    return {
      title: "New Note",
      description: "",
      completed: null,
      order: -1
    };
  }
  

});
