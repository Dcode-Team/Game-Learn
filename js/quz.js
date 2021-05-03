"use strict";
/* let questionCon = document.getElementById("question-container");
// let answerButtons = document.getElementById('answer-buttons');
let retakeBtn = document.getElementById("retake-btn");
let answer2 = document.getElementById("answer2");
let answer1 = document.getElementById("answer1");
let aud = document.getElementById("aud-clap");
let imgs = [
  "apples.png",
  "ball.png",
  "bear.png",
  "bee.png",
  "box.png",
  "boys.png",
  "cat.png",
  "dog.png",
  "donkey.png",
  "door.png",
  "elephant.png",
  "fishes.png",
  "flower.png",
  "light.png",
  "mirror.png",
  "pens.png",
  "plates.png",
  "star.png",
  "sun.png",
  "window.png",
];
let quest = [
  "How many apples in the picture ? ",
  "How many balls do you see in the picture? ",
  "The Bears  sounds is ....? ",
  "The Bees sound is ....?",
  "How many box do you see in the picture?",
  "How many boys do you see in the picture?",
  "The cat sound is ? ",
  "The dog sound is ? ",
  "The Donkeys sound is ..? ",
  "What dose the word door starts with? ",
  "The Elephants sound is ...?",
  "How many fishes in the picture ?",
  "What dose the word flower starts with?",
  "What dose the word light starts with?",
  "Mirror start with ?? ",
  "How many pens do you see in the picture?",
  "How many plates do you see in the picture? ",
  "What dose the word start starts with?",
  "Sun start with ?? ",
  "What does the word window starts with? ",
];
let imgQ = document.getElementById("img_Q");

 function Question(name, questions, answer1, answer2) {
  this.questions = questions;
  this.name = name;
  this.img = "./img/imgQiuz/" + name;
  this.answer1 = answer1;
  this.answer2 = answer2;
  Question.quiz.push(this);
} 
Question.quiz = [];
let score = 0;
let m = 0;
let rightAnswer = 0;
let finalNum = 20;
function dispalyQ() {
  let randomNUm = randomQA(1, 2);
  if (m < Question.quiz.length) {
    let question1 = document.getElementById("qustion1");
    question1.textContent = Question.quiz[m].questions;
    if (m < imgs.length) {
      imgQ.setAttribute("src", Question.quiz[m].img);
    }

    answer1 = document.getElementById("answer1");
    answer2 = document.getElementById("answer2");
    if (randomNUm === 1) {
      rightAnswer = 1;
      answer1.textContent = Question.quiz[m].answer1;
      answer2.textContent = Question.quiz[m].answer2;
    } else {
      rightAnswer = 2;
      answer1.textContent = Question.quiz[m].answer2;
      answer2.textContent = Question.quiz[m].answer1;
    }
    m++;
  }
  localStorage.setItem("questions", JSON.stringify(Question.quiz));
}

function randomQA(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function showResults(e) {
  count++;
  if (count <= finalNum) {
    if (rightAnswer === 1) {
      if (e.target.id === "answer1") {
        score++;
        if (count !== finalNum) {
          dispalyQ();
        }
      } else {
        if (count !== finalNum) {
          dispalyQ();
        }
      }
    } else if (e.target.id === "answer2") {
      score++;
      if (count !== finalNum) {
        dispalyQ();
      }
    } else {
      dispalyQ();
    }
  } else {
    let pEle = document.createElement("p");
    pEle.textContent = `Your Score is ${score}`;
    questionCon.appendChild(pEle);
    aud.play();
    localStorage.setItem("score", score);
    answer1.removeEventListener("click", showResults);
    answer2.removeEventListener("click", showResults);
  }

  console.log(score);
}
let count = 0;
function getData() {
  let x = JSON.parse(localStorage.getItem("questions"));
  if (x) {
    for (let i = 0; i < x.length; i++) {
      new Question(
        x[i].questions,
        x[i].name,
        x[i].img,
        x[i].answer1,
        x[i].answer2
      );
    }
  } else {
    for (let i = 0; i < imgs.length; i++) {
      new Question(imgs[i]);
    }
  }
  let scor = JSON.parse(localStorage.getItem("score"));
  let pEle = document.createElement("p");
  pEle.textContent = `Your previous Score is ${scor}`;
  questionCon.appendChild(pEle);
}

function playAudio() {
  aud.play();
}

function pauseAudio() {
  aud.pause();
}
function retake() {
  // if(count===finalNum){
  count = 0;
  m = 0;
  score = 0;
  dispalyQ();
  showResults();
  //}
}
retakeBtn.addEventListener("click", retake);

new Question(imgs[0], quest[0], "2 Apples ", "5 Apples");
new Question(imgs[1], quest[1], "5 Balls", "2 Balls");
new Question(imgs[2], quest[2], "Roar", "Pipe");
new Question(imgs[3], quest[3], "Buzz", "Quack");

new Question(imgs[4], quest[4], "1 Box", "3 Boxs");

new Question(imgs[5], quest[5], "6 Boys", "8 Boys");
new Question(imgs[6], quest[6], "Purr", "bark");
new Question(imgs[7], quest[7], "Bark ", "Growl");
new Question(imgs[8], quest[8], "Hee-Haw", "Wheek");
new Question(imgs[9], quest[9], "The letter D", "The letter V");

new Question(imgs[10], quest[10], "Trumpet", "Squeak");

new Question(imgs[11], quest[11], "4 Fishes", "8 Fishes");
new Question(imgs[12], quest[12], "The letter F", "The letter J");

new Question(imgs[13], quest[13], "The letter L", "The letter Z ");

new Question(imgs[14], quest[14], "The Letter M", "The Letter S");
new Question(imgs[15], quest[15], "3 Pens", "7 pens");
new Question(imgs[16], quest[16], "9 Plates", "6 Plates");
new Question(imgs[17], quest[17], "The letter S", "The letter V");

new Question(imgs[18], quest[18], "The letter S", "The letter W");

new Question(imgs[19], quest[19], "The letter W", "The letter S");

dispalyQ();
answer1.addEventListener("click", showResults);
answer2.addEventListener("click", showResults);

getData(); */

