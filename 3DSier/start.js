
let left,middle,right,topp;
let s3D=[];
function start(){
	left=createVector(-300,0,0);
	middle=createVector(0,0,-300);
	right=createVector(3,2,2);
	topp=createVector(0,-300,0);
	
	s3D.push(new sier3D(left,middle,right,topp));
    genSier3D();
	//genSier3D();
	//can.mousePressed(makeMore);

}

