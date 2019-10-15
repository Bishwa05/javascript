function name( fullname )
{    
    return fullname.firstname + fullname.lastname;
}

// Where there are objects...
var name1 = { firstname: "Hi", lastname: "Guruji"  };

const name2 = { firstname: "Mr", lastname: "John"  };

console.log(
    name( name1 ),
    name( name2 )
);

// There are callable objects
function embed( run )
{
    return run();
}

var name3 = function() { return "Sachin Tendulkar"  };

const name4 = function() { return "Callable TEST" };

console.log(
    embed( name3 ),
    embed( name4 )
);

function test( testname )
{
    return "Hello " + testname();
}

console.log(
    test( function(){ return "Test Name Bishwa : "} )
);