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
      questionNumber: 2,
      questionText: "Who was the final boss of the Legion expansion?",
      answers: [{
        answerNumber: 1,
        answerText: 'Argus',
        answerCorrect: true
      },
      {
        answerNumber: 2,
        answerText: "Gul'dan",
        answerCorrect: false
      },
      {
        answerNumber: 3,
        answerText: "Illidan",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'Turalyon',
        answerCorrect: false
      }]
  }, 
    {
      questionNumber: 3,
      questionText: "Who leads the dwarves of Azeroth?",
      answers: [{
        answerNumber: 1,
        answerText: 'Magni',
        answerCorrect: false
      },
      {
        answerNumber: 2,
        answerText: 'Brann',
        answerCorrect: false
      },
      {
        answerNumber: 3,
        answerText: "Moira",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'The Council of the Three Hammers',
        answerCorrect: true
      }]
  }, 
    {
      questionNumber: 4,
      questionText: "What are the Naaru?",
      answers: [{
        answerNumber: 1,
        answerText: 'Beings of Light',
        answerCorrect: true
      },
      {
        answerNumber: 2,
        answerText: 'Demons',
        answerCorrect: false
      },
      {
        answerNumber: 3,
        answerText: "A sect of magi",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'A cult of Tauren',
        answerCorrect: false
      }]
  },
    {
      questionNumber: 5,
      questionText: "What is the name of the Alliance espionage faction?",
      answers: [{
        answerNumber: 1,
        answerText: 'MI:6',
        answerCorrect: false
      },
      {
        answerNumber: 2,
        answerText: 'The Kingsguard',
        answerCorrect: false
      },
      {
        answerNumber: 3,
        answerText: "The Deathstalkers",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'SI:7',
        answerCorrect: true
      }]
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

  $('.form-check-input').on('click', function(){
    userAnswer = $(this).attr('correctAnswer');
    console.log(userAnswer);
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

    $('.question-div').append('<button>').attr('class', 'submit-answer').attr('type', 'submit');

    questionTracker++;
  }
})