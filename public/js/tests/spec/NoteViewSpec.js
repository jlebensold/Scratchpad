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
});

