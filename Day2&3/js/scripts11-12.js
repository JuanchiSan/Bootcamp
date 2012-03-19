$("#mypage").on('pageinit', function(){
     alert("Finished loading");
});
var url="/app/api/dispatcher.php";
$("#boton").click(function(){   
    $.mobile.showPageLoadingMsg();
    var param=$("#alias").val();
    if(param=="juan"){param=param.fontcolor("ligtblue");}
    $.post(url,{ service: 'welcome.hello',
        params: {"name": ""+param+""}},
        function(data){$("#respuesta").html(data);
    });                 
    $(document).keyup(function(e){
        if(e.keyCode == 27){
            $.mobile.hidePageLoadingMsg();
        }
    });
});

$(document).ajaxError(function(){ $("#respuesta").css("color", "red"); });                
$.ajax(url, {type: 'GET',crossDomain: 'true',
    data: {service: 'movie.getTop', params: {'name': 'null'}}, 
    dataType: 'json', success: function(data) {
    
    var obj = data;
    var lista= "<li><img src='"+obj[0].BoxArt.SmallUrl+"' />"+
        "<h3><b>"+obj[0].Name+"</b>("+obj[0].ReleaseYear+")</h3>"+
        "<p>"+obj[0].Synopsis+"</p>"+"</li>";
    var i = 1;
    while (obj[i]!= null) {                   
        lista += "<li><img src='"+obj[i].BoxArt.SmallUrl+"' />"+
        "<h3><b>"+obj[0].Name+"</b>("+obj[0].ReleaseYear+")</h3>"+
        "<p>"+obj[i].Synopsis+"</p>"+"</li>";
        ++i;}
   $("#movielist").html(lista);
}}); 

