
let v,i,j;
let vees=[];let vs,ve,v1;

function setup(){
	//can=createCanvas(windowWidth-400,windowHeight-10);
	can=createCanvas(800,600,WEBGL);
	can.position(250,25);
	can.class("bdd");
    //vs=createVector(width/2,height-100);ve=createVector(width/2,height-250);
	vs=createVector(-100,100,150);ve=createVector(0,0,-100);
	strokeWeight(.5);
	v1=new vclass(vs,ve);vees.push(v1);
   //translate(400,300,0); 
   
	}
	let ang=0;
	function draw(){
	background(200,200,0);
	//push();translate(100,100,0);rotateY(ang);sphere(20);pop();
	for(let j=0;j<vees.length;j++){vees[j].show();	}
	ang+=1;
	//line(00,0,0,400,400,0);
	}
	
function addL(){genV();}	
	
	