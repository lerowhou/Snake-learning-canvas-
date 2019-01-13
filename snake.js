class Snake{
  constructor(){
    this.x=0;
    this.y=0;
    this.sx=STEP;
    this.sy=0;
  }
  move(xdr,ydr){
    this.x=this.x+xdr;
    this.y=this.y+ydr;
  }
  snakeDraw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(this.x,this.y,xx,yy);
  ctx.closePath();
}
}
