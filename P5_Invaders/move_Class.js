class object{

constructor(x,y,xsp,ysp){this.pic=createImg('pic3_for_App.jpg');
this.pos=createVector(x,y);this.pic.style('width','40px');
this.vel=createVector(xsp,ysp);this.pic.style('height','40px');
this.acc=createVector(0,.1);
}
///edit
 move(){
this.vel.add(this.acc);
this.pos.add(this.vel);
} 

 chbd(){
if(this.pos.x<0||this.pos.x>windowWidth){
this.vel.x=-1*this.vel.x;}
if(this.pos.y<0||this.pos.y>windowHeight){
this.vel.y=-1*this.vel.y;}
}

display(){
fill(200,200,0);strokeWeight(3);stroke(0,200,200);
this.pic.position(this.pos.x,this.pos.y);
}
}
