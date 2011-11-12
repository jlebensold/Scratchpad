describe("NoteList", function() {
  var notelist;
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
    notelist = new NoteList();  
  });
  afterEach(function() {
    this.server.restore();
  });
  it("should contains notes", function() {

    var spy = sinon.spy(jQuery, 'ajax');
    notelist.add({title: "hello", description: "world" });
    expect(notelist.first().get("title")).toEqual("hello");
    
    notelist.first().save();
    expect(spy).toHaveBeenCalled();

  });
});

