
let lin=[];
let pts=[];

function lines(n,len,t1){
for(let j=0;j<2*n+1;j++){lin[j]=[];}

for(let j=0;j<n;j++){
t1.lt(3);t1.fd(len);
xch=t1.xpos();ych=t1.ypos();
lin[j].push(xch);lin[j].push(ych);
lin[j].push(0);}
for(let j=0;j<n;j++){
t1.bk(len);t1.rt(3);
}
t1.rt(90);
for(let j=n+1;j<2*n+1;j++){
t1.lt(3);t1.fd(len);
xch=t1.xpos();ych=t1.ypos();
lin[j].push(xch);lin[j].push(ych);
lin[j].push(0);}
for(let j=0;j<n;j++){
t1.bk(len);t1.rt(3);	
}
t1.lt(90);
	for(let j=0;j<n;j++){
	line(lin[n-j-1][0],lin[n-j-1][1],lin[n-j-1][2],lin[n+1+j][0],lin[n+1+j][1],lin[n+1+j][2]);
	}
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
