$("#mypage").on('pageinit', function(){
     alert("Finished loading");
});
var url="../api/dispatcher.php";
$("#boton").click(function(){   
    $.mobile.showPageLoadingMsg();
    var param=$("#alias").val();
    if(param=="juan"){param=param.fontcolor("ligtblue");}
    $.post(url,{ service: 'welcome.hello',
        params: {"name": ""+param+""}},
        function(data){$("#respuesta").html(data);
    });                 
}).keyup(function(e){
       if(e.keyCode == 27){
           $.mobile.hidePageLoadingMsg();
       }
});

$(document).ajaxError(function(){ $("#respuesta").css("color", "red"); });                
$.ajax(url, {type: 'GET',crossDomain: 'true',
    data: {service: 'movie.getTop', params: {'name': 'null'}}, 
    dataType: 'json', success: function(data) {
    
    var obj = data;
    var lista= "<ul class='ui-listview' data-split-theme='d' data-split-icon='gear' data-role='listview'>"+
        "<li class='ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-li-has-thumb ui-btn-up-c'"+
        "data-corners='false' data-shadow='false' data-iconshadow='true'"+
        "data-icon='false' data-iconpos='right' data-theme='c'>"+
        "<div class='ui-btn-inner ui-li ui-li-has-alt'><div class='ui-btn-text'>"+
        "<a class='ui-link-inherit'><img class='ui-li-thumb' src='"+obj[0].BoxArt.SmallUrl+"' />"+
        "<h3 class='ui-li-heading'><b>"+obj[0].Name+"</b>("+obj[0].ReleaseYear+")</h3>"+
        "<p class='ui-li-desc'>"+obj[0].Synopsis+"</p></a></div></div></li>";
    var i = 1;
    while (obj[i]!= null) {                   
        lista += "<li class='ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-li-has-thumb ui-btn-up-c'"+
        "data-corners='false' data-shadow='false' data-iconshadow='true'"+
        "data-icon='false' data-iconpos='right' data-theme='c'>"+
        "<div class='ui-btn-inner ui-li ui-li-has-alt'><div class='ui-btn-text'>"+
        "<a class='ui-link-inherit'><img class='ui-li-thumb' src='"+obj[i].BoxArt.SmallUrl+"' />"+
        "<h3 class='ui-li-heading'><b>"+obj[i].Name+"</b>("+obj[i].ReleaseYear+")</h3>"+
        "<p class='ui-li-desc'>"+obj[i].Synopsis+"</p></a></div></div></li>";
        ++i;
    }
    lista+="</ul>";
   $("#movielist").html(lista);
}}); 

