define(["./Director"],function(Director) {
    var Movie = {};
    Movie = (function (_title, _rating,_id){
        var title = _title,
            rating = _rating,
            id = _id,
            director;

        return{
            setTitle : function(_title){this.title = _title;},
            getTitle : function(){return this.title;},
            setRating : function(_rating){this.rating = _rating;},
            getRating : function(){return this.rating;},
            setId : function(_id){this.id = _id;},
            getId : function(){return this.id;},
            setDirector : function(_director) { director = _director;},
            getDirector : function() { return director; },
            
            play : function(){
                //$.publish("movies", ["play",this]);
                console.log("Playing "+getTitle()+"...");
            },
            stop : function(){
                //$.publish("movies", ["stop",this]);
                console.log("Stopped"+getTitle()+".");
            }
        }
    })();
    return (Movie);

});
