let txy,txz,txy2,angl1;let par;
let pts=[];let b;let pos,vel,acc;
let choice=0;let objs=[];

function setup(){
	par=createP('amt of total');par.position(100,0);
	can=createCanvas(1000,500,WEBGL);
	can.position(25,25);
	can.class("bdd");
    strokeWeight(.8);
    frameRate(30);
	txy=new logo3DXY(00,-100,0);
	txy2=new logo3DXY(00,00,0);
    txz=new logo3DXZ(00,-100,0);
	txy.bk(25);//txz.bk(25);
	pos=createVector(0,0,0);vel=createVector(2,3,1);
	acc=createVector(0,3,0);
	b=new move(pos,vel,acc);
	for(let j=0;j<40;j++){
objs.push(new move(createVector(-400+random(800),-300+random(600),random(100)),createVector(random(5),random(4),random(4)),createVector(-1,1,.5)));
	}

}//end of setup
	angl1=0;
	
	function draw(){
	background(200,200,0);
	line(-1*width/2,-1*height/2,-100,width/2,-1*height/2,-100);
	switch(choice){
	case 1:
	b.force2(10);b.drive();b.chbdd();b.display();
	//par.html(document.getElementById("b_one").value);
	break;
	case 2:
	push();rotateY(angl1*PI/16);logoPtsXY(16,50,txy);pop();
	push();rotateX(angl1*PI/16);logoPtsXZ(16,50,txz);pop();
	angl1++
	break;
	case 3:
	txz.poly(100,8);
	push();translate(0,-200,0);rotateY(angl1*PI/16);paraB(45);pop();	
	angl1++;
	break;
	case 4:
	moveAr(objs);coll(objs,objs);
	break;
	case 5:rotateX(angl1*PI/12);angl1++;
	txy2.fd(30);txy2.rt(90);txy2.fd(30);txy2.rt(90);
	txy2.fd(30);txy2.rt(90);txy2.fd(30);txy2.rt(90);
	txy.poly(100,8);
	par.html("in case 5 now");
	break;
	}
	
	}//end of draw
	
function chgFrame1(){choice=1;}
function chgFrame2(){choice=2;}
function chgFrame3(){choice=3;}
function chgFrame4(){choice=4;setup();}
function chgFrame5(){choice=5;}