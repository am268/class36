var canvas, backgroundIMg;
var gameState=0;
var PlayerCount;
var database,form,player,game;

function setup(){
    canvas=createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();

}

function draw(){
    

}
