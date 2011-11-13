<?php
namespace ScratchPad;
class ViewHelpers 
{
  private static $templatePath;

  public static function setTemplatePath($tpl)
  {
    self::$templatePath = $tpl;
  }

  public static function BackboneView($name)
  {
    $tpl = file_get_contents(self::$templatePath.'/backbone.'.$name.'.php');

    return 
      '<script type="text/template" id="'.strtolower($name).'-template">'.$tpl.'</script>'.PHP_EOL.' <script type="text/javascript" src="/js/views/'.$name.'.js"></script>';

  }


}
