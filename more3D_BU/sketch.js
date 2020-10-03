let r=20;let ptest;
let txy,t;let num1=30,len1=80,num2=30,len2=15;
function setup(){
	//ptest=select("#par1");ptest.style('border-style','dashed');
	can=createCanvas(800,600,WEBGL);
	can.position(24,25);
	can.class("bdd");
    
	frameRate(r);
	t=new logoXY(0,0,0);
	strokeWeight(.5);
	}
	
	let ang=0;
	let red=100;green=100;
	function draw(){
	//if(frameCount%20==0){ptest.position(900+floor(random())*20,50+floor(random()*30));}
	background(red,green,100);
	//push();rotateY(ang*PI/15);box(40);ang++;poly(txy,12,40);}pop();	
	ang++;
	switch(ch%2){
	case 0:	push();rotateY(ang*PI/15);translate(-200,0,0);lines(num2,len2,t);pop();break;
	case 1: push();rotateX(ang*PI/15);translate(-50,-200,0);logoPtsXY(num1,len1,t);pop();break;
	}
	}