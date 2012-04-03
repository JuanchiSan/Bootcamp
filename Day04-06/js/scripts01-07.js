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
function Movie (){
    var title = 'none';
    var rating = 0;
    var id = 'default';
}
    Movie.prototype.setTitle = function(_title){this.title = _title;};
    Movie.prototype.getTitle = function(){return this.title;}
    Movie.prototype.setRating = function(_rating){this.rating = _rating;};
    Movie.prototype.getRating = function(){return this.rating;};
    Movie.prototype.setId = function(_id){this.id = _id;};
    Movie.prototype.getId = function(){return this.id;};
    Movie.prototype.play = function(){$.publish("movies", ["play",this]);};
    Movie.prototype.stop = function(){$.publish("movies", ["stop",this]);};

function MovieObserver(){
    $.subscribe("movies", function(state, movie){
        if (state == "play"){
            console.log("Playing "+movie.getTitle()+"...");
        } else if (state == "stop"){
            console.log("Stopped"+movie.getTitle()+".");
        }
    }); 
} 

(function(o){
    var cache = {};

    o.publish = function(topic, args){   
        cache[topic] && o.each(cache[topic], function(){
            this.apply(o, args || []);
        });
    };

    o.subscribe = function(topic, handler){
        if(!cache[topic]){
            cache[topic] = [];
        }
        cache[topic].push(handler);
        return [topic, handler]; 
    };

    o.unsubscribe = function(handle){
        var t = handle[0];
        cache[t] && o.each(cache[t], function(idx){
            if(this == handle[1]){
                cache[t].splice(idx, 1);
            }
        });
    };

})(jQuery);

