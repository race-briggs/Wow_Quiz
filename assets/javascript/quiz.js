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
      answerText: 'Sylvanas Windrunner',
      answerCorrect: true
    },
    {
      answerNumber: 3,
      answerText: "Vol'jin",
      answerCorrect: false
    },
    {
      answerNumber: 4,
      answerText: 'Baine Bloodhoof',
      answerCorrect: false
    }],
      image: "https://media.giphy.com/media/xThtatRttFzLD9oEtG/giphy.gif",
      rightAnswer: "Sylvanas!"
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
        answerText: "Illidan Stormrage",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'Turalyon',
        answerCorrect: false
      }],
      image: "https://gamepedia.cursecdn.com/wowpedia/thumb/8/8d/Argus_Headshot.jpg/1200px-Argus_Headshot.jpg",
      rightAnswer: "Argus!"
  }, 
    {
      questionNumber: 3,
      questionText: "Who leads the dwarves of Azeroth?",
      answers: [{
        answerNumber: 1,
        answerText: 'Magni Bronzebeard',
        answerCorrect: false
      },
      {
        answerNumber: 2,
        answerText: 'Brann Bronzebeard',
        answerCorrect: false
      },
      {
        answerNumber: 3,
        answerText: "Moira Darkiron",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'The Council of the Three Hammers',
        answerCorrect: true
      }],
      image: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fwww.blogcdn.com%2Fwow.joystiq.com%2Fmedia%2F2011%2F04%2F580councilthreehammers.jpg&client=amp-blogside-v2&signature=60955f99cab446ca518ef6f7db1f7c029ba3d146",
      rightAnswer: "The Council of the Three Hammers!"
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
      image: "https://gamepedia.cursecdn.com/wowpedia/0/0b/Xe%27ra.jpg",
      rightAnswer: "Beings of Light!"
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
      image: "https://gamepedia.cursecdn.com/wowpedia/thumb/2/21/Varian-Shattering.jpg/300px-Varian-Shattering.jpg?version=33c1682bcd65779abc3b6c7614101663",
      rightAnswer: "SI:7!"
  },
    {
      questionNumber: 6,
      questionText: "Who is not one of the dreaded Old Gods?",
      answers: [{
        answerNumber: 1,
        answerText: "C'thuun",
        answerCorrect: false
      },
      {
        answerNumber: 2,
        answerText: "Yogg-Saron",
        answerCorrect: false
      },
      {
        answerNumber: 3,
        answerText: "Xavius",
        answerCorrect: true
      },
      {
        answerNumber: 4,
        answerText: "Y'sharrj",
        answerCorrect: false
      }],
      image: "https://gamepedia.cursecdn.com/wowpedia/e/ea/Xavius_TCG2.jpg?version=a9d1524a9237eea04410834d47fb61b7",
      rightAnswer: "Xavius!"
    },
    {
      questionNumber: 7,
      questionText: "Who was the first mortal druid?",
      answers: [{
        answerNumber: 1,
        answerText: 'Malfurion Stormrage',
        answerCorrect: true
      },
      {
        answerNumber: 2,
        answerText: 'Cenarius',
        answerCorrect: false
      },
      {
        answerNumber: 3,
        answerText: "Hamuul Runetotem",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'Magni Bronzebeard',
        answerCorrect: false
      }],
      image: "https://vignette.wikia.nocookie.net/wowwiki/images/e/ed/MalfurionFullHearthstone.png/revision/latest?cb=20140505223304",
      rightAnswer: "Malfurion!"
    },
    {
      questionNumber: 8,
      questionText: "What is the oldest mortal race on Azeroth?",
      answers: [{
        answerNumber: 1,
        answerText: 'Night Elves',
        answerCorrect: false
      },
      {
        answerNumber: 2,
        answerText: 'Trolls',
        answerCorrect: true
      },
      {
        answerNumber: 3,
        answerText: "Dwarves",
        answerCorrect: false
      },
      {
        answerNumber: 4,
        answerText: 'Earthen',
        answerCorrect: false
      }],
      image: "https://gamepedia.cursecdn.com/wowpedia/f/f2/Vol%27jin_Wei.jpg",
      rightAnswer: "the Trolls!"
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
    $('.start').addClass('hidden')

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
    $('.results').append('<h2> That is incorrect! The answer was ' + questions[questionTracker - 1].rightAnswer + ' </h2>');
    showResult();
  }

  function correctAnswer(){
    console.log('right!');
    $('.results').empty();
    $('.results').removeClass('hidden');
    $('.results').append('<h2 class="results-text"> That is correct! </h2>');
    showResult();
    numCorrect++;
    updateScore();
  }

  function showResult(){
    console.log(questions[questionTracker-1].image);
    $('.results').append('<img src=' + questions[questionTracker - 1].image + ' class="results-img">');
    setTimeout(hideResult, 5000);
  }

  function hideResult(){
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
      newQuestion();
    }
  }

  function updateScore() {
    $('.score').text(numCorrect + "/" + numQuestions);
  }

  function resetGame() {
    clearInterval(timer);
    numCorrect = 0;
    time = 30;
    questionTracker = 0;
    $('.question-div').addClass('hidden');
    $('.start').removeClass('hidden');
  }

  function newQuestion(){

    console.log(questions[questionTracker].rightAnswer);

    $('.question-form').empty();

    if(questionTracker === questions.length){
      clearInterval(timer);
      alert('Quiz over! You got ' + numCorrect + ' out of ' + questions.length + ' questions correct!');
      resetGame();
      return
    }

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

    var title = $('<h2 class="question-text">');

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