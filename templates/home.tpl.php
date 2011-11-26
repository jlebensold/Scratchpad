<html>
  <head>  
    <title>Names Hello</title>
      <link type="text/css" rel="stylesheet" media="screen" href="/css/bootstrap-1.4.0.min.css"></link>
  <link type="text/css" rel="stylesheet" media="screen" href="/css/app.css"></link>
  <script src="/js/lib/jquery-1.7.0.min.js"></script>
  <script src="/js/lib/underscore-1.2.1.min.js"></script>
  <script src="/js/lib/backbone-0.5.3.min.js"></script>

	<meta name="viewport" content="maximum-scale=1.0" /> 
  

  <!-- include source files here... -->
  <script type="text/javascript" src="/js/models/Note.js"></script>
  <script type="text/javascript" src="/js/collections/NoteList.js"></script>
  
  <?= \ScratchPad\ViewHelpers::BackboneView("AppView"); ?>
  <?= \ScratchPad\ViewHelpers::BackboneView("NoteView"); ?>
  <?= \ScratchPad\ViewHelpers::BackboneView("NoteListView"); ?>

  </head>
  <body>
    <div class="topbar">
      <div class="fill">
        <div class="container">
          <a class="brand" href="#">Scratchpad</a>
          <ul class="nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
<script type="text/javascript">
touchStart = function(event) {
  $("footer").html('start');
  v.markerDown(touchstub(event));
}
touchMove = function(event) {
  event.preventDefault();
  v.markerMove(touchstub(event));
}
touchEnd = function(event) {
  event.preventDefault();
  v.markerUp(touchstub(event));
}
touchstub = function(event) {
  var x = $('canvas').position().left;
  var y = $('canvas').position().top;
  return {offsetX: event.pageX - x, offsetY: event.pageY - y};
}
// once there is an "active canvas" this problem will be significantly mitigated"


</script>
    <div class="container" ontouchstart="touchStart(event)" ontouchmove="touchMove(event);" ontouchend="touchEnd(event)" >

      <div class="content">
        <div class="page-header">
          <h1>Page name <small>Supporting text or tagline</small></h1>
        </div>
        <div class="row" id="notelist">
          <div class="span10">
            <h2>Main content</h2>
          </div>
          <div class="span4">
            <h3>Secondary content</h3>
          </div>
        </div>
      </div>

      <footer>
        <p>from @Zendcasts</p>
      </footer>

    </div> <!-- /container -->
  
  <script>
     $(function() { 
       window.app = new AppView({el: $("#notelist")});
       window.app.newscratch();

     });
  </script>
  </body>

</html>
