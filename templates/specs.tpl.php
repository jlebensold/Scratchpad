<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <title>Jasmine Test Runner</title>
  <link rel="stylesheet" type="text/css" href="js/tests/jasmine-1.1.0/jasmine.css">
  <script type="text/javascript" src="js/tests/jasmine-1.1.0/jasmine.js"></script>
  <script type="text/javascript" src="js/tests/jasmine-1.1.0/jasmine-html.js"></script>
 

  <script src="/js/lib/jquery-1.7.0.min.js"></script>
  <script src="/js/lib/underscore-1.2.1.min.js"></script>
  <script src="/js/lib/backbone-0.5.3.min.js"></script>
  <script src="/js/lib/sinon-1.0.0.js"></script>
  <script src="/js/lib/jasmine-sinon.js"></script>


  <!-- include source files here... -->
  <script type="text/javascript" src="/js/models/Note.js"></script>
  <script type="text/javascript" src="/js/collections/NoteList.js"></script>
  
  <?= \ScratchPad\ViewHelpers::BackboneView("NoteListView"); ?>
  <?= \ScratchPad\ViewHelpers::BackboneView("NoteView"); ?>
  <?= \ScratchPad\ViewHelpers::BackboneView("AppView"); ?>
  <!-- include spec files here... -->
  <script type="text/javascript" src="js/tests/spec/NoteSpec.js"></script>
  <script type="text/javascript" src="js/tests/spec/NoteViewSpec.js"></script>
  <script type="text/javascript" src="js/tests/spec/NoteListSpec.js"></script>
  <script type="text/javascript" src="js/tests/spec/NoteListViewSpec.js"></script>
  <script type="text/javascript" src="js/tests/spec/AppViewSpec.js"></script>

</head>
<body>
<style>
    #testbed
    {
        position:relative;
        margin:auto;
        overflow:hidden;
    }
</style>
<script type="text/javascript">
  jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  jasmine.getEnv().execute();
</script>

<canvas id="testbed" width="400" height="300"></canvas>
</body>
</html>
