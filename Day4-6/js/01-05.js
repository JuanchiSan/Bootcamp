function Movie(title, rating, id){
    this.title = title;
    this.rating = rating;
    this.id = id;

    setTitle : function(title){
        this.title = title;
    }
    getTitle : function(){
        return this.title;
    }
    setRating : function(rating){
        this.rating = rating;
    }
    getRating : function(){
        return this.rating;
    }
    setID : function(id){
        this.id = id;
    }
    getID : function(){
        return this.id;
    }
    play : function(){
        $(document).trigger('play');
            
    }
    stop : function(){
        $(document).trigger('stop');
         
    }

}
function MovieObserver (Movie){

    console.log("Playing "+getTitle()+"...");
    console.log("Stoping "+getTitle()+".");
}
(function($) {
  var o = $({});
  $.subscribe = function() {o.on.apply(o, arguments);};
  $.unsubscribe = function() {o.off.apply(o, arguments);};
  $.publish = function() {o.trigger.apply(o, arguments);};
}(jQuery));
