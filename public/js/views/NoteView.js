window.NoteView = Backbone.View.extend({
  template: _.template($("#noteview-template").html()),
  tagName: 'li',
  startX: 0,
  startY: 0,
  drawing: false,
  events: {
     'mousedown canvas': 'markerDown',
     'mousemove canvas': 'markerMove',
     'mouseup canvas': 'markerUp'
  },
  initialize: function() {
    _.bindAll(this,'render','getCanvas','markerDown','markerMove','markerUp');
    this.model.bind('change:status',this.statusChanged);
    this.render();
    this.model.draw(this.options.canvas);
  },
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    $(this.el).append(this.getCanvas());
    this.drawing = false;
    return this;
  },
  statusChanged: function() { 
    console.log('s');

  },
  getCanvas: function() {
    if (this.options.canvas == undefined)
      this.options.canvas = $("<canvas></canvas");
    return this.options.canvas;
  },
  markerDown : function(e) {
    var ctx = this.getCanvas().get(0).getContext('2d');
    ctx.beginPath();
    this.startX = e.offsetX;
    this.startY = e.offsetY;
    ctx.moveTo(e.offsetX, e.offsetY);
    this.drawing = true;
  },
  markerMove : function(e) {
    if (this.drawing == false) return;
    var ctx = this.getCanvas().get(0).getContext('2d');
    this.model.addScratch(this.startX,this.startY,e.offsetX,e.offsetY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    this.startX = e.offsetX;
    this.startY = e.offsetY;
  },
  markerUp : function(e) {
    this.drawing = false;
    this.model.draw(this.options.canvas);
  }


});
