let ch=0;let t;let wd=8;let tur;
let ang=60;let len1=10;let num1=20;
let cntA=0;
let pics=[];
function setup() {
  //createCanvas(600, 450);
t=new logo(200,100,0);
tur=new logo(100,200,0);
  picst();
}

function draw() {

 if(ch==1){background(220,0,0);vert();}
  if(ch==2){background(20,250,50);lds();}
  if(ch==3){background(20,200,200);cirs();}
  if(ch==4){background(0,0,250);manysqs(tur);}

}

  
  


  
  

