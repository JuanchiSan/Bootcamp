$("#mypage").live('pageinit', function(){
     alert("Finished loading");
});
$("#boton").click(function(){   
    $.mobile.showPageLoadingMsg();
    $.post("/app/api/dispatcher.php",{ 
            service: 'welcome.hello',
            params: {"name": ""+$("#alias").val()+""}},
            function(data){$("#respuesta").html(data);
    });
    $.keypress(function(e){
        if(e.keyCode == KEYCODE_ESC){
            $.mobile.hidePageLoadingMsg();
        }
    })
});
 