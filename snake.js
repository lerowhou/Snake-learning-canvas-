class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xx = this.x+STEP;
    this.yy = this.y+STEP;
  }
  show(){
    ctx.clearRect(0,0,size,size);
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.xx, this.yy);
    ctx.closePath();
  }
  move(q,w){
    this.x+=(STEP*q);
    this.y+=(STEP*w);
  }
}
