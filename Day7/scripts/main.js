require.config({
        paths : {
            jquery : 'js/jquery-1.7.1',
            jqmobile : 'js/jquery.mobile-1.0.1'
        }
});

require(["modules/director", "modules/movie", "jquery", "jqmobile"], function(Director, Movie) {
                var movie = new Movie ("Alien",8, 123);
                console.log(movie.getTitle());
                
                var RidleyScott = new Director("Ridley Scott",["Cast is everything.", "Do what you haven't..."]);
                movie.setDirector(RidleyScott);
                movie.getDirector().speak();
            });