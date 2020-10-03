function polyXY(len,n){
		fill(200,0,0);
		beginShape();
		for(let j=0;j<n;j++){
	vertex(len*cos(360/n*j),len*sin(360/n*j),0);}
	endShape(CLOSE);
	}
	
	function polyXZ(len,n){
		fill(0,200,0);
		beginShape();
		for(let j=0;j<n;j++){
	vertex(len*cos(360/n*j),0,len*sin(360/n*j));}
	endShape(CLOSE);
	}
	
	function polyYZ(len,n){
		fill(0,0,200);
		beginShape();
		for(let j=0;j<n;j++){
	vertex(0,len*cos(360/n*j),len*sin(360/n*j));}
	endShape(CLOSE);
	}
	
	function poly(len,n){
polyXY(len,n);polyXZ(len,n);polyYZ(len,n);		
	}
	
	function poly2(len,n){
	//poly(len,n);
	rotateX(45);
    poly(len,n);rotateY(45);
    poly(len,n);rotateZ(45);
    poly(len,n);	
	}