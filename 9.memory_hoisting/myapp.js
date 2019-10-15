console.log( myName, printName() );

var myName = "Lawrence";

function printName()
{
    console.log( a, embed() );
    
    var a = 100;
    // Functions hoisted above, but 
    // for variables the memory pointer gets created but assignment happens latter
    function embed(){ return "hello"; }
    
    return "John Doe";
}