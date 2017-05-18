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
  fillTheBox('Omegatrons');
  fillTheBox('Omegabytes');
  fillTheBox('Omegalodons');
}

function changeTitleColor(){
  // update color of h1 element based on color of circle clicked
  console.log('changeTitleColor activated');

  // console.log('this', this);
  // console.log('$(this)', $(this));
  var classes = $(this).attr('class'); // .attr() is a getter/setter
  var classesArray = classes.split(' ');
  var color = classesArray[0];

  console.log('color class is:', color);

  $('h1').css('color', color);
}

function emptyBox(){
  // remove contents of the box
  $('.box').empty();
}

function fillTheBox(message){
  var $p = $('<p>');
  $p.append(message);
  $('.box').append($p);
  // $('.box').append('<p>' + message + '</p>') // this is the same as the previous three lines, but can quickly become convoluted and complex--therefore using the intermediaries above are more efficient
}
