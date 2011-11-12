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
  draw: function(selector)
  {
    _.each(this.get('scratches'),function(s){
      var c = $(selector).get(0).getContext('2d');
      c.beginPath();
      c.moveTo(s.x1,s.y1);
      c.lineTo(s.x2,s.y2);
      c.stroke();
    });
    this.set({drawn:true});
  }
  /*
   *
 // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
  */
});
