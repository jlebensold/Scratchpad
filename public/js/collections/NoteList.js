window.NoteList = Backbone.Collection.extend(
{
  model: Note,
  url:"/notes"
});
