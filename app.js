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

  $('.magic-number').text('Magic Number:' + " " + magicNum);
  $('#wins').text('You have won:' + wins);
  $('#losses').text('You have lost:' + losses);
  $('#totalNum').text('0');
}


  if (!magicNum) {
    // ( function( ) { alert('stop'); } );
    $('.gems img').click(function() {alert("Press new game button!")});
    $("#totalNum").text('Press New Game Button to Begin!!!');
  }

// =============== Functions to generate random numbers ============================================
  function getRandomInt() {
    return Math.floor(Math.random() * (102)) + 19;
  }

  function gemNum() {
    return Math.floor(Math.random() * (12)) + 1;
  }

// ================= New Game Button Generate the random number and put it into "magic-number" div and reset the numbers assigned to gems and total score ==============================
  $('.my-btn').on('click', function() {
    resetGame();   
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
    $('#totalNum').text('You Win!! New Game starting...');
    $('#wins').text('Wins:' + wins);
    setTimeout(resetGame, 2000);
  } else if (yourNum > magicNum) {
    losses++;
    $('#totalNum').text('You Lose!!New Game starting...');
    $('#losses').text('Losses:' + losses);
    setTimeout(resetGame, 2000);
  }
}

});
