let m1=[];let ang=0;
let ps=[];let vs=[];
function setup(){
	angleMode(DEGREES);
	can=createCanvas(900,500,WEBGL);
	can.position(25,25);
	can.class("bdd");
  for(let j=0;j<10;j++){
  ps[j]=createVector(20+random(300),10+random(200),0);
  vs[j]=createVector(-8+random(16),-10+random(20),-8+random(16));
  m1[j]=new move(ps[j],vs[j]);
	}
}
	
	function draw(){
		//text("working w git",50,50,0);
	background(200,200,200);
	
	for(let j=0;j<m1.length;j++){		
	m1[j].move();m1[j].chbdd();
	push();
	translate(m1[j].pos.x,m1[j].pos.y,m1[j].pos.z);
    rotateX(ang);//rotateY(ang);
    poly2(50,8);
	pop();
	ang+=1;
if(ang>360){ang=0;}	
	}
	}
	
	
