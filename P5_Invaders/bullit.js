
class bullit{
	constructor(x,y,vely){
		this.x=x;this.y=y;
		this.vely=vely;this.pic=createImg('pic2_for_App.jpg');
	    this.pic.style('width','40px');this.pic.style('height','40px');
		this.pic.class('picbdd');
	}
	move(){
	this.y=this.y+this.vely;	
	}
	display(){
		this.pic.position(this.x,this.y);
	}
    
}

function endLife(){
		for(let j=bullits.length-1;j>0;j--){
if(bullits[j].y<100){bullits[j].pic.position(-200,-100);
bullits.splice(j,1);
	}
	}}