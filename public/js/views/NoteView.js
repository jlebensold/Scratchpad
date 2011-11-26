window.NoteView = Backbone.View.extend({
  template: _.template($("#noteview-template").html()),
  tagName: 'li',
  canvasWidth: 400,
  canvasHeight: 200,
  startX: 0,
  startY: 0,
  drawing: false,
  events: {
     'mousedown canvas': 'markerDown',
     'mousemove canvas': 'markerMove',
     'mouseup canvas': 'markerUp',
     'click .edit': 'editNoteMeta',
     'click .btn.save': 'saveNoteMeta',
     'click a.draw' :'select'
  },
  initialize: function() {
    _.bindAll(this,'render','getCanvas','markerDown','markerMove','markerUp','editNoteMeta','saveNoteMeta','select');
    this.model.bind('change:status',this.render);
    this.render();
    this.model.draw(this.getCanvas());
  },
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    $(this.el).find('.pad').html(this.getCanvas());
    this.drawing = false;
    return this;
  },
  select: function(e) {
    var s = this.model.collection.filter(function(n){ return n.get('selected');});
    if (s.length > 0)
      s[0].set({'selected':false});
    this.model.set({selected: true});
    e.preventDefault();
  },
  editNoteMeta: function() {
    this.model.set({status: 'edit'});
  },
  saveNoteMeta: function() {
    this.model.set({
      title: $(this.el).find('.title').val(),
      description: $(this.el).find('.description').val()
    });
    this.model.set({status:'read'});
  },
  getCanvas: function() {
    if (this.options.canvas == undefined)
    {
      this.options.canvas = $('<canvas width="'+this.canvasWidth+'" height="'+this.canvasHeight+'" ></canvas');
    }
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
    //$("footer").append('bar');
  }


});
