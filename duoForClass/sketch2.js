let can;let tD;let tChoice;
let tnine;
function setup(){
can=createCanvas(700,500);can.position(30,25);
can.class('bdd');//can.mousePressed(chgMouse);
start2();
tD=new logo(200,200,0);
tChoice=new logo(200,200,0);
tnine=new logo(650,450,-90);
textSize(20);

}

function draw(){

background(200,100,50);
rect(100,100,50,50);
chgRec();


duoPoly(tD,multvec[0],multvec[1],multvec[2],multvec[3],multvec[4]);
text("1st length "+multvec[0],30,400);
text("2ch length "+multvec[2],30,420);
text("1st angle "+multvec[1],30,440);
text("2cd angle "+multvec[3],30,460);

}

function chgMouse(){
mouseStx=mouseX;
mouseSty=mouseY;	
}

