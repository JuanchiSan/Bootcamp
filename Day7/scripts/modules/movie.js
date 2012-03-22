define(["./Director"],function(Director) {
    function Movie (_title, _rating,_id){
        //Private var
        var title = _title;
        var rating = _rating;
        var id = _id;
        var director;
        //Privileged methods
        this.setTitle = function(_title){this.title = _title;}
        this.getTitle = function(){return this.title;}
        this.setRating = function(_rating){this.rating = _rating;}
        this.getRating = function(){return this.rating;}
        this.setId = function(_id){this.id = _id;}
        this.getId = function(){return this.id;}
        this.setDirector = function(_director) { director = _director;}
        this.getDirector = function() { return director; }
        this.play = function(){
            //$.publish("movies", ["play",this]);
            console.log("Playing "+getTitle()+"...");
        }
        this.stop = function(){
            //$.publish("movies", ["stop",this]);
            console.log("Stopped"+getTitle()+".");
        }
    }
    return (Movie);
});
