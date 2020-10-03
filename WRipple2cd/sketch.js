let test=30;

function setup(){
	startup();
	can=createCanvas(1000,600);
	can.position(100,40);
	can.class("bdd");
	can.mousePressed(startR);
}
	
function draw() {
  loadPixels();
  for(let j=1;j<yTotal-1;j++){
	  for(let i=1;i<xTotal-1;i++){
  curr[i][j]=(prev[i-1][j-1]+prev[i+1][j-1]+
   prev[i-1][j+1]+prev[i+1][j+1])/2-curr[i][j];let index=(i+j*xTotal)*4;
curr[i][j]=curr[i][j]*damp; //let c=color(250*curr[i][j],50*curr[i][j],0);
pixels[index]=250*curr[i][j]%250;
pixels[index+1]=50*curr[i][j]%250;
pixels[index+2]=0;
  pixels[index+3]=250;}}
updatePixels();
  //noStroke();fill(c);rect(i,j,1,1);
  
//temp=prev;prev=curr;curr=temp;
prev=curr;
text(test,40,40);
noStroke();
fill(250,0,0);
rect(50,50,20,20);
}

function startR(){
curr[mouseX][mouseY]=150;
}

function keyPressed(){
if(key=='a'){noLoop();}else{loop();}
}