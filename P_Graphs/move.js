function math_sq(x){
	return x*x;
}

class move{

constructor(pos,vel,acc){
this.pos=pos;this.origacc=acc;this.vel=vel;this.acc=acc;
this.left=createVector(-1*width/2,0,0);
this.topp=createVector(0,-1*height/2,0);
this.back=createVector(0,0,100);
this.total=createVector(0,0,0);
}

drive(){
//this.acc=this.origacc;
this.vel.add(this.acc);
this.pos.add(this.vel);	
this.acc.mult(0);

}

force(sc){
		let f1=p5.Vector.sub(this.pos,left);let f2=p5.Vector.sub(this.pos,topp);
	let f3=p5.Vector.sub(this.pos,back);
	let l1=f1.magSq();let l2=f2.magSq();let l3=f3.magSq();
	f1.normalize();f2.normalize();f3.normalize();
	f1.div(l1);f2.div(l2);f3.div(l3);
	let total=p5.Vector.add(f1,f2);total=total.add(f3);
	total.mult(sc);this.acc.add(total);
}

chbdd(){
if(this.pos.x<-1*width/2||this.pos.x>width/2){this.vel.x=-1*this.vel.x;}	
if(this.pos.y<-1*height/2||this.pos.y>height/2){this.vel.y=-1*this.vel.y;}
if(this.pos.z<-100||this.pos.z>100){this.vel.z=-1*this.vel.z;}
}

display(){
push();translate(this.pos.x,this.pos.y,this.pos.z);
sphere(20);pop();	
}

force2(sc){
this.acc=this.origacc;

let new_left=p5.Vector.sub(this.pos,this.left);
let sqleft=new_left.magSq();

sqleft=constrain(sqleft,10,150);
let fleft=sc/sqleft;
new_left.normalize();new_left.mult(fleft);

let new_topp=p5.Vector.sub(this.pos,this.topp);
let sqtopp=new_topp.magSq();

sqtopp=constrain(sqtopp,10,150);
let ftopp=sc/sqtopp;
new_topp.normalize();new_topp.mult(ftopp);
	
let new_back=p5.Vector.sub(this.pos,this.back);
let sqback=new_back.magSq();

sqback=constrain(sqback,10,150);
let fback=sc/sqback;
new_back.normalize();new_back.mult(fback);

 this.total=p5.Vector.add(new_left,new_topp);
this.total.add(new_back);
this.acc.add(this.total);
//par.html(this.total+" xpart ");
//this.total.mult(0);
}

dist1(ball){
return dist(this.pos.x,this.pos.y,this.pos.z,ball.pos.x,ball.pos.y,ball.pos.z);
}


}//end of class

function moveAr(balls){
for(let j=0;j<balls.length;j++){
balls[j].drive();balls[j].chbdd();balls[j].display();
}	
}
let amt=0;
function coll(ar1,ar2){
	for(let j=0;j<ar1.length;j++){
	for(let k=0;k<ar2.length;k++){
		if(j!=k){
     amt=ar1[j].dist1(ar2[k]);par.html(amt);
	if(amt<20){ar1.splice(j,1);ar1.splice(k,1);}
	}}}}
	
	