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

  var submitBtn = $('<button>').attr('class', 'submit-btn').attr('type', 'submit');

  submitBtn.text('Submit Answer');


  $('.start').on('click', function(){
    $('.start').attr('class', 'hidden')

    $('.question-div').removeClass('hidden');

    startGame();
  })

  $(document).on('change', '.question-answer', (function(){
    console.log('we are in');
    userAnswer = $(this).attr('correctAnswer');
    console.log(userAnswer);
  }))

  $(document).on('click', '.submit-btn', function(event){
    event.preventDefault();
    checkAnswer();
    newQuestion();
  })

  function checkAnswer(){
    if(userAnswer === "true"){
      correctAnswer();
    } else if(userAnswer === "false"){
      wrongAnswer();
    }
  }

  function startGame() {
    newQuestion();
  }

  function wrongAnswer(){
    console.log('wrong');
  }

  function correctAnswer(){
    console.log('right!');
  }

  function newQuestion(){

    $('.question-form').empty();

    // <div class="form-check">
    //   <input class="form-check-input" type="radio" name="answer1" id="answer1" value="option1" checked>
    //     <label class="form-check-label question-one-label" for="answer1">
    //     </label>
    // </div>

    var title = $('<h2>');

    title.text(questions[questionTracker].questionText);

    $('.question-form').append(title);

    questions[questionTracker].answers.forEach(function(answer) {

      var radioBtn = $('<input class="question-answer" type="radio" name="answer-choice">').attr('correctAnswer', answer.answerCorrect);

      var label = $('<label class="form-check-label">');
      label.text(answer.answerText);

      $('.question-form').append(radioBtn);
      $('.question-form').append(label);
      $('.question-form').append('<br>');


    })

    $('.question-form').append(submitBtn);
    $('.question-div').removeClass('hidden');
    questionTracker++;
  }
})