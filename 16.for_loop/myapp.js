var elemArr = [ "el1", "el2", "el3" ];

/*for( var i = 0; i < elemArr.length; i++ )
{
    console.log( elemArr[ i ] );
}*/

/*for( var i = elemArr.length - 1;   i >= 0;  i-- )
{
    console.log( elemArr[ i ] );
}*/

for( var index in elemArr )
{
    console.log( elemArr[ index ] );
}