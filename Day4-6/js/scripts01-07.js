//function Movie(_title, _rating,_id){
//    // Private vars
//    var title = _title;
//    var rating = _rating;
//    var id = _id;
//    //Privileged methods
//    this.setTitle = function(_title){this.title = _title;}
//    this.getTitle = function(){return this.title;}
//    this.setRating = function(_rating){this.rating = _rating;}
//    this.getRating = function(){return this.rating;}
//    this.setId = function(_id){this.id = _id;}
//    this.getId = function(){return this.id;}
//    this.play = function(){$.publish("movies", ["play",this]);}
//    this.stop = function(){$.publish("movies", ["stop",this]);}
//}
var Movie = function (_title, _rating,_id){
    var title = _title;
    var rating = _rating;
    var id = _id;
    this.setTitle = function(_title){this.title = _title;}
    this.getTitle = function(){return this.title;}
    this.setRating = function(_rating){this.rating = _rating;}
    this.getRating = function(){return this.rating;}
    this.setId = function(_id){this.id = _id;}
    this.getId = function(){return this.id;}
    this.play = function(){$.publish("movies", ["play",this]);}
    this.stop = function(){$.publish("movies", ["stop",this]);}
}
function MovieObserver(){
    $.subscribe("movies", function(state, movie){
        if (state == "play"){
            console.log("Playing "+movie.getTitle()+"...");
        } else if (state == "stop"){
            console.log("Stopped"+movie.getTitle()+".");
        }
    }); 
} 
(function ($){
	var obj = $({});
	$.subscribe = obj.on.bind(obj);
	$.unsubscribe = obj.off.bind(obj);
	$.publish = obj.trigger.bind(obj);
}(jQuery));

