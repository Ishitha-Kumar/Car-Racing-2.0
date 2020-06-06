var canvas,backgroundImg,playerCount,database,form,game,player;
var gameState= 0;

function setup(){
    database = firebase.database();
    createCanvas(400,400);
   game=new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");
  
    
    
}
