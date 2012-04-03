define(["./Director"],function(Director) {
    function Movie (_title, _rating,_id){
        this.title = _title;
        this.rating = _rating;
        this.id = _id;
        this.director;
    }
    Movie.prototype.setTitle = function(_title){title = _title;};
    Movie.prototype.getTitle = function(){return title;};
    Movie.prototype.setRating = function(_rating){rating = _rating;};
    Movie.prototype.getRating = function(){return rating;};
    Movie.prototype.setId = function(_id){id = _id;};
    Movie.prototype.getId = function(){return id;};
    Movie.prototype.setDirector = function(_director) { director = _director;};
    Movie.prototype.getDirector = function() { return director; };
    Movie.prototype.play = function(){
        //$.publish("movies", ["play",this]);
        console.log("Playing "+this.getTitle()+"...");
    }
    Movie.prototype.stop = function(){
        //$.publish("movies", ["stop",this]);
        console.log("Stopped"+this.getTitle()+".");
    }
    return (Movie);
});
