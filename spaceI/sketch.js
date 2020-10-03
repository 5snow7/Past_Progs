let pic1;let can;let coun=0;

function setup(){
	start();
	can=createCanvas(windowWidth,30);
	can.position(25,windowHeight-50);
	can.class("bdd");
	//pic1=new moveObj(300,300,4,5);
	can.mousePressed(addBul);
	
}
	
	function draw(){
	//background(200,200,0);
	//pic1.move();pic1.chkbdd();pic1.display();
	
	for(let j=0;j<picAr.length;j++){
	picAr[j].move();picAr[j].chkbdd();picAr[j].display();	
	}
	
if(picAr.length>6){picAr[0].pic.position(-300,-200);picAr.splice(0,1);}
	
	for(let j=0;j<picB.length;j++){
	picB[j].move();picB[j].display();	
	
	if(picB[j].chkbdd()){picB[j].pic.position(-300,-200);picB.splice(j,1);}
	}
	//par.html("dist is " +disT);
	//coll();
	
	for(let j=0;j<picAr.length;j++){
	for(let k=0;k<picB.length;k++){
    let disT=dist(picAr[j].x,picAr[j].y,picB[k].x,picB[k].y);
	
	if(disT<75){
		picB[k].pic.position(-300,-200);picB.splice(k,1);
	    picAr[j].pic.position(-300,-200);picAr.splice(j,1);
	}
	
	
	}}
	par.html("how many bullits: "+coun);
	}
	