let t;
let can;let pa;
function setup(){
	can=createCanvas(800,400);
	can.position(300,100);
    t=new logo(width/2,height/2,0);
	pa=select('#p2');pa.position(800,10);
	frameRate(10);
}
	
function draw(){
background(200,(200*n)%250,0);
text(var1,30,30);
poly2(t,var1);t.rt(10);
}

function poly2(t,len){
for(let j=0;j<n;j++){
	t.fd(len);t.rt(360/n);
}
}

