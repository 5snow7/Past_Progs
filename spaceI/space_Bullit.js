class moveBul{

constructor(xs,ys,vys){
this.x=xs;this.y=ys;coun++;
this.vys=vys;this.pic=createImg('pic2_for_App.jpg');
this.pic.class('inpbdd');
}

move(){
//this.x=this.x+this.vxs;
this.y=this.y-this.vys;	
}

chkbdd(){
	//if(this.x<0||this.x>windowWidth){this.vxs=-1*this.vxs;}
	if(this.y>-50){return false;}
	else{return true;}
}
	
display(){
	this.pic.position(this.x,this.y);
}
	
}