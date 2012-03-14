                $("#boton").click(function(event){
                                     
                    $.post("/app/api/dispatcher.php",{ 
                        service: 'welcome.hello',
                        params: {"name": ""+$("#alias").val()+""}},
                        function(data){$("#respuesta").html(data);}
                    );
                });
                $(document).ajaxError(function(){ $("#respuesta").css("color", "red"); })
                           .ready(function(){alert("Finished loading");});


