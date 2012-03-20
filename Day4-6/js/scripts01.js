var Movie = {
    title : "Indiana Jones and the Last Crusade",
    rating : 1,
    id : 1,
    
    setTitle : function(title){
        this.title = title;
    },
    getTitle : function(){
        return this.title;
    },
    setRating : function(rating){
        this.rating = rating;
    },
    getRating : function(){
        return this.rating;
    },
    setID : function(id){
        this.id = id;
    },
    getID : function(){
        return this.id;
    },
    play : function(){
        $.MovieObserver( '1' ).subscribe( play );
        console.log("Playing"+getTitle()+"...");    
    },
    stop : function(){
        $.MovieObserver( '1' ).subscribe( stop );
        console.log("Stoping"+getTitle()+"."); 
    }
}


