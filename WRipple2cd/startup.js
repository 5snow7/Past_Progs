let can,c;
let prev=[];let temp=[];
let curr=[];let damp;let par;
let xTotal=1000;let yTotal=600;//is the columns and the 
//first number from the left in the array.
function startup() {
  
  for(let j=0;j<xTotal;j++){
  prev[j]=[];curr[j]=[];}
 for(let j=0;j<xTotal;j++){
	 for(let k=0;k<yTotal;k++){
	prev[j][k]=100;
    curr[j][k]=100;	
	 }}
 
 
  damp=0.995; prev[100][100]=350; 

}

