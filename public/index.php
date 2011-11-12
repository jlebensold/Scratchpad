<?php
require '../Slim/Slim.php';
require '../Name.php';

function json($obj)
{
  header('Content-Type', 'application/json');
  return json_encode($obj);
}

$app = new Slim();
$app->config(array('templates.path' => '../templates'));

$app->get('/names/:id',function($id) {
  echo json(Name::find($id));
});
$app->get('/names',function() {
  echo json(Name::findAll());
});
$app->post('/names',function() use ($app) {
  $n = new Name(null,$app->request()->post('name'));
  $n->create();
  echo '{status: "success" }';
}); 
$app->put('/names/:id',function($id) use ($app) {
  $name = Name::find($id);
  $name->name = $app->request()->put('name');
  $name->update();

  echo json(Name::findAll());
});
$app->delete('/names/:id', function($id) use ($app) {
  Name::delete($id);
  echo json(Name::findAll());
});

$app->get('/', function() use($app) {
  $app->render('home.tpl.php');
});


$app->run();


