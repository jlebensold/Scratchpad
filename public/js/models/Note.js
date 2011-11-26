window.Note = Backbone.Model.extend({
  url: function() { return '/notes/'+ this.id; },
  defaults: function(){
    return {
      id: null,
      title: "New Note",
      description: "",
      completed: false,
      scratches: [],
      order: -1,
      drawn: false
    };
  },
  addScratch: function(x1,y1,x2,y2) {
    this.get('scratches').push({x1: x1,y1: y1,x2:x2,y2:y2}); 
  },
  draw: function(selector)
  {
    var w = $(selector).width();
    var h = $(selector).height();
    var c = $(selector).get(0).getContext('2d'); 
    c.clearRect(0,0,w,h);
    _.each(this.get('scratches'),function(s){
      c.beginPath();
      c.moveTo(s.x1,s.y1);
      c.lineTo(s.x2,s.y2);
      c.stroke();
    });
    this.set({drawn:true});
  }
});
