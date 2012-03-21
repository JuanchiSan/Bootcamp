//8
DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor = Movie;

function DownloadableMovie(_title, _rating,_id){
    this.setTitle(_title);
    this.setRating(_rating);
    this.setId(_id);
    this.download = MovieDownloader.getInstance().download(this);
};

//9
var MovieDownloader = (function(){
  var instantiated;

  function init (){
    return {
      download: function(movie){
        console.log( 'Downloading '+movie.getTitle()+"..." );
      }
    };
  }
  return {
    getInstance: function(){
      if ( !instantiated ){
        instantiated = init();
      }
      return instantiated; 
    }
  };
})();

// 10
var SocialMixin = function(){};
SocialMixin.prototype = {
    share: function(friendName){
        console.log('Sharing '+this.getTitle() +' with '+ friendName);
    },
    like: function(){
        console.log('like ++');
    }
};
