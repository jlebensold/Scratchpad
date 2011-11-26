describe("NoteView", function() {
  var noteView;
  var sampleScratches =  [ 
        {x1 : 0.0,y1 : 1.0 , x2: 0.4, y2:1.4 },
        {x1 : 1.0,y1 : 1.0 , x2: 202.4, y2:10.4 },
        {x1 : 2.0,y1 : 1.0 , x2: 66.4, y2:212.4 },
        {x1 : 3.0,y1 : 1.0 , x2: 32.4, y2:115.4 }
      ];


  beforeEach(function() {
    $("#testbed").remove();
    noteView = new NoteView({el:  $('<ul></ul>'), model: new Note(
        {
          title: "testing",
          description: "foobar",
          scratches : sampleScratches
        })}); 
  });
  it("should allow drawing on the canvas by recording scratches", function() {
     $("#tester").html(noteView.render().el);    
  });
  it("should set a starting point on markerDown",function() {
    noteView.markerDown({offsetX : 12, offsetY: 144 });
    expect(noteView.drawing).toBeTruthy();
    expect(noteView.startX).toEqual(12);
    expect(noteView.startY).toEqual(144);
  });
  it("should add a line on markermove to Note Model",function() {
    noteView.model.set({scratches: []});
    noteView.markerDown({offsetX : 12, offsetY: 144 });
    noteView.markerMove({offsetX : 122, offsetY: 12 });
    expect(noteView.drawing).toBeTruthy();
    expect(noteView.model.get('scratches')).toEqual([{x1:12,y1:144,x2:122,y2:12}]);
  });
  it("should stop drawing on markerUp",function() {
     noteView.markerDown({offsetX : 12, offsetY: 144 });   
     expect(noteView.drawing).toBeTruthy();
     noteView.markerUp();
     expect(noteView.drawing).toBeFalsy();
  });
  it("should have a textbox for changing the title",function(){
    noteView.model.set({status: 'edit'});
    console.log(noteView.render().el);
    
    expect(1).toEqual(1);
  });
});

