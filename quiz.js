const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [ {
    question: "What is the correct spelling of my last name?",
    answers: {
      a: "Jacuzzi",
      b: "Iacuzzi",
      c: "Iacuzzo",
      d: "Jacuzzo"
    },
    correctAnswer: "c"
  },
  {
    question: "Eurasian carp are?",
    answers: {
      a: "Mammals",
      b: "Fish",
      c: "Birds",
      d: "Reptiles"
    },
    correctAnswer: "b"
  },
  {
    question: "How is my spelling?",
    answers: {
      a: "Bad",
      b: "Okish",
      c: "Good",
      d: "Flawless"
    },
    correctAnswer: "d"
  },
  {
    question: "Cyprinus carpio can be translated to:",
    answers: {
      a: "Cyprus carp",
      b: "Cypress carp",
      c: "Copper carp",
      d: "Carp carp"
    },
    correctAnswer: "d"
  }];
  
  
function buildQuiz(){
    
    const output = [];
    
    for(i=0; i<quizQuestions.length; i++){
      
      const answers = [];
    
      for(letter in quizQuestions[i].answers){
    
        answers.push(
          '<label>'
           + '<input type="radio" name="question'+i+'" value="'+letter+'">'
           + letter + ': '
           + quizQuestions[i].answers[letter]
           + '</label>'
           );
        }

       output.push(
         '<div class="question">' + quizQuestions[i].question + '</div>'
         + '<div class="answers">' + answers.join('') + '</div>'
         );
      }

        quizContainer.innerHTML = output.join('');
}

function showResults(){
// gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
  
// keep track of user's answers 
    var numCorrect = 0;
// for each question find the selected answer
      for(i=0; i<quizQuestions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
// if answer is correct add to the number of correct answers
          if(userAnswer===quizQuestions[i].correctAnswer){
            numCorrect++;
// and colour the answers green
            answerContainers[i].style.color = '#478C5C';
          }
// if answer is wrong or blank
          else{
// colour the answers red
            answerContainers[i].style.color = '#F79489';
          }
        }
   
// show number of correct answers out of total
        if (numCorrect === 0) { 
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
      }
      if (numCorrect === 1) { 
          resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
        }
        if (numCorrect === 2) { 
          resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
        }
        if (numCorrect === 3) { 
          resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Paul/carp pretty well!";
        }
        if (numCorrect === 4) { 
          resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Paul/carp so well!";
        }
  }

//load quiz
  buildQuiz();
  submitButton.onclick = function() {
    showResults();
  }