//just a line

class sier3D{

constructor(leftst,middlest,rightst,toppst){//4 corners of starting tetrahedron
this.righ=rightst;
this.left=leftst;
this.middle=middlest;
this.topp=toppst;

this.leftbot=createVector(0,0,0);this.lefttop=createVector(0,0,0);
this.rightbot=createVector(0,0,0);this.righttop=createVector(0,0,0);
this.middlebot=createVector(0,0,0);this.middletop=createVector(0,0,0);

p5.Vector.sub(this.middle,this.left,this.leftbot);this.leftbot.mult(.5);
p5.Vector.add(this.left,this.leftbot,this.leftbot);

p5.Vector.sub(this.topp,this.left,this.lefttop);this.lefttop.mult(.5);
p5.Vector.add(this.left,this.lefttop,this.lefttop);

p5.Vector.sub(this.middle,this.righ,this.rightbot);this.rightbot.mult(.5);
p5.Vector.add(this.righ,this.rightbot,this.rightbot);

p5.Vector.sub(this.topp,this.righ,this.righttop);this.righttop.mult(.5);
p5.Vector.add(this.righ,this.righttop,this.righttop);

p5.Vector.sub(this.righ,this.left,this.middlebot);this.middlebot.mult(.5);
p5.Vector.add(this.left,this.middlebot,this.middlebot);

p5.Vector.sub(this.topp,this.middle,this.middletop);this.middlebot.mult(.5);
p5.Vector.add(this.middle,this.middlebot,this.middletop);

}	

show(){
line(this.middle.x,this.middle.y,this.middle.z,this.left.x,this.left.y,this.left.z);	
line(this.middle.x,this.middle.y,this.middle.z,this.topp.x,this.topp.y,this.topp.z);//this.righ.x,this.righ.y,this.righ.z);
//line(this.righ.x,this.righ.y,this.righ.z,this.left.x,this.left.y,this.left.z);

line(this.middle.x,this.middle.y,this.middle.z,this.topp.x,this.topp.y,this.topp.z);	
line(this.left.x,this.left.y,this.left.z,this.topp.x,this.topp.y,this.topp.z);
//line(this.righ.x,this.righ.y,this.righ.z,this.topp.x,this.topp.y,this.topp.z);
line(this.rightbot.x,this.rightbot.y,this.rightbot.z,this.topp.x,this.topp.y,this.topp.z);
line(this.righttop.x,this.righttop.y,this.righttop.z,this.topp.x,this.topp.y,this.topp.z);

}

showS(j){
let s=j%3;//floor(random(3));
switch(s){
	case 0:fill(250,0,0);break;
	case 1:fill(0,250,0);break;
	case 2:fill(0,0,250);break;
}
beginShape();
vertex(this.left.x,this.left.y,this.left.z);
vertex(this.middle.x,this.middle.y,this.middle.z);
vertex(this.righ.x,this.righ.y,this.righ.z);
vertex(this.rightbot.x,this.rightbot.y,this.rightbot.z);//not what i want
vertex(this.topp.x,this.topp.y,this.topp.z);
endShape(CLOSE);
}

}

function genSier3D() {
let next=[];
  
for(let j=0;j<s3D.length;j++){
next.push(new sier3D(s3D[j].left,s3D[j].leftbot,s3D[j].middlebot,s3D[j].lefttop));
next.push(new sier3D(s3D[j].leftbot,s3D[j].middle,s3D[j].rightbot,s3D[j].middletop));
next.push(new sier3D(s3D[j].middlebot,s3D[j].rightbot,s3D[j].righ,s3D[j].righttop));
next.push(new sier3D(s3D[j].lefttop,s3D[j].middletop,s3D[j].rigthtop,s3D[j].topp));
}
s3D=next; 
}
