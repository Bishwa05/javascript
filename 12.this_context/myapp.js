//console.log( this );
// Here this keyword points tpo window object
// Callable objects allow us to change this context.
var object = {
    prop: this,
    embed:
    {
        method: function(){ return this; }
    }
};

var array = [
    this,
    function(){ return this; }
];

function global(){
    return this;
}

// Normal invokation
global();
object.embed.method();
array[1]();

// Assign context
global.call( object );
object.embed.method.call( object );
array[1].call( object );

// New context creation
new global();
new object.embed.method( object );
new array[1]();

// Callable object "this" points to window object