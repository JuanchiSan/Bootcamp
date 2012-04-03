
require(["modules/Director", "modules/movie"], function(Director, Movie) {
                var movie = new Movie ("Alien",8, 123);                
                var RidleyScott = new Director("Ridley Scott",["Cast is everything.", "Do what you haven't..."]);
                movie.setDirector(RidleyScott);
                movie.getDirector().speak();
            });