//Rawan edit
//=============
console.log(Animals.all[0]);

let btn1=document.createElement('button');
let btn2=document.createElement('button');
let sh=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let mainDev=document.getElementById('qusCard');
let imgs = [
  "apples.png",
  "ball.png",
  "bear.png",
  "bee.png",
  "box.png",
  "boys.png",
  "cat.png",
  "dog.png",
  "donkey.png",
  "door.png",
  "elephant.png",
  "fishes.png",
  "flower.png",
  "light.png",
  "mirror.png",
  "pens.png",
  "plates.png",
  "star.png",
  "sun.png",
  "window.png",
];

let questionArr = [
  "How many apples in the picture ? ",
  "How many balls do you see in the picture? ",
  "The Bears  sounds is ....? ",
  "The Bees sound is ....?",
  "How many box do you see in the picture?",
  "How many boys do you see in the picture?",
  "The cat sound is ? ",
  "The dog sound is ? ",
  "The Donkeys sound is ..? ",
  "What dose the word door starts with? ",
  "The Elephants sound is ...?",
  "How many fishes in the picture ?",
  "What dose the word flower starts with?",
  "What dose the word light starts with?",
  "Mirror start with ?? ",
  "How many pens do you see in the picture?",
  "How many plates do you see in the picture? ",
  "What dose the word start starts with?",
  "Sun start with ?? ",
  "What does the word window starts with? ",
];
let trueAns = [
  "2 Apples ",
  "6 Balls",
  "Roar",
  "Buzz",
  "1 Box",
  "6 Boys",
  "Purr",
  "Bark",
  "Hee-Haw",
  "The letter D",
  "Trumpet",
  "4 Fishes",
  "The letter F",
  "The letter L",
  "The Letter M",
  "3 Pens",
  "9 Plates",
  "The letter S",
  "The letter S",
  "The letter W",
];
let falseAns = [
  "5 Apples",
  "2 Balls",
  "Pipe",
  "Quack",
  "3 Boxs",
  "8 Boys",
  "bark",
  "Growl",
  "Wheek",
  "The letter V",
  "Squeak",
  "8 Fishes",
  "The letter J",
  "The letter Z ",
  "The Letter S",
  "7 pens",
  "6 Plates",
  "The letter V",
  "The letter W",
  "The letter S",
];
function Question (index) {
  this.imgPath='./img/imgQiuz/'+imgs[index];
  this.question=questionArr[index];
  this.trueAns=trueAns[index];
  this.falseAns=falseAns[index];
  Question.allQ.push(this);


}
Question.allQ=[];
for (let i=0;i<imgs.length;i++){
  new Question(i);
}

