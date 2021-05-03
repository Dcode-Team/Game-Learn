'use strict';


let btn1=document.createElement('button');
let btn2=document.createElement('button');
let sh=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let mainDev=document.getElementById('qusCard');
let divScour= document.getElementById('scoure');
let audio1=document.createElement('audio');
mainDev.appendChild(audio1);
audio1.src='./audios/lucky-star-good-job.mp3';
let imgs = [
  'apple.png',
  'ball.png',
  'bear.png',
  'bee.png',
  'box.png',
  'boys.png',
  'cat.png',
  'dog.png',
  'donkey.png',
  'door.png',
  'elephant.png',
  'fishes.png',
  'flower.png',
  'light.png',
  'mirror.png',
  'pens.png',
  'plates.png',
  'star.png',
  'sun.png',
  'window.png',
];

let questionArr = [
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
let trueAns = [
  '2 Apples ',
  '6 Balls',
  'Roar',
  'Buzz',
  '1 Box',
  '6 Boys',
  'Purr',
  'Bark',
  'Hee-Haw',
  'The letter D',
  'Trumpet',
  '4 Fishes',
  'The letter F',
  'The letter L',
  'The Letter M',
  '3 Pens',
  '9 Plates',
  'The letter S',
  'The letter S',
  'The letter W',
];
let falseAns = [
  '5 Apples',
  '2 Balls',
  'Pipe',
  'Quack',
  '3 Boxs',
  '8 Boys',
  'bark',
  'Growl',
  'Wheek',
  'The letter V',
  'Squeak',
  '8 Fishes',
  'The letter J',
  'The letter Z ',
  'The Letter S',
  '7 pens',
  '6 Plates',
  'The letter V',
  'The letter W',
  'The letter S',
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

function btn1Handler(){
  if(btn1.textContent === Question.allQ[sh[Qcounter]].trueAns){
    scour++;
    Qcounter++;
    // console.log('scour='+scour+'couner='+Qcounter);
    if(Qcounter<12){
      // console.log(sh[Qcounter]);
      Question.allQ[sh[Qcounter]].rendar(Qcounter);
    }
    else{
      finshMsg();
    }


  }
  else if(btn1.textContent === Question.allQ[sh[Qcounter]].falseAns){
    Qcounter++;
    // console.log('scour='+scour+'couner='+Qcounter);
    if(Qcounter<12){
      // console.log(sh[Qcounter]);
      Question.allQ[sh[Qcounter]].rendar(Qcounter);
    }
    else{
      finshMsg();
    }
  }
  localStorage.setItem('score', JSON.stringify(scour));
}
function btn2Handler(){

  if(btn2.textContent === Question.allQ[sh[Qcounter]].trueAns){
    scour++;
    Qcounter++;
    console.log('scour='+scour+'couner='+Qcounter);
    if(Qcounter<12){
      // console.log(sh[Qcounter]);
      Question.allQ[sh[Qcounter]].rendar(Qcounter);
    }
    else{
      finshMsg();
    }


  }
  else if(btn2.textContent === Question.allQ[sh[Qcounter]].falseAns){
    Qcounter++;
    // console.log('scour='+scour+'couner='+Qcounter);
    if(Qcounter<12){
      // console.log(sh[Qcounter]);
      Question.allQ[sh[Qcounter]].rendar(Qcounter);
    }
    else{
      finshMsg();
    }



  }
  localStorage.setItem('score', JSON.stringify(scour));
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
  if(i%3 ===0){
    btn1.textContent=this.trueAns;
    btn2.textContent=this.falseAns;
  }else{
    btn1.textContent=this.falseAns;
    btn2.textContent=this.trueAns;

  }
  btn1.addEventListener('click',btn1Handler);
  btn2.addEventListener('click',btn2Handler);


};



shuffle(sh);
let Qcounter=0;
Question.allQ[sh[Qcounter]].rendar(Qcounter);

let scour=0;



function finshMsg(){
  let chech=document.createElement('img');
  mainDev.innerHTML='';
  mainDev.appendChild(chech);
  chech.src='./img/imgQiuz/right-icon.png';
  chech.classList.add('fade');
  let header=document.createElement('h1');
  mainDev.appendChild(header);
  header.textContent='Well done !';
  let header2=document.createElement('h2');
  mainDev.appendChild(header2);
  header2.textContent='Your Score is '+scour+' out of 12';
  audio1.play();
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


function getData() {
  let x = JSON.parse(localStorage.getItem('score'));
  if (x===null) {
    let h1Ele = document.createElement('h1');
    divScour.appendChild(h1Ele);
    h1Ele.textContent='Your previous score '+0;
  }
  else {
    let h1Ele = document.createElement('h1');
    divScour.appendChild(h1Ele);
    h1Ele.textContent='Your previous score '+x+' out of 12';
  }
}
getData();
