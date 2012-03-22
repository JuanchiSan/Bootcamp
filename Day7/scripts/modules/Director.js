define(function() {
    var Director = {};
    Director = (function (_name){
        var name = _name, quotes = [];
        
        this.setName = function(_name){this.name = _name;};
        this.protoype.getName = function(){return this.name;};
        this.setQuotes = function(_quotes){this.quotes = _quotes;};
        this.protoype.getQuotes = function(){return this.quotes;}
        this.prototype.speak = function(){
            <!-- Display jQuery Mobile dialogs with director’s quotes
            var say = this.getQuotes();
            if(say.empty())
                return (this.getName()+" not say anything." );
            else return (this.getName()+" Say: "+ this.getQuotes());
        };
    })();
    return (Director);
});


