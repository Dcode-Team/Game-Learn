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
