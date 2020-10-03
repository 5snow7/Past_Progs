let ptA=[];

function paraB(n){

for(let j=0;j<=2*n;j++){ptA[j]=[];}

for(let j=0;j<=2*n;j++){
ptA[j]=[-n+j,.05*(-n+j)*(-n+j),0];ptA[j]=ptA[j].map(x=>6*x);
}	

for(let j=0;j<=n;j++){
line(ptA[j][0],ptA[j][1],ptA[j][2],ptA[n+j][0],ptA[n+j][1],ptA[n+j][2]);
}}

function logoPtsXZ(n,len,t){
	for(let j=0;j<n;j++){pts[j]=[];}
	for(let j=0;j<n;j++){t.fd(len);t.rt(360/n);
	xch=t.xpos();ych=t.ypos();
	pts[j].push(xch);pts[j].push(0);pts[j].push(ych);	
	}
for(let j=0;j<n;j++){
for(let k=0;k<n;k++){
	line(pts[j][0],pts[j][1],pts[j][2],pts[k][0],pts[k][1],pts[k][2]);
}}	
}

function logoPtsXY(n,len,t){
	for(let j=0;j<n;j++){pts[j]=[];}
	for(let j=0;j<n;j++){t.fd(len);t.rt(360/n);
	xch=t.xpos();ych=t.ypos();
	pts[j].push(xch);pts[j].push(ych);pts[j].push(0);	
	}
for(let j=0;j<n;j++){
for(let k=0;k<n;k++){
	line(pts[j][0],pts[j][1],pts[j][2],pts[k][0],pts[k][1],pts[k][2]);
}}	
}
