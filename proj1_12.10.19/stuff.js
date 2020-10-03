let xc=0;
function one(){ch=1;}
function two(){ch=2;}
function three(){ch=3;}
function four(){ch=4;}

function vert(){
 let xc=[];let yc=[];
 t.set1(width/2,50,0);
  for(let j=0;j<wd;j=j+1){
   xc[j]=t.xpos();yc[j]=t.ypos();
    t.fd(50);t.rt(360/wd);
 }
  for(let j=0;j<wd;j=j+1){
   for(let k=0;k<wd;k=k+1){
line(xc[k],yc[k],xc[j],yc[j]);
  }
  }  
}

function text1(){
	wd=document.getElementById("input1").value; 
}

function text2(){
	let strAr=[];
let string1=document.getElementById("input2").value;
  strAr=string1.split(',');//str="";
  len1=strAr[0];ang=strAr[1];
  num1=strAr[2];
 
}

function lds(){
let x1=[];let y1=[];let t1=new logo(200,200,0);
  
  for(let j=0;j<num1;j=j+1){
   t1.fd(len1);x1[j]=t1.xpos();y1[j]=t1.ypos(); 
  }
t1.bk(len1*num1);t1.rt(ang);
  let x2=[];let y2=[];
  for(let j=0;j<num1;j=j+1){
  t1.fd(len1);x2[j]=t1.xpos();y2[j]=t1.ypos();  
  }
t1.bk(len1*num1);t1.lt(ang);
  for(let j=0;j<num1;j=j+1){
   line(x1[num1-1-j],y1[num1-1-j],x2[j],y2[j]); 
  }
  
}

function cirs(){
for(let j=1;j<20;j=j+1){
ellipse(width/2,height/2,400-20*j,200-25*j);
}	
	
}

function slid1(){
	ang=document.getElementById("slider1").value; 
}

function sq1(tp,len){
tp.fd(len);tp.rt(90);tp.fd(len);tp.rt(90);	
tp.fd(len);tp.rt(90);tp.fd(len);tp.rt(90);	
}

function manysqs(tp){
	for(let j=1;j<10;j=j+1){
	sq1(tp,j*10);	
	}}
	
function pic(){
cntA++;	pic1();
}

function picst(){

	for(let j=0;j<4;j++){
		pics[j]=document.getElementById("img"+j);
			pics[j].style.width="2px";pics[j].style.height="2px";
	      pics[j].style.border="style:double;";
	      pics[j].style.border="width:10px;";
	}}
			
function pic1(){
	for(let j=0;j<4;j++){
		pics[j].style.width="2px";pics[j].style.height="2px";
	if(cntA%4==j){
		pics[j].style.width="300px";pics[j].style.height="200px";
	document.getElementById("par1").innerHTML="pic"+(j-1)+" and clicked  "+cntA+" times and mod # is "+(cntA%4-1);
	}}
}

function getX(event){
	xc=event.clientX;
	document.getElementById("xcor").innerHTML=xc;
	let testpar=document.getElementById("testmov");
	xc=xc-200;
    testpar.style.left=xc+"px";
}

