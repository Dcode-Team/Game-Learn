'use-strict';
let row1=document.getElementById('row1');
let row2=document.getElementById('row2');
let row3=document.getElementById('row3');
let row4=document.getElementById('row4');
let row5=document.getElementById('row5');
let row21=document.getElementById('row21');
let row22=document.getElementById('row22');
let row23=document.getElementById('row23');

let animals=['bear.png','cat.png','cow.png','dog.png','elephant.png','fox.png','frog.png','giraffe.png','lion.png','monkey.png','panda.jpg','polar-bear.png','tiger.png'];
let nameSound=['bear.mp3','cat.mp3','cow.mp3','dog.mp3','elephant.mp3','fox.mp3','frog.mp3','giraffe.mp3','lion.mp3','monkey.mp3','panda.mp3','polar-bear.mp3','tiger.mp3'];
let fruits=['apple.png','banana.png','blueberry.png','figs.png','grape.png','kiwi.png','orange.png','peach.png','pineapple.png','strowberry.png'];
let fruitsSound=['apple.mp3','banana.mp3','blueberry.mp3','fig.mp3','grape.mp3','kiwi.mp3','orange.mp3','peach.mp3','pineapple.mp3','strawberry.mp3'];


let d=[0,1,2,3,4,5,6,7,8,9,10,11,12];
let f=[0,1,2,3,4,5,6,7,8,9];

function Animals(name,sound){
  this.name=name.split('.')[0];
  this.imagePath='./img/kids/animals/'+name;
  this.nameSoundPath='./audios/animal-name-audio/'+sound;
  this.animalSoundPath='./audios/animals-sound-audio/'+sound;
  Animals.all.push(this);

}
Animals.all=[];

for (let index = 0; index < animals.length; index++) {
  new Animals(animals[index],nameSound[index]);

}
Animals.prototype.rendur1 = function(index){
  let colElement=document.createElement('div');
  let picElement=document.createElement('img');
  let NameH=document.createElement('h4');
  let btn1=document.createElement('button');
  let btn2=document.createElement('button');
  btn1.textContent='sound';
  btn2.textContent='Name';
  colElement.appendChild(btn1);
  colElement.appendChild(btn2);


  NameH.textContent=this.name;
  colElement.appendChild(NameH);
  if(index < 3){
    row1.appendChild(colElement);
    picElement.src=this.imagePath;
    colElement.appendChild(picElement);


  }else if(index >=3 && index<6){
    row2.appendChild(colElement);
    picElement.src=this.imagePath;
    colElement.appendChild(picElement);

  }else if(index >=6 && index <9){
    row3.appendChild(colElement);
    picElement.src=this.imagePath;
    colElement.appendChild(picElement);

  }
  else if(index>=9 && index<12){

    row4.appendChild(colElement);
    picElement.src=this.imagePath;
    colElement.appendChild(picElement);

  }
  else{
    row5.appendChild(colElement);
    picElement.src=this.imagePath;
    colElement.appendChild(picElement);
  }
  let aduioSound=document.createElement('audio');
  colElement.appendChild(aduioSound);
  aduioSound.src=this.nameSoundPath;

  let aduioSound2=document.createElement('audio');
  colElement.appendChild(aduioSound2);
  aduioSound2.src=this.animalSoundPath;
  btn2.addEventListener('click',function(){

    aduioSound.play();

  });
  btn1.addEventListener('click',function(){

    aduioSound2.play();

  });


};


function Fruits(name,sound){
  this.name=name.split('.')[0];
  this.imageSource='./img/fruits/'+name;
  this.soundSource='./audios/fruits-sound/'+sound;
  Fruits.all.push(this);
}
Fruits.all=[];

for (let index = 0; index < fruits.length; index++) {
  new Fruits(fruits[index],fruitsSound[index]);

}
console.log(Fruits.all);
Fruits.prototype.rendur1 = function(index){
  let colElement=document.createElement('div');
  let picElement=document.createElement('img');
  let NameH=document.createElement('h4');

  // let btn=document.createElement('button');

  // btn.textContent='Name';

  // colElement.appendChild(btn);

  NameH.textContent=this.name;
  colElement.appendChild(NameH);
  if(index < 3){
    row21.appendChild(colElement);
    picElement.src=this.imageSource;
    colElement.appendChild(picElement);

  }else if(index >=3 && index<6){
    row22.appendChild(colElement);
    picElement.src=this.imageSource;
    colElement.appendChild(picElement);

  }else if(index >=6 && index <9){
    row23.appendChild(colElement);
    picElement.src=this.imageSource;
    colElement.appendChild(picElement);

  }

  let aduioSound=document.createElement('audio');
  colElement.appendChild(aduioSound);
  aduioSound.src=this.soundSource;

  picElement.addEventListener('click',function(){

    aduioSound.play();

  });


};
shuffle(f);
for (let i=0;i<Fruits.all.length;i++){

  Fruits.all[f[i]].rendur1(i);
}

shuffle(d);
for (let i=0;i<Animals.all.length;i++){

  Animals.all[d[i]].rendur1(i);
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
