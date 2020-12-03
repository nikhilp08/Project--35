//Create variables here

var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogIMG;
var happyDogIMG;
var feed, addFood, foodObject;

function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png")
	happyDogIMG = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(1000, 400);

  database = firebase.database();
  
  dog = createSprite(800,200,150,150);
  dog.addImage(dogIMG);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  foodObject = new Food(); 

  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  
}


function draw() {  

  background("blue");

  foodObject.display();
  
  drawSprites();
  //add styles here

  

}

function readStock(data){
  foodS = data.val();
  foodObject.updateFoodStock(foodS);
}

function feedDog(){
  dog.addImage(happyDogIMG);
  foodObject.updateFoodStock(foodObject.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObject.getFoodStock()
  })
}

function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}


