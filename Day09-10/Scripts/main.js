$(function(){
            // Movie Model
            // ----------
            
    var Movie = Backbone.Model.extend({
        defaults:{
            title: "default",
            ReleaseYear: '0',
            Synopsis: "Synopsis for default"
        },
        initialize: function(){
            if (!this.get("title")) {
                    this.set({"title": this.defaults.title});
                }
                if (!this.get("ReleaseYear")) {
                    this.set({"ReleaseYear": this.defaults.ReleaseYear});
                }
                if (!this.get("Synopsis")) {
                    this.set({"Synopsis": this.defaults.Synopsis});
                }
            console.log('This model has been initialized with the name '+ this.get('title'));
        
        },
        clear: function() {
            this.destroy();     
        } 
    });
    
            // FavoriteMovies Collection
            // -------------------------
            
    var FavoriteMovies = Backbone.Collection.extend({
        model: Movie
    });
    
    
 // Create our global collection of **favoritemovies**.
 
    var favoritemovies = new FavoriteMovies();
    
            // Movie Item View
            // --------------

    var MovieView = Backbone.View.extend({

        tagName:  "li",
        template: _.template($('#item-template').html()),
        events: {
        "click .delbtt"     : "remove",
        "click .editbtt"    : "edit",
        "keypress .edit"  : "editOnEnter",
        "keypress .editY"      : "editOnEnter",
        "keypress .editS"      : "editOnEnter"
        },
        initialize: function() {
            this.model.bind('change', this.render, this);
            this.model.bind('remove',this.unrender,this);           
        },
        render: function(){          
            this.$el.html(this.template(this.model.toJSON()));
            this.input = this.$('.edit');
            return this;
	},
        unrender: function(){
            $(this.el).remove();
        },
	remove: function(){
            this.model.destroy();
        },
        edit: function(){
            this.$el.addClass("editing");
        },
        close: function() {
            this.input = this.$('.edit');
            var value = this.input.val();
            if (!value) this.clear();
            this.model.set({title: value});

            this.input = this.$('.editY');
            value = this.input.val();
            if (!value) this.clear();
            this.model.set({ReleaseYear: value});

            this.input = this.$('.editS');
            value = this.input.val();
            if (!value) this.clear();
            this.model.set({Synopsis: value});
            
            this.$el.removeClass("editing");
        },
        editOnEnter: function(e){
            if (e.keyCode == 13) this.close();
        }
    });   
    
// Movie Application
// --------------

    AppView = Backbone.View.extend({
        
        el : $("#create-list"),
	events: {
        "keypress #new-movie":  "createOnEnter"
  	},
	initialize: function(){
		favoritemovies.bind('add',this.addOne);
		this.collection=favoritemovies;
	},
	render: function() {
            
      if (Movies.length) {
        this.main.show();
        this.footer.show();
      } else {
        this.main.hide();
        this.footer.hide();
      }
        },
        createOnEnter: function(e) {
            if (e.keyCode != 13) return;
            var mov = this.$el.find('#new-movie').val();
            if (!mov) return;
            favoritemovies.add({title: mov});
            this.$el.find('#new-movie').val('');
        },

        addOne: function(mov){
            var view= new MovieView({model: mov});
            $("#movie-list").append(view.render().el);
        }
    });
    var app = new AppView(); 
    favoritemovies.add([{title: 'Back to the future', ReleaseYear: '1985', Synopsis: 'In 1985, Doc Brown invents time travel; in 1955, Marty McFly accidentally prevents his parents from meeting, putting his own existence at stake.'},
                        {title: 'Jurassic Park', ReleaseYear: '1993', Synopsis: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.'},
                        {title: 'Terminator 2: Judgment Day', ReleaseYear: '1991', Synopsis: 'The cyborg who once tried to kill Sarah Connor must now protect her teenage son, John Connor, from an even more powerful and advanced Terminator.'},
                        {title: 'Raiders of the Lost Ark', ReleaseYear: '1981', Synopsis: 'Archeologist and adventurer Indiana Jones is hired by the US government to find the Ark of the Covenant before the Nazis.'}    
                   ]);
    console.log('loadding');
});



