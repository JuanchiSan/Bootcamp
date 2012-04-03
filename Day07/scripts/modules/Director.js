define(function() {
    function Director(_name, _quotes) {
        this.name = _name;
        this.quotes = _quotes;
    }        
    Director.prototype.setName = function(_name){this.name = _name;} ;
    Director.prototype.setQuotes = function(_quotes){this.quotes = _quotes;};
    Director.prototype.getName = function(){return this.name;} ;
    Director.prototype.getQuotes = function(){return this.quotes;} ;
    Director.prototype.speak = function(){
        console.log(this.getName()+"Say: "+this.getQuotes());
        var auxQuotes = this.getQuotes();
        $("#Director").html(this.getName()+ " says: ");
        $("#Quotes").html(auxQuotes[Math.floor(Math.random()*auxQuotes.length)]);
    }
    return Director;
});


