var canvas = document.getElementById('canvas'); //gGetting canvas id
if (canvas.getContext){
var qq = canvas.getContext('2d'); //DOCTYPE
}
else {
  document. write("Doesn't work!")
}
var wd=document.getElementById('canvas').offsetWidth;
var hg=document.getElementById('canvas').offsetHeight;

function rand(min,max){
i=Math.random()*(max-min)+min;
return (Math.round(i));
}

function newApple(){
apple=[rand(0,width),rand(0,height)];
}

qq.moveTo(30,30);
qq.lineTo(rand(0,400),rand(0,400));
qq.stroke();
