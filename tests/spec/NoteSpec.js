describe("Note", function() {
  var note;
  beforeEach(function() {
    note = new Note();  
  });
  it("should have title / description and completed", function() {
    expect(note.get('title')).toEqual("New Note");
    expect(note.get('description')).toEqual("");
    expect(note.get('completed')).toEqual(false);
  });
});