Question.prototype.rendar = function(i){
  mainDev.innerHTML='';
  let qHeader=document.createElement('h1');
  mainDev.appendChild(qHeader);
  qHeader.textContent=this.question;
  let qImg=document.createElement('img');
  mainDev.appendChild(qImg);
  qImg.src=this.imgPath;
  mainDev.appendChild(btn1);
  mainDev.appendChild(btn2);
  if(i%3 ==0){
    btn1.textContent=this.trueAns;
    btn2.textContent=this.falseAns;
  }else{
    btn1.textContent=this.falseAns;
    btn2.textContent=this.trueAns;

  }
  btn1.addEventListener('click',btn1Handler);
  btn2.addEventListener('click',btn2Handler);
  

}
shuffle(sh);
let Qcounter=0;
Question.allQ[sh[Qcounter]].rendar(Qcounter);

let scour=0;
function btn1Handler(){
    if(btn1.textContent == Question.allQ[sh[Qcounter]].trueAns){
      scour++;
      Qcounter++;
      console.log('scour='+scour+"couner="+Qcounter);
      if(Qcounter<20){
        console.log(sh[Qcounter]);
        Question.allQ[sh[Qcounter]].rendar(Qcounter);
      }
      else{
        finshMsg();
      }
      
      
    }
    else if(btn1.textContent == Question.allQ[sh[Qcounter]].falseAns){
      Qcounter++;
      console.log('scour='+scour+"couner="+Qcounter);
      if(Qcounter<20){
        console.log(sh[Qcounter]);
        Question.allQ[sh[Qcounter]].rendar(Qcounter);
      }
      else{
        finshMsg();
      }
      
     
     
    }
}
function btn2Handler(){
  
  if(btn2.textContent == Question.allQ[sh[Qcounter]].trueAns){
    scour++;
    Qcounter++;
    console.log('scour='+scour+"couner="+Qcounter);
    if(Qcounter<20){
      console.log(sh[Qcounter]);
      Question.allQ[sh[Qcounter]].rendar(Qcounter);
    }
    else{
      finshMsg();
    }
    
    
  }
  else if(btn2.textContent == Question.allQ[sh[Qcounter]].falseAns){
    Qcounter++;
    console.log('scour='+scour+"couner="+Qcounter);
    if(Qcounter<20){
      console.log(sh[Qcounter]);
      Question.allQ[sh[Qcounter]].rendar(Qcounter);
    }
    else{
      finshMsg();
    }
    
   
   
  }
}

function finshMsg(){
  let chech=document.createElement('img');
  mainDev.innerHTML='';
  mainDev.appendChild(chech);
  chech.src='./img/imgQiuz/right-icon.png';
  chech.classList.add("fade");
  let header=document.createElement('h1');
  mainDev.appendChild(header);
  header.textContent='Well done !';
  let header2=document.createElement('h2');
  mainDev.appendChild(header2);
  header2.textContent='Your Score is '+scour;
}
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


