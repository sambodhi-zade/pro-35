//Create variables here
var dog,dogImg,happyDogImg,database,foodS,foodStock
function preload()
{
  dogImg = loadImage("Dog.png");
  happyDogImg = loadImage("happydog.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database= firebase.database()
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(10);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  
  background("skyblue");

  if(foodS!== undefined){
  textSize(20);
  fill("red")
  text("Note: Press UP_ARROW Key to feed DRAGO milk",30,50);
  text("Food Remaining = " + foodS , 150,150);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  if(keyWentDown(UP_ARROW)){
    dog.addImage(dogImg);
  }

  if(foodS === 9){
   dog.addImage(happyDogImg);
  }

  if(foodS === 7){
    dog.addImage(happyDogImg);
   }
   if(foodS === 5){
    dog.addImage(happyDogImg);
   }
   if(foodS === 3){
    dog.addImage(happyDogImg);
   }
   if(foodS === 1){
    dog.addImage(happyDogImg);
   }

  drawSprites();
}
}



function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  })
}

function readStock(data){
  foodS=data.val();
}




