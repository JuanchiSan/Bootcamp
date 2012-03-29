// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){

// Movie Model
// ----------
    var Movie = Backbone.Model.extend({
        defaults:{
            title: "default",
            ReleaseYear: 0,
            Synopsis: "default"
        },
        
        initialize: function(){
            console.log('this model has been initialized');
        },
        
        clear: function() {
            this.destroy();     // #destroy is provided by Backbone.js
        //  this.view.remove(); // will explain in a few slides
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

        //... is a list tag.
        tagName:  "li",

        // The DOM events specific to an item.
        events: {
        "click .delbtt"     : "remove",
        "click .detbtt"     : "details",
        "click .editbtt"    : "edit",
        'keypress #editMovie': 'editOnEnter'
        },

        initialize: function() {      
            this.model.bind('change', this.render, this);
            _.bindAll(this,'remove','details', 'edit');
            this.model.bind('remove',this.unrender,this);           
        },
        
        render: function(){          
            var newTitle = "<li>"+this.model.get("title");
            var Editbtt = "<span><input type='button' value='Edit' class='editbtt'></input><span>"
            var Delbtt = "<span><input type='button' value='Delete' class='delbtt'></input></span>";
            var Detbtt = "<span><input type='button' value='Details' class='detbtt'></input></span></li>";
            $(this.el).html(newTitle + Editbtt + Delbtt + Detbtt);
            return this;
	},
        
        unrender: function(){
            $(this.el).remove();
        },
        
        remove: function(){
            this.model.destroy();
        },
        
        details: function(){
            var _title=this.model.get("title");
            var year=this.model.get("ReleaseYear");
            var syno=this.model.get("Synopsis");
            var details="<p><b>"+_title+"</b>("+year+")</p><p>"+syno+"</p>";
            $("#detailsMovies").html(details);
        },
        
        edit: function(){
            
            this.$el.html("<input type='text' id='editMovie'></input>");
            $("#editMovie").focus();
        },
        
        editOnEnter: function(e){
            if (e.keyCode != 13) return; 
            if (!$("#editMovie").val()) return;
            var newValue=$("#editMovie").val();
            this.model.set({ title: newValue });
        }
    });   
    
// Movie Application
// --------------

    AppView = Backbone.View.extend({

	events: {
        "keypress #new-movie":  "createOnEnter"
  	},

	initialize: function(){
		favoritemovies.bind('add',this.addOne);
		this.collection=favoritemovies;
	},
        
	createOnEnter: function(e){
            if (e.keyCode != 13) return; 
            if (!$("#new-movie").val()) return;
            var mov= new Movie;
            mov.set({title: $("#new-movie").val()});
            this.collection.add(mov); 
            $("#new-movie").val('');
        },
        
        addOne: function(mov){
            var view= new MovieView({model: mov});
            $("#list").append(view.render().el);
        }
    }); 
    
    var app = new AppView({el : $("#create-list")});  
});



