$(document).ready(function() {

  var gemNum1 = gemNum();
  var gemNum2 = gemNum();
  var gemNum3 = gemNum();
  var gemNum4 = gemNum();
  var yourNum = 0;

  // var x = Number(gemnum1);
  console.log(gemNum1);

  function getRandomInt() {
    return Math.floor(Math.random() * (102)) + 19;
  }

  function gemNum() {
    return Math.floor(Math.random() * (12)) + 1;
  }


  $('.new-game').on('click', function() {
    $('.magic-number').text('Magic Number:' + " " + getRandomInt())
  });

  // $('#one').on('click', function(){
  //   console.log('you clicked a gem');
  //   gemNum1
  // })

$('#one').on('click', function(){

})


});
