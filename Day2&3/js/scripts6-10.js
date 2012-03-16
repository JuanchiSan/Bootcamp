$("#mypage").on('pageinit', function(){
     alert("Finished loading");
});
$("#boton").click(function(){   
    $.mobile.showPageLoadingMsg();
    $.post("/app/api/dispatcher.php",{ 
            service: 'welcome.hello',
            params: {"name": ""+$("#alias").val()+""}},
            function(data){$("#respuesta").html(data);
    });
    $(document).keyup(function(e){
        if(e.keyCode == 27){
            $.mobile.hidePageLoadingMsg();
        }
    });
    
});
 