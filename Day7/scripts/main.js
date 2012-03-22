require.config({
        paths : {
            jquery : 'js/jquery-1.7.1',
            jqmobile : 'js/jquery.mobile-1.0.1'
        }
});

require(["modules/director", "modules/movie", "jquery", "jqmobile"], function(Director, Movie) {
                var movie = new Movie ("Alien",8, 123);
                console.log(movie.getTitle());
                var quotes =["Cast is everything.", "Do what you haven't..."];
                var RidleyScott = new Director("Ridley Scott",quotes ); 
                movie.setDirector(RidleyScott);
                movie.getDirector().speak();
            });