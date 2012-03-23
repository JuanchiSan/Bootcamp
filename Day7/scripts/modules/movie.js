define(["./Director"],function(Director) {
    function Movie (_title, _rating,_id){
        //Private var
        var title = _title;
        var rating = _rating;
        var id = _id;
        var director;
        //return (this);
        //Protected methods
        this.setTitle = function(_title){title = _title;};
        this.getTitle = function(){return title;};
        this.setRating = function(_rating){rating = _rating;};
        this.getRating = function(){return rating;};
        this.setId = function(_id){id = _id;};
        this.getId = function(){return id;};
        
    }
    Movie.prototype.setDirector = function(_director) { this.director = _director;};
    Movie.prototype.getDirector = function() { return this.director; };
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
