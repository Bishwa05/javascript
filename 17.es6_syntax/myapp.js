
// Var can be accessed directly from window object
// var does not respect conditional execution context.
if (true) {

    var symbolName = "value ref in memory";

    //let has more respect for the scope, 
    //particularly in conditional statement cases
    let letSymbol = "Scoped Value";

    const symName = "const value in memory";
}

for(var i =0; i<5; i++){
    var symbolName = "value ref in memory";

    //let has more respect for the scope, 
    //particularly in conditional statement cases
    let letSymbol = "Scoped Value";

    const symName = "const value in memory";
}

// var respect only the scope of function execution context.
function check() {
    var symbol = "assign a value";
}