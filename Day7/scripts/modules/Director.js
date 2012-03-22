define(function() {
    function Director(_name){
        var name = _name;
        var quotes = [];
        
        this.setName = function(_name){this.name = _name;};
        this.getName = function(){return this.name;};
        this.setQuotes = function(_quotes){this.quotes = _quotes;};
        this.getQuotes = function(){return this.quotes;};
        this.speak = function(){
            console.log(this.getName()+"Say: "+this.getQuotes());
            <!-- Display jQuery Mobile dialogs with director’s quotes
            $("#Director").html(this.getName());
            $("#Quotes").html("Say: "+this.getQuotes());
        };
    }
    return (Director);
});


