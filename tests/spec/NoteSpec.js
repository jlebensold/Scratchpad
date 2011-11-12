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
  it("should draw to canvas with scratches", function(){
    expect(note.get('drawn')).toBeFalsy();
    note.set({scratches: [ 
        {x1 : 0.0,y1 : 1.0 , x2: 0.4, y2:1.4 },
        {x1 : 1.0,y1 : 1.0 , x2: 202.4, y2:10.4 },
        {x1 : 2.0,y1 : 1.0 , x2: 66.4, y2:212.4 },
        {x1 : 3.0,y1 : 1.0 , x2: 32.4, y2:115.4 }
      ]});
    note.draw("#testbed");
    expect(note.get('drawn')).toBeTruthy();
  });
});

