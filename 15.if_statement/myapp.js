var carsLeft  = 1,
    carsRight = 0,
    greenMan  = "yes";

if( greenMan === "yes" )
{
    console.log( 'cross the road' );
}
else if(
    greenMan === "yes" && ( carsLeft === 0 || carsRight === 0 )

)
{
    console.log( 'All clear! Cross the road' );
}
else
{
    console.log( "Stay where you are!" );
}