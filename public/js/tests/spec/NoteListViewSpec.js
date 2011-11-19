describe("NoteListView", function() {
  var noteviewlist;
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
    noteviewlist = new NoteListView({collection: new NoteList()} ); 
    noteviewlist.el = $('<div></div>');
  });
  afterEach(function() {
    this.server.restore();
  });



  it("should have Hello World", function() {
    noteviewlist.render();
    expect($(noteviewlist.el).text().trim()).toEqual("Hello World");
  });
});

