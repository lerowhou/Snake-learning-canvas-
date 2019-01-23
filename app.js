var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var size = 500;
const STEP = size/10;
canvas.width = size;
canvas.height = size;
let snake;
var q = 0;
var w = 0;

window.onload = function(){
  window.addEventListener('keydown', keyPress);
  snake = new Snake();
  setInterval(game,100);
}

function game(){
  snake.show();
  snake.move(q,w);
  if (snake.x > size){
    snake.x= 0;
  }
  else if (snake.y > size) {
    snake.y = 0;
  }
  else if (snake.y < 0) {
    snake.y = size;
  }
  else if (snake.x < 0) {
    snake.x = size;
  }
}

function keyPress(event){
  if(event.keyCode==37){
    snake.move(-1,0);
  }
  else if (event.keyCode==38) {
    snake.move(0,-1);
  }
  else if (event.keyCode==39) {
    snake.move(1,0);
  }
  else if (event.keyCode==40) {
    snake.move(0,1);
  }
}
