<?php
require '../Slim/Slim.php';
require '../ScratchPad/ViewHelpers.php';
function json($obj)
{
  header('Content-Type', 'application/json');
  return json_encode($obj);
}
$APP_CONFIG = array('templates.path' => '../templates');
\ScratchPad\ViewHelpers::setTemplatePath($APP_CONFIG['templates.path']);


$app = new Slim();
$app->config($APP_CONFIG);

$app->get('/notes/:id',function($id) {
});
$app->get('/notes',function() {
});
$app->post('/notes',function() use ($app) {
  echo '{status: "success" }';
}); 
$app->put('/notes/:id',function($id) use ($app) {
});
$app->delete('/notes/:id', function($id) use ($app) {
});

$app->get('/', function() use($app) {
  $app->render('home.tpl.php');
});

$app->get('/specs', function() use($app) {

  $app->render('specs.tpl.php');
});


$app->run();


