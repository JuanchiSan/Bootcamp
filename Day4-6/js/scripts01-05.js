function Movie(title, rating, id){
    var title = title;
    var rating = rating;
    var id = id;
    this.setTitle = function(title){this.title = title;}
    this.getTitle = function(){return this.title;}
    this.setRating = function(rating){this.rating = rating;}
    this.getRating = function(){return this.rating;}
    this.setId = function(id){this.id = id;}
    this.getId = function(){return this.id;}
    this.play = function(){$.publish("movies", ["play",this]);}
    this.stop = function(){$.publish("movies", ["stop",this]);}
}

var BF = new Movie("Back to the Future", 4.0, "bf1");

function MovieObserver(){ 

    $.subscribe("movies", 
        function(state, movie){
            if (state == "play"){
                console.log("Playing "+movie.getTitle()+"...");
            } else if (state == "stop"){
                console.log("Stoping "+movie.getTitle()+".");
            }
        }
    ); 
} 

(function(d){
	var cache = {};
	d.publish = function(topic, args){
		cache[topic] && d.each(cache[topic], function(){
			this.apply(d, args || []);
		});
	};

	d.subscribe = function(topic, handler){		
		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(handler);
		return [topic, handler];
	};

	d.unsubscribe = function(handle){
		var t = handle[0];
		cache[t] && d.each(cache[t], function(idx){
			if(this == handle[1]){
				cache[t].splice(idx, 1);
			}
		});
	};
})(jQuery);

