'use strict';
let questionCon = document.getElementById('question-container');
// let answerButtons = document.getElementById('answer-buttons');
let retakeBtn = document.getElementById('retake-btn');
let answer2 = document.getElementById('answer2');
let answer1 = document.getElementById('answer1');
let aud = document.getElementById('aud-clap');
let imgs=['apples.png','ball.png','bear.png','bee.png','box.png','boys.png','cat.png'
  ,'dog.png','donkey.png','door.png','elephant.png','fishes.png','flower.png','light.png','mirror.png','pens.png',
  'plates.png','star.png','sun.png','window.png'];
let quest =[
  'How many apples in the picture ? ',
  'How many balls do you see in the picture? ',
  'The Bears  sounds is ....? ',
  'The Bees sound is ....?',
  'How many box do you see in the picture?',
  'How many boys do you see in the picture?',
  'The cat sound is ? ',
  'The dog sound is ? ',
  'The Donkeys sound is ..? ',
  'What dose the word door starts with? ',
  'The Elephants sound is ...?',
  'How many fishes in the picture ?',
  'What dose the word flower starts with?',
  'What dose the word light starts with?',
  'Mirror start with ?? ',
  'How many pens do you see in the picture?',
  'How many plates do you see in the picture? ',
  'What dose the word start starts with?',
  'Sun start with ?? ',
  'What does the word window starts with? ',
];
let imgQ = document.getElementById('img_Q');

function Question (name, questions,answer1, answer2){
  this.questions= questions;
  this.name=name;
  this.img= './img/imgQiuz/'+name;
  this.answer1=answer1;
  this.answer2=answer2;
  Question.quiz.push(this);
}
Question.quiz=[];
let score = 0;
let m = 0;
let rightAnswer=0;
let finalNum=20;
function dispalyQ ()
{
  let randomNUm=randomQA(1,2);
  if (m < Question.quiz.length){
    let question1 = document.getElementById('qustion1');
    question1.textContent = Question.quiz[m].questions;
    if(m<imgs.length){
      imgQ.setAttribute('src',Question.quiz[m].img);
    }

    answer1 = document.getElementById('answer1');
    answer2= document.getElementById('answer2');
    if(randomNUm===1){
      rightAnswer=1;
      answer1.textContent = Question.quiz[m].answer1;
      answer2.textContent = Question.quiz[m].answer2;
    }else{
      rightAnswer=2;
      answer1.textContent = Question.quiz[m].answer2;
      answer2.textContent = Question.quiz[m].answer1;
    }
    m++;
  }
  localStorage.setItem('questions', JSON.stringify(Question.quiz));
}

function randomQA(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function showResults (e) {
  count++;
  if(count<=finalNum){
    if(rightAnswer===1){
      if (e.target.id === 'answer1'){
        score++;
        if(count!==finalNum){
          dispalyQ();
        }
      }else{
        if(count!==finalNum){
          dispalyQ();
        }
      }
    }else if(e.target.id==='answer2'){
      score++;
      if(count!==finalNum){
        dispalyQ();
      }
    }else{
      dispalyQ();
    }
  }else{
    let pEle = document.createElement('p');
    pEle.textContent=`Your Score is ${score}`;
    questionCon.appendChild(pEle);
    aud.play();
    localStorage.setItem('score',score);
    answer1.removeEventListener('click',showResults);
    answer2.removeEventListener('click',showResults);
   

  }


  console.log(score);
}
let count=0;
function getData(){
  let x = JSON.parse(localStorage.getItem('questions'));
  if (x){
    for (let i =0; i< x.length; i++){
      new Question(x[i].questions,x[i].name,x[i].img,x[i].answer1,x[i].answer2 );
    }
  }else{
    for(let i=0;i<imgs.length;i++){
      new Question(imgs[i]);
    }
  }
  let scor=JSON.parse(localStorage.getItem('score'));
  let pEle = document.createElement('p');
  pEle.textContent=`Your previous Score is ${scor}`;
  questionCon.appendChild(pEle);
}

function playAudio() {
  aud.play();
}

function pauseAudio() {
  aud.pause();
}
function retake(){
  // if(count===finalNum){
  count=0;
  m=0;
  score=0;
  dispalyQ();
  showResults();
  //}
}
retakeBtn.addEventListener('click',retake);

new Question(imgs[0],quest[0],'2 Apples ', '5 Apples');
new Question(imgs[1],quest[1], '5 Balls', '2 Balls');
new Question(imgs[2],quest[2],'Roar', 'Pipe');
new Question(imgs[3],quest[3], 'Buzz', 'Quack');

new Question(imgs[4],quest[4], '1 Box','3 Boxs');

new Question(imgs[5],quest[5],'6 Boys', '8 Boys');
new Question(imgs[6],quest[6],'Purr', 'bark');
new Question(imgs[7],quest[7],'Bark ', 'Growl');
new Question(imgs[8],quest[8], 'Hee-Haw', 'Wheek');
new Question(imgs[9],quest[9],'The letter D', 'The letter V');

new Question(imgs[10],quest[10], 'Trumpet','Squeak');

new Question(imgs[11],quest[11],'4 Fishes', '8 Fishes');
new Question(imgs[12],quest[12],'The letter F', 'The letter J');

new Question(imgs[13],quest[13],'The letter L', 'The letter Z ');

new Question(imgs[14],quest[14],'The Letter M', 'The Letter S');
new Question(imgs[15],quest[15], '3 Pens', '7 pens');
new Question(imgs[16],quest[16],'9 Plates', '6 Plates');
new Question(imgs[17],quest[17], 'The letter S', 'The letter V');

new Question(imgs[18],quest[18], 'The letter S', 'The letter W');

new Question(imgs[19],quest[19], 'The letter W', 'The letter S');


dispalyQ();
answer1.addEventListener('click', showResults);
answer2.addEventListener('click', showResults);



getData();
