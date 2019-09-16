$(document).ready(function(){
  var questions = [
  {
    questionNumber: 1,
    questionText: "Who is the current leader of the Horde?",
    answers: [{
      answerNumber: 1,
      answerText: 'Thrall',
      answerCorrect: false
    },
    {
      answerNumber: 2,
      answerText: 'Sylvanas',
      answerCorrect: true
    },
    {
      answerNumber: 3,
      answerText: "Vol'jin",
      answerCorrect: false
    },
    {
      answerNumber: 1,
      answerText: 'Baine',
      answerCorrect: false
    }]
  }, 
  {

  }, 
  {

  }, 
  {

  },
  {

  }];

  var numCorrect = 0;

  var numQuestions = questions.length;

  var questionTracker = 0;


  $('.start').on('click', function(){
    $('.start').attr('class', 'hidden')

    $('.question-div').removeClass('hidden');

    startGame();
  })

  function startGame() {

  }
})