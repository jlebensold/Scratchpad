describe("NoteView", function() {
  var note;
  var sampleScratches =  [ 
        {x1 : 0.0,y1 : 1.0 , x2: 0.4, y2:1.4 },
        {x1 : 1.0,y1 : 1.0 , x2: 202.4, y2:10.4 },
        {x1 : 2.0,y1 : 1.0 , x2: 66.4, y2:212.4 },
        {x1 : 3.0,y1 : 1.0 , x2: 32.4, y2:115.4 }
      ];


  beforeEach(function() {
    $("#testbed").remove();
    note = new NoteView({el:  $('<ul></ul>'), model: new Note(
        {
          title: "testing",
          description: "foobar",
          scratches : sampleScratches
        })}); 
  });
  it("should allow drawing on the canvas by recording scratches", function() {
     $("#tester").html(note.render().el);    
  });
  it("should set a starting point on markerDown",function() {
    note.markerDown({offsetX : 12, offsetY: 144 });
    expect(note.drawing).toBeTruthy();
    expect(note.startX).toEqual(12);
    expect(note.startY).toEqual(144);
  });
  it("should add a line on markermove to Note Model",function() {
    note.model.set({scratches: []});
    note.markerDown({offsetX : 12, offsetY: 144 });
    note.markerMove({offsetX : 122, offsetY: 12 });
    expect(note.drawing).toBeTruthy();
    expect(note.model.get('scratches')).toEqual([{x1:12,y1:144,x2:122,y2:12}]);
  });
  it("should stop drawing on markerUp",function() {
     note.markerDown({offsetX : 12, offsetY: 144 });   
     expect(note.drawing).toBeTruthy();
     note.markerUp();
     expect(note.drawing).toBeFalsy();
  });
});

