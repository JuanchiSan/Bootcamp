$("#mypage").on('pageinit', function(){
     alert("Finished loading");
});
$("#boton").click(function(){   
    $.mobile.showPageLoadingMsg();
    $.post("../api/dispatcher.php",{ 
            service: 'welcome.hello',
            params: {"name": ""+$("#alias").val()+""}},
            function(data){$("#respuesta").html(data);
    });
    
}).keyup(function(e){
        if(e.keyCode == 27){
            $.mobile.hidePageLoadingMsg();
        }
    });