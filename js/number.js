'use strict';


let row1=document.getElementById('row1');
let row2=document.getElementById('row2');
let row3=document.getElementById('row3');
let row4=document.getElementById('row4');
let row5=document.getElementById('row5');
let row6=document.getElementById('row6');
let row21=document.getElementById('row21');
let row22=document.getElementById('row22');



let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let letterAudioArray = ['Asound', 'Bsound', 'Csound', 'Dsound', 'Esound', 'Fsound', 'Gsound', 'Hsound', 'Isound', 'Jsound', 'Ksound', 'Lsound', 'Msound', 'Nsound', 'Osound', 'Psound', 'Qsound', 'Rsound', 'Ssound', 'Tsound', 'Usound', 'Vsound', 'Wsound', 'Xsound', 'Ysound', 'Zsound',];

let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let numberAudioArray = ['0sound','1sound','2sound','3sound','4sound','5sound','6sound','7sound','8sound','9sound'];

let delta2 = [0,1,2,3,4,5,6,7,8,9];
let delta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];


function Numbers(name2, sound){

  this.name2 = name2;
  this.numberPath = './img/kids/numbers/' + this.name2+'.png';
  this.numberSoundPath = './audios/numbers-audio/' + sound+'.mp3';
  Numbers.all.push(this);
}
Numbers.all = [];

for (let numIndex = 0; numIndex < numberArray.length; numIndex++){
  new Numbers(numberArray[numIndex], numberAudioArray[numIndex]);
}

Numbers.prototype.renderB = function (numIndex){
  let coluElement = document.createElement('div');
  let picturtElement = document.createElement('img');


  if (numIndex < 5) {
    row21.appendChild(coluElement);
    picturtElement.src = this.numberPath;
    coluElement.appendChild(picturtElement);

  }else{
    row22.appendChild(coluElement);
    picturtElement.src=this.numberPath;
    coluElement.appendChild(picturtElement);
  }
  let numberSound = document.createElement('audio');
  coluElement.appendChild(numberSound);
  numberSound.src = this.numberSoundPath;

  picturtElement.addEventListener('click',function(){
    numberSound.play();

  });

};


for (let i = 0; i < Numbers.all.length; i++) {
  // console.log(i,delta[i],Letters.all[delta[i]])
  Numbers.all[delta2[i]].renderB(i);

}




function Letters(name, sound) {
  this.name = name;
  this.picturePath = './img/kids/letters/' + this.name+'.png';
  this.letterSoundPath = './audios/latters-audio/' + sound+'.mp3';
  Letters.all.push(this);

}

Letters.all = [];

for (let index = 0; index < letterArray.length; index++) {
  new Letters(letterArray[index], letterAudioArray[index]);
}

Letters.prototype.renderA = function (index) {
  let columeElement = document.createElement('div');
  let pictElement = document.createElement('img');


  if (index < 4) {
    row1.appendChild(columeElement);
    pictElement.src = this.picturePath;
    columeElement.appendChild(pictElement);

  }else if(index >4 && index<=8){
    row2.appendChild(columeElement);
    pictElement.src=this.picturePath;
    columeElement.appendChild(pictElement);

  }else if(index > 8 && index <= 12){
    row3.appendChild(columeElement);
    pictElement.src=this.picturePath;
    columeElement.appendChild(pictElement);

  }else if(index > 12 && index <= 16){
    row4.appendChild(columeElement);
    pictElement.src=this.picturePath;
    columeElement.appendChild(pictElement);

  }else if(index > 16 && index <= 20){
    row5.appendChild(columeElement);
    pictElement.src=this.picturePath;
    columeElement.appendChild(pictElement);

  }else{
    row6.appendChild(columeElement);
    pictElement.src=this.picturePath;
    columeElement.appendChild(pictElement);
  }




  let letterSound = document.createElement('audio');
  columeElement.appendChild(letterSound);
  letterSound.src = this.letterSoundPath;

  pictElement.addEventListener('click',function(){
    letterSound.play();

  });

};


for (let i = 0; i < Letters.all.length-1; i++) {
  // console.log(i,delta[i],Letters.all[delta[i]])
  Letters.all[delta[i]].renderA(i);

}



/* Ali  */

let audioPlayer = document.getElementById('audio');

function setLetterSound(letterVariable) {
  let mp3Source = document.getElementById('mp3Source');
  mp3Source.src = 'sounds/LettersNumbers/' + letterVariable +'.mp3';
}

function setGenericSound() {
  let mp3Source = document.getElementById('mp3Source');
  mp3Source.src = 'sounds/LettersNumbers/glass.mp3';
}


