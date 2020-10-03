

function setup(){
	start();
	//can=createCanvas(windowWidth-100,windowHeight-100);can.position(25,25);can.class("bdd");
	
   }
   
	let y=0;
	
	function draw(){
	pic1.position(mouseX+70,windowHeight-70);
    //if(bullits.length>=0){
	for(let j=bullits.length-1;j>=0;j--){
		bullits[j].move();bullits[j].display();
	}//}
	for(let j=blocks.length-1;j>=0;j--){
		blocks[j].move();blocks[j].chbd();
		blocks[j].display();
	}
	
	coll();
	endLife();
	}