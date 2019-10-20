var select = document.getElementsByName('cars')[0];

select.onclick = function( event ){
    console.log(event);
}

// Anonymous functions can't be removed by removeEventListener
select.addEventListener('click', function(event) {
    console.log(event, 'clicked by add event listener');
});

function ClickCallback( event ){
    console.log(event,'clicked by add event listener  callback with name');
}


select.addEventListener('click', ClickCallback);

select.removeEventListener('click',ClickCallback);