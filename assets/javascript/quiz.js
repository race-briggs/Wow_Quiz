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
      answerNumber: 4,
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

  var userAnswer;

  var numCorrect = 0;

  var numQuestions = questions.length;

  var questionTracker = 0;


  $('.start').on('click', function(){
    $('.start').attr('class', 'hidden')

    $('.question-div').removeClass('hidden');

    startGame();
  })

  function startGame() {
    newQuestion();
  }

  function wrongAnswer(){

  }

  function correctAnswer(){

  }

  function newQuestion(){

    $('.question-div').empty();

    // <div class="form-check">
    //   <input class="form-check-input" type="radio" name="answer1" id="answer1" value="option1" checked>
    //     <label class="form-check-label question-one-label" for="answer1">
    //     </label>
    // </div>

    var title = $('<h2>');

    title.text(questions[questionTracker].questionText);

    $('.question-div').append(title);

    questions[questionTracker].answers.forEach(function(answer) {

      var answerChoice = $('<div>').attr('class', 'form-check');

      var radioBtn = $('<input>').attr('class', 'form-check-input').attr('type', 'radio').attr('correctAnswer', answer.answerCorrect);

      var label = $('<label>').attr('class', 'form-check-label');
      label.text(answer.answerText);

      answerChoice.append(radioBtn);
      answerChoice.append(label);
      $('.question-div').append(answerChoice);


    })

    questionTracker++;
  }
})