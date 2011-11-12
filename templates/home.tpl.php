<html>
  <head>  
    <title>Names Hello</title>
<script type="text/javascript" src="/js/jquery-1.5.1.js"></script>
		<style>
			* 
			{

				margin: 0 0;
				padding: 0 0;
				font-family: helvetica, arial, sans-serif;
			}
			body {

				background: #CCC;
			}
			#container
			{
				padding: 20px;
				margin: 0 auto;
				width: 600px;
				background: #FFF;
      }

      #names
      {
        width:150px;
      }
      .delete
      {
        margin-top:4px;
        font-size: 9px;
        float: right;
      }

    </style>
    <script>
      $(function()
      {
        $("#names").delegate('.edit','click',function(e)
          {
            $(this).hide()
            $(this).parent().append('<input type="text" value="'+$(this).text()+'"></input><button class="save">save</button>');
          });
        $("#names").delegate('a.delete','click',function(e)
          {
            $.ajax({type: 'DELETE',
                    dataType: 'json',
                    url: '/names/'+$(this).parents('li').data('id'),
                    success: function(resp)
                    {
                      renderNames(resp);
                    }});
            e.preventDefault();
          });
        $("#names").delegate('button.save','click',function(e)
          {
            $.ajax({type: 'PUT',
                    dataType: 'json',
                    data : {
                             name: $(this).parent().find('input').val()
                    },
                    url : '/names/'+$(this).parents('li').data('id'),
                    success : function(resp)
                    {
                      renderNames(resp);
                    }
            });
            e.preventDefault();
          });
        $('a.list').click(function(e)
          {
            findAll();
            e.preventDefault();
          });

        $("form").submit(function(e)
          {
            $.post("/names", 
              {name: $("#newname").val() },
              function(resp) {
                findAll(); 
              });
            e.preventDefault();
          });

      });

      function findAll()
      {
        $.get("/names",function(resp)
        {
          renderNames(resp);
        },"json");
      };
    function renderNames(names)
    {
        $("#names").empty();
      $.each(names,function(k,v)
      {
        $("#names").append('<li id="name_'+v.id+'" data-id="'+v.id+'"><a class="edit">'+v.name+'</a>'+
          '<small><a href="#" class="delete">delete</a></small></li>');
      });
    }

    </script>

  </head>
  <body>
    <div id="container">
      <h3> Names <a class="list" href="#">Load</a></h3>  
      <ul id="names"></ul>
    
      <form class="" id="newnamefrm">
        <input type="text" id="newname"></input><input type="submit" value="Add Name" />
      </form>  
    </div>
  </body>

</html>
