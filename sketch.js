//Create variables here
var dog, dogImg, happyDog, happyDogImg, database, foodS, foodStock
function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000,1000);
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  dog = createSprite(500,750,20,20)
  dog.addImage(dogImg)
  dog.scale = 0.3
}


function draw() {  
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg);
  }
  //add styles here
  textSize(20);
  fill("black")
  text("Food remaining "+foodS,500,200)
  drawSprites();
}
function readStock(data){
  foodS = data.val()
}
function writeStock(x){
 
  if(x<=0){
    x=0
  }else{ x=x-1 }
  database.ref('/').update({
    Food:x
  })
}




