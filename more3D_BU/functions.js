let str;let ar=[];
let cnt=0,ch=0;
function poly(t,n,len){
	for(let j=0;j<n;j++){
t.fd(len);t.rt(360/n);	}}


function chgRate(){r++;frameRate(r);
document.getElementById("whatisR").innerHTML=r;}

function info(){
	 str=document.getElementById("inp1").value;
	
	ar=str.split(',');
	document.getElementById("par1").innerHTML=ar[0];
	document.getElementById("par2").innerHTML=ar[1];
	document.getElementById("par3").innerHTML=ar[2];
	document.getElementById("par4").innerHTML=ar[3];
	num1=floor(ar[0]);len1=floor(ar[1]);num2=floor(ar[2]);
	len2=floor(ar[3]);
	//r=random(floor(50));
	//frameRate(r);
	}
	
	function chgImage(){
		switch(cnt%2){
		case 0:document.getElementById("but2").value="origImage";ch=0;
		break;
		case 1:document.getElementById("but2").value="newImage";ch=1;
		break;
		}
		cnt++;
		}
		
	function chgbk(){
		red=250;green=50;
	}
	
	function chgback(){
	red=100;green=200;	
	}