define([],function() {
     function Director(_name,_quotes){
        //Private var
        var name = _name;
        var quotes = _quotes;
        //return (this);
        //Protected methods      
        this.setName = function(_name){this.name = _name;};
        this.setQuotes = function(_quotes){this.quotes = _quotes;};
    }
     //Public methods
     Director.prototype.getName = function(){return this.name;};
     Director.prototype.getQuotes = function(){return this.quotes;};
     Director.prototype.speak = function(){
       //console.log(this.getName()+"Say: "+this.getQuotes());
        var auxQuotes = this.getQuotes();
        $("#Director").html(this.getName()+ " says: ");
       // $("#Quotes").html(auxQuotes[Math.floor(Math.random()*auxQuotes.length)]);
     };
    return (Director);
});


