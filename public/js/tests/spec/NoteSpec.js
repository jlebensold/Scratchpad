describe("Note", function() {
  var note;
  var sampleScratches =  [ 
        {x1 : 0.0,y1 : 1.0 , x2: 0.4, y2:1.4 },
        {x1 : 1.0,y1 : 1.0 , x2: 202.4, y2:10.4 },
        {x1 : 2.0,y1 : 1.0 , x2: 66.4, y2:212.4 },
        {x1 : 3.0,y1 : 1.0 , x2: 32.4, y2:115.4 }
      ];
  beforeEach(function() {
    note = new Note();  
    this.server = sinon.fakeServer.create();
  });
   afterEach(function() {
    this.server.restore();
  });

  it("should have title / description and completed", function() {
    expect(note.get('title')).toEqual("New Note");
    expect(note.get('description')).toEqual("");
    expect(note.get('completed')).toEqual(false);
  });
  it("should draw to canvas with scratches", function(){
    expect(note.get('drawn')).toBeFalsy();
    note.set({scratches: sampleScratches });
    note.draw("#testbed");
    expect(note.get('drawn')).toBeTruthy();
  });
  it("should be persisted", function(){ 
    var spy = sinon.spy(jQuery, 'ajax');
    note.set({scratches: sampleScratches , id: 123 });
    note.save();
    this.server.respond(); 
    expect(spy.getCall(0).args[0].url).toEqual("/notes/123");
    jQuery.ajax.restore();
  });
  it("should allow adding scratches after the render", function() {
    note.set({scratches: sampleScratches});
    expect(note.get('scratches').length).toEqual(4);
    note.addScratch(12,24,353,43);
    expect(note.get('scratches').length).toEqual(5);

  });
});
