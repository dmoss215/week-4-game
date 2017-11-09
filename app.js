$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var gemNum1, gemNum2, gemNum3, gemNum4, yourNum, magicNum;

// ============== Function to reset game ========================================================
function resetGame() {
  gemNum1 = gemNum();
  gemNum2 = gemNum();
  gemNum3 = gemNum();
  gemNum4 = gemNum();
  yourNum = 0;
  magicNum = getRandomInt();
}

// =============== Functions to generate random numbers ============================================
  function getRandomInt() {
    return Math.floor(Math.random() * (102)) + 19;
  }

  function gemNum() {
    return Math.floor(Math.random() * (12)) + 1;
  }

// ================= Generate the random number and put it into "magic-number" div ==============================
  $('.my-btn').on('click', function() {
    resetGame();
    $('.magic-number').text('Magic Number:' + " " + magicNum);
    $('#wins').text('You have won:' + wins);
    $('#losses').text('You have lost:' + losses);
    $('your-score').text('0');
  });


// ============== When a gem is clicked, get variable for that number gem and add it to total number ========
  $('#one').on('click', function(){
    yourNum = yourNum + gemNum1;
    $('#totalNum').text(yourNum);
    winOrLose();
  })

  $('#two').on('click', function(){
    yourNum = yourNum + gemNum2;
    $('#totalNum').text(yourNum);
    winOrLose();
  })

  $('#three').on('click', function(){
    yourNum = yourNum + gemNum3;
    $('#totalNum').text(yourNum);
    winOrLose();
  })

  $('#four').on('click', function(){
    yourNum = yourNum + gemNum4;
    $('#totalNum').text(yourNum);
    winOrLose();
  })

// =============  More Info Button ==================================================
  $('.slide').on('click', function(){
      $('#fade-in').toggleClass('show');
  });
// ======= If to add Wins and Losses =================================================

function winOrLose() {
  if (magicNum == yourNum) {
    wins++;
    $('#totalNum').text('You Win!!');
    $('#wins').text('Wins:' + wins);
    console.log('you win!');
  } else if (yourNum > magicNum) {
    losses++;
    $('#totalNum').text('You Lose!!');
    $('#losses').text('Losses:' + losses);
  }
}

});
