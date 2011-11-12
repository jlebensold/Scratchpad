<?php
require '../Slim/Slim.php';

function json($obj)
{
  header('Content-Type', 'application/json');
  return json_encode($obj);
}

$app = new Slim();
$app->config(array('templates.path' => '../templates'));

$app->get('/names/:id',function($id) {
});
$app->get('/names',function() {
});
$app->post('/names',function() use ($app) {
  echo '{status: "success" }';
}); 
$app->put('/names/:id',function($id) use ($app) {
});
$app->delete('/names/:id', function($id) use ($app) {
});

$app->get('/', function() use($app) {
  $app->render('home.tpl.php');
});


$app->run();


