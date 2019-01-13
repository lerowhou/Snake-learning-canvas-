var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var size = 500;
var score = document.querySelector("#score");
var stat = 0;
canvas.width  = size;
canvas.height = size;
const STEP = 50;
x=y=0;
xx=x+STEP;
yy=y+STEP;
let snake;
window.onload=function(){
  document.addEventListener("keydown", keyPress)
  snake= new Snake();
  setInterval(game,1000/10);
  }

function game(){
  score.innerHTML = "Your score is: " + stat;
  snake.snakeDraw();
  if (snake.y>size){
    snake.y=0;
  }
  else if (snake.x>size){
    snake.x=0;
  }
  else if (snake.y<0){
    snake.y=size;
  }
  else if (snake.x<0){
    snake.x=size;
 }
}

function keyPress(evt) {
    switch(evt.keyCode) {
        case 37:
            //snake.x=snake.x-STEP;
            snake.move(-STEP,0);
            break;
        case 38:
            //snake.y=snake.y-STEP;
            snake.move(0,-STEP);
            break;
        case 39:
            //snake.x=snake.x+STEP;
            snake.move(STEP,0);
            break;
        case 40:
            //snake.y=snake.y+STEP;
            snake.move(0,STEP);
            break;
    }
}