let kidsEnergy=document.getElementById('kidsEnergy');
function runAudioPlayer() {
  kidsEnergy=document.getElementById('kidsEnergy');
  kidsEnergy.pause();
  audioPlayer.load();
  audioPlayer.play();
  kidsEnergy.play();
  kidsEnergy.volume=0.09;
  //kidsEnergy.onvolumechange=function(){alert('The volume has been changed automaticly');};
}
document.onkeypress = function(event){

  let letterOnScreen = document.getElementById('big-char');
  console.log(event.charCode);
  if (
    event.charCode === 13||
    event.charCode === 32||
    event.charCode === 92||
    event.charCode === 96||
    event.charCode === 61||
    event.charCode === 43||
    event.charCode === 45||
    event.charCode === 33||
    event.charCode === 64||
    event.charCode === 35||
    event.charCode === 36||
    event.charCode === 37||
    event.charCode === 94||
    event.charCode === 38||
    event.charCode === 42||
    event.charCode === 40||
    event.charCode === 41||
    event.charCode === 95||
    event.charCode === 91||
    event.charCode === 93||
    event.charCode === 34||
    event.charCode === 39||
    event.charCode === 47||
    event.charCode === 63||
    event.charCode === 62||
    event.charCode === 44||
    event.charCode === 60||
    event.charCode === 46||
    event.charCode === 59||
    event.charCode === 58||
    event.charCode === 123||
    event.charCode === 124||
    event.charCode === 125||
    event.charCode === 126
  ) {
    if (event.charCode === 13) {
      letterOnScreen.innerHTML = 'Enter';
    } else if (event.charCode === 32) {
      letterOnScreen.innerHTML = 'Space';
    } else {
      letterOnScreen.innerHTML = String.fromCharCode(event.charCode);
    }
    setGenericSound();
    runAudioPlayer();
  } else {
    letterOnScreen.innerHTML = String.fromCharCode(event.charCode);
    let pressedLetter = String.fromCharCode(event.charCode).toLocaleUpperCase();
    setLetterSound(pressedLetter);
    runAudioPlayer();
  }
};

document.getElementById('mute-button').onclick = function() {
  if (audioPlayer.muted === false||kidsEnergy.muted===false) {
    audioPlayer.muted = true;
    kidsEnergy.muted=true;
    document.getElementById('mute-button').innerHTML = 'Unmute Sounds';
  } else {
    audioPlayer.muted = false;
    kidsEnergy.muted=false;
    document.getElementById('mute-button').innerHTML = 'Mute Sounds';
  }
};
let imgArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9'];
let section=document.getElementById('slider');
for(let a=0;a<imgArray.length;a++){
  let img=document.createElement('img');
  img.src=`./letters-numbers/${imgArray[a]}.png`;
  img.style.width='200px';
  img.style.height='200px';
  img.style.flex='0 0 auto';
  img.style.objectFit='cover';
  img.style.cursor='pointer';
  img.style.margin='5px';
  img.style.borderRadius='20px';
  img.style.overflow='hidden';
  img.style.transform='scale(.95)';
  img.style.transition='all .3s ';
  img.style.backgroundColor='#FFD823';
  img.onmouseover=function(){
    this.style.transform='scale(1.1)';
  };
  img.onmouseout=function(){
    this.style.transform='scale(.95)';
  };
  img.setAttribute('class','thumpnail');
  img.setAttribute('id',imgArray[a]);
  img.setAttribute('name',imgArray[a]);
  section.appendChild(img);
}
for(let x=0;x<imgArray.length;x++){
  let image=document.getElementById(imgArray[x]);
  image.onclick=function(){order(imgArray[x]);};}
function order(variable){setLetterSound(variable); runAudioPlayer();}
let thumpnail=document.getElementsByClassName('thumpnail');
let slider=document.getElementById('slider');
let buttonRight=document.getElementById('slide-right');
let buttonLeft=document.getElementById('slide-left');
buttonLeft.addEventListener('click',()=>{
  slider.scrollLeft-=125;
});
buttonRight.addEventListener('click',()=>{
  slider.scrollLeft+=125;
});

const maxScrollLeft=slider.scrollWidth-slider.clientWidth;
function autoPlay(){
  if(slider.scrollLeft>(maxScrollLeft-1)){
    slider.scrollLeft-=maxScrollLeft;
  }
  else{slider.scrollLeft+=1;}
}
let play=setInterval(autoPlay,50);
//pause the slider on hover
for(let i=0;i<thumpnail.length;i++){
  thumpnail[i].addEventListener('mouseover',()=>{
    clearInterval(play);
  });
  thumpnail[i].addEventListener('mouseout',()=>{
    return play=setInterval(autoPlay,50);
  });
}
