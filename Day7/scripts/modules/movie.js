define(["./Director"],function(Director) {
    function Movie (_title, _rating,_id){
        //Private var
        var title = _title;
        var rating = _rating;
        var id = _id;
        var director;
        //Protected methods
        this.setTitle = function(_title){this.title = _title;};
        this.getTitle = function(){return this.title;};
        this.setRating = function(_rating){this.rating = _rating;};
        this.getRating = function(){return this.rating;};
        this.setId = function(_id){this.id = _id;};
        this.getId = function(){return this.id;};
        this.setDirector = function(_director) { this.director = _director;};
    }
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
