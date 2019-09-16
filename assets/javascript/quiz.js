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
    }],
      image: "https://media.giphy.com/media/xThtatRttFzLD9oEtG/giphy.gif"
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
      }],
      image: "../images/argus.jpg"
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
      }],
      image: "../images/three_hammers.jpg"
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
      }],
      image: "../images/naaru.jpg"
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
      }],
      image: "../images/si7.jpg"
  }];

  var userAnswer;

  var numCorrect = 0;

  var numQuestions = questions.length;

  var questionTracker = 0;

  var time = 30;

  var timer;

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
    $('.question-div').addClass('hidden');
    checkAnswer();
  })

  function checkAnswer(){
    if(userAnswer === "true"){
      correctAnswer();
    } else if(userAnswer === "false"){
      wrongAnswer();
    }
  }

  function startGame() {
    updateScore();
    newQuestion();
  }

  function wrongAnswer(){
    console.log('wrong');
    $('.results').empty();
    $('.results').removeClass('hidden');
    showResult();
  }

  function correctAnswer(){
    console.log('right!');
    $('.results').empty();
    $('.results').removeClass('hidden');
    showResult();
    numCorrect++;
    updateScore();
  }

  function showResult(){
    alert('showing result picture');
    console.log(questions[questionTracker-1].image);
    $('.results').append('<img src=' + questions[questionTracker - 1].image + ' class="results-img">');
    setTimeout(hideResult, 5000);
  }

  function hideResult(){
    alert('RESULT IMAGE OVER')
    $('.results').addClass('hidden');
    $('.question-div').removeClass('hidden');
    newQuestion();
  }

  function questionTimer(){
    clearInterval(timer)
    timer = setInterval(countDown, 1000);
  }

  function countDown(){
    time--;
    $('.timer').text(time + " seconds");

    if(time===0){
      alert('Time is up!')
      alert('You got ' + numCorrect + "/" + numQuestions + " questions correct!")
      resetGame()
    }
  }

  function updateScore() {
    $('.score').text(numCorrect + "/" + numQuestions);
  }

  function resetGame() {
    numCorrect = 0;
    time = 30;
    questionTracker = 0;
    $('.question-div').addClass('hidden');
    $('.start').removeClass('hidden');
  }

  function newQuestion(){

    $('.question-form').empty();

    //questions.forEach(function(question){
    //  var title = $('<h1>');
    //  title.text(question.question);
    //
    //  $('.question-div').append(title);
    //
    //  question.answers.forEach(function(answer){
    //   
    //  })
    //
    //})

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
    time = 30;
    questionTimer();

  }
})