let can;

function setup(){
	start();
	angleMode(DEGREES);
	can=createCanvas(800,500,WEBGL);
	can.position(25,25);
	can.class("bdd");
	
	}
	let ang=95;let x=0;
	function draw(){
		x=s3D[0].righ.x;
	x=20*x;
	background(200,200,0);
	//rotateY(30);rotateX(30);box(30,30,30,);
	s3D[0].showS(0);

	for(let j=0;j<s3D.length;j++){s3D[j].showS(j);}
	/*stroke(250,0,0);line(0,0,0,300,0,0);
	stroke(0,250,0);line(0,0,0,0,300,0);
    stroke(0,0,250);line(-100,0,0,0,0,300);	
	*/
	box(x,30,30);

	}