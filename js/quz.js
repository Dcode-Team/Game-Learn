'use strict';
let questionCon = document.getElementById('question-container');
let answerButtons = document.getElementById('answer-buttons');
let startBtn = document.getElementById('start-btn');
let answer2 = document.getElementById('answer2');
let answer1 = document.getElementById('answer1');
let qs = [1,2,3];
//let questionArr=['What is 2 + 2?', 'What is 5 + 2?', 'What is 8 + 2?'];
//let choices = [4, 7, 10];

// object for questions

function Question ( questions,answer1, answer2){
  this.questions= questions;
  this.answer1=answer1;
  this.answer2=answer2;
  this.correctAnswer=[4,7,10];
  

  Question.quiz.push(this);
}
Question.quiz=[];
let score = 0;
let m = 0;
let rightAnswer=[];
//function to dispaly questions
function dispalyQ ()
{

  if (m <= Question.quiz.length){
    let question1 = document.getElementById('qustion1');
    question1.textContent = Question.quiz[m].questions;

    localStorage.setItem('questions', JSON.stringify('Question.quiz'));

    answer1 = document.getElementById('answer1');
    answer1.textContent = Question.quiz[m].answer1;
    
    answer2= document.getElementById('answer2');
    answer2.textContent = Question.quiz[m].answer2;

    m++;

  }

}

function showResults (e) {
  if (e.target.id === 'answer1'){
    score++;

  }else{
    score--;

  }
  console.log(score);
}






function getData(){
  let x = JSON.parse(localStorage.getItem('questions'));
  if (x){
    // for (let i =0; i< x.length; i++){
    //new Question( '4','22');
    //Question.score++;
    // }
  }
}
getData();









new Question('What is 2+2?',4, 22);
new Question('What is 5+2?', 7, 4);
new Question('What is 8+2?',10, 6);

answer1.addEventListener('click', showResults);
answer2.addEventListener('click', showResults);
startBtn.addEventListener('click', dispalyQ);

//answer1.removeEventListener('click', shuffle);
