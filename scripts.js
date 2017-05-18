console.log('JavaScript/jQuery sourced!');

$(onReady); // short-hand for document.ready

function  onReady(){
  console.log('loaded JS');
  // register events


  //cicrle click
  $('.circle').on('click', changeTitleColor);

  // empty-box button click
  $('#empty-box').on('click', emptyBox);

  // fill the box
}

function changeTitleColor(){
  // update color of h1 element based on color of circle clicked
}

function emptyBox(){
  // remove contents of the box
}

function fillTheBox(message){
  var $p = $('<p>');
  $p.append(message);
  $('.box').append($p);
}
