
let var1=100;let n=4;
function get_String() {
  //alert("You pressed a key inside the input field");
  let var4=document.getElementById("demo").value;
  
  var1=var4;
  document.getElementById("p1").innerHTML=var1;
  
  }

function get_Slider(){
	 var1=document.getElementById("slid").valueAsNumber;
 }
	
function changebk(){	
n=floor(random(10))+3;
}
let ct=0;
function chgBg(){
let bod=select('#bd1');
if(ct%2==0){bod.style('background-color','green');}
if(ct%2==1){bod.style('background-color','pink');}
ct++;
let chec=document.getElementById("p2").innerHTML=ct%2;
}	