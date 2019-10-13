var array = [ 
    "string",
    "hello",
    "world200",
    100,
    function(){ return "drive"; },
];

// Assignment
array[0] = "New string";

// Methods
array.shift(); // Delete's first element
array.pop(); // Delete's last element

// Add new values to the beginning of the array
array.unshift( "new", "values" );

// Add new values to the end of the array
array.push( "ending", "values" );

// Splice can do anything remember
// splice( point, delete, add values... )
array.splice( 2, 2, "new elemets", [], {}, 200, 300, function(){} );