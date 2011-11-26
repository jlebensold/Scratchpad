describe("AppView", function() {
  var app, spy;
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
    app = new AppView({el:  $('<div></div>') } ); 
    spy = sinon.spy(app.collection, "add"); 
  });
  afterEach(function() {
    this.server.restore();
  });

  it("should have events for adding scratch", function() {
    $(app.el).find(".addscratch").trigger('click');
    expect(app.collection.add).toHaveBeenCalledOnce();
    expect(app.collection.length).toEqual(1);
    expect($(app.el).find('.scratches li').length).toEqual(1);
  });
  it("should draw selected scratch",function() {
    spy = sinon.spy(app, "renderSelected");
    expect(app.renderSelected).not.toHaveBeenCalled();
    $(app.el).find(".addscratch").trigger('click');
    app.collection.first().set({selected: true});
    expect(app.renderSelected).toHaveBeenCalledOnce();
  });
});

