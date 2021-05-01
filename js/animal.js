let animals=['bear.jpg','cat.png','cow.jpg','dog.png','elephant.png','fox.png','frog.png','giraffe.png','lion.jpg','monkey.png','panda.jpg','polar-bear.png','tiger.jpg'];
let nameSound=['bear.mp3','cat.mp3','cow.mp3','dog.mp3','elephant.mp3','fox.mp3','frog.mp3','giraffe.mp3','lion.mp3','monkey.mp3','panda.mp3','polar-bear.mp3','tiger.mp3'];
function Animals(name,sound){
  this.name=name.splice('.')[0];
  this.imagePath='./img/kids/animals/'+name;
  this.nameSoundPath='./audios/animal-name-audio/'+sound;
  this.animalSoundPath='./audios/animal-sound-audio/'+sound;

}
