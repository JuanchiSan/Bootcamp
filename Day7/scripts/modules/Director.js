define(function() {
    var Director = {};
    Director = (function (_name){
        var name = _name;
        Director.setName = function(_name){this.name = _name;};
        Director.getName = function(){return this.name;};
        return Director;
    })();
    return (Director);
});


