function Apple( color, weight )
{   
    this.color = color;
    this.weight = weight;
}

// Saving memory by using the prototype, this proptotype will be used
// across all the apple objects.
/**
 * we can create/modify the prototype from console
 * 
 * 
 Apple.prototype.abc = function(){ return "eat the new apple"; }
ƒ (){ return "eat the new apple"; }
apple1.abc();
"eat the new apple"

 */
Apple.prototype = {
    eat : function(){ return "eat the apple"; },
    throw : function() { return "throw the apple"; },
    checkContext: function() { return this; }
};

var apple1 = new Apple("red", 200 );
var apple2 = new Apple("green", 50 );
var apple3 = new Apple("pink", 10 );