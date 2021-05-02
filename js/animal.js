let row1=document.getElementById('row1');
let row2=document.getElementById('row2');
let row3=document.getElementById('row3');
let row4=document.getElementById('row4');
let row5=document.getElementById('row5');

let animals=['bear.jpg','cat.png','cow.jpg','dog.png','elephant.png','fox.png','frog.png','giraffe.png','lion.jpg','monkey.png','panda.jpg','polar-bear.png','tiger.jpg'];
let nameSound=['bear.mp3','cat.mp3','cow.mp3','dog.mp3','elephant.mp3','fox.mp3','frog.mp3','giraffe.mp3','lion.mp3','monkey.mp3','panda.mp3','polar-bear.mp3','tiger.mp3'];
let first=0;
let second=0;
let third=0;
let forth=0;
let d=[0];
let i=0;

function Animals(name,sound){
  this.name=name.split('.')[0];
  this.imagePath='./img/kids/animals/'+name;
  this.nameSoundPath='./audios/animal-name-audio/'+sound;
  this.animalSoundPath='./audios/animal-sound-audio/'+sound;
  Animals.all.push(this);

}
Animals.all=[];

for (let index = 0; index < animals.length; index++) {
  let newAnimal=new Animals(animals[index],nameSound[index]);
  
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
for (let i=0;i<Animals.all.length;i++){
  Animals.all[i].rendur1(i);
}
Animals.prototype.rendur2=function(){

  randomindex();
  let colElement=document.createElement('div');
  row2.appendChild(colElement);
  let picElement=document.createElement('img');
  picElement.src=Animals.all[forth].imagePath;
  colElement.appendChild(picElement);
  let button1=document.createElement('button');
  button1.textContent=Animals.all[first].name;
  colElement.appendChild(button1);
  let button2=document.createElement('button');
  button2.textContent=Animals.all[second].name;
  colElement.appendChild(button2);
  let button3=document.createElement('button');
  button3.textContent=Animals.all[third].name;
  colElement.appendChild(button3);

};
Animals.prototype.rendur3=function(){

  randomindex();
  let colElement=document.createElement('div');
  row3.appendChild(colElement);
  let picElement=document.createElement('img');
  picElement.src=Animals.all[forth].imagePath;
  colElement.appendChild(picElement);
  let button1=document.createElement('button');
  button1.textContent=Animals.all[first].name;
  colElement.appendChild(button1);
  let button2=document.createElement('button');
  button2.textContent=Animals.all[second].name;
  colElement.appendChild(button2);
  let button3=document.createElement('button');
  button3.textContent=Animals.all[third].name;
  colElement.appendChild(button3);

};
console.log(Animals.all);

/* for (let index = 0; index < 3; index++) {


  Animals.all[i].rendur1();
  Animals.all[i].rendur2();
  Animals.all[i].rendur3();
}
 */

function randomindex(){

  do{
    first=getRandomInt(0,animals.length-1);
    second=getRandomInt(0,animals.length-1);
    third=getRandomInt(0,animals.length-1);
    for (let e = 0; e < d.length; e++) {
      while(forth===d[e]){
        forth=getRandomInt(0,animals.length-1);
      }
    }}while((first===second || first===third || second===third)||(forth!==first&&forth!==second&&forth!==third));

  d.push(forth);
  console.log(d);
}




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
