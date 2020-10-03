let x1=2,x2=2,x3=2,x4=2,x5=2,x6=2,x7=2,x8=2,x9=2;
let y1=2,y2=2,y3=2,y4=2,y5=2,y6=2,y7=2,y8=2,y9=2;

function winner(){
if(x1==1&&x2==1&&x3==1){
	document.getElementById("win").innerHTML="X is the Winner";
}
if(x4==1&&x5==1&&x6==1){
	document.getElementById("win").innerHTML="X is the Winner";
}
if(x7==1&&x8==1&&x9==1){
	document.getElementById("win").innerHTML="X is the Winner";
}
if(x1==1&&x4==1&&x7==1){
	document.getElementById("win").innerHTML="X is the Winner";
}
if(x3==1&&x5==1&&x8==1){
	document.getElementById("win").innerHTML="X is the Winner";
}
if(x4==1&&x6==1&&x9==1){
	document.getElementById("win").innerHTML="X is the Winner";
}
if(x1==1&&x5==1&&x9==1){
	document.getElementById("win").innerHTML="X is the Winner";
}
if(x3==1&&x5==1&&x7==1){
	document.getElementById("win").innerHTML="X is the Winner";
}

}