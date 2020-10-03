let pic1;
let bullits=[];let d=0;
let par1;let blocks=[];

function start(){
pic1=createImg('pic_for_App.jpg');	
pic1.style('width','200px');pic1.style('height','50px');
par1=createP('counting bullits');par1.position(600,100);
for(let j=0;j<10;j++){
blocks.push(new object(-110+random(800),random(50),random(5),random(3)));
}	
}

function keyPressed(){
	if(keyCode==UP_ARROW){bullits.push(new bullit(mouseX,600,-5));}
	//if(mouseIsPressed){bullits.push(mouseX,windowHeight-150,-5)}s
	
}

function mousePressed(){
	//par1.changed(bullits[bullits.length].num);
    //if(mouseIsPressed)
    bullits.push(new bullit(mouseX+150,windowHeight-50,-5));
	//par1.html(bullits.length+' test '+d);

}

function coll(){
	for(let j=bullits.length-1;j>0;j--){
		for(let k=blocks.length-1;k>0;k--){
			d=dist(bullits[j].x,bullits[j].y,
			//d=dist(10,10,
			blocks[k].pos.x,blocks[k].pos.y);
		par1.html(bullits.length+' test '+floor(d)+"  "+blocks[k].pos.x);

		//if(d<100){bullits.splice(j,1);blocks[k].pic.position(-200,-200);blocks.splice(k,1);}
		}
	}
	}
	
