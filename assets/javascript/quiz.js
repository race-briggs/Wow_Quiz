$(document).ready(function(){
  var questions = [];

  var numCorrect = 0;

  var questionTracker = 0;

  
  $('.start').on('click', function(){
    $('.start').attr('class', 'hidden')

    $('.question-div').removeClass('hidden');

    startGame();
  })

  function startGame() {

  }
})