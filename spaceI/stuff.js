let butTon;
let picAr=[];
let picB=[];
let par;
function start(){
butTon=select('#but');butTon.position(600,10);	
	picAr.push(new moveObj(400,300,-4,3));
	picB.push(new moveBul(500,500,2));
par=createP("dist between objects");par.position(40,40);

}

function addPic(){
	//picAr.push(new moveObj(random(windowWidth),200,-4+random(8),3));
picAr.push(new moveObj(random(windowWidth),200,-4+random(8),3));
}

function addBul(){
	//picAr.push(new moveObj(random(windowWidth),200,-4+random(8),3));
picB.push(new moveBul(mouseX,600,2+random(3)));
}

function coll(){
	for(let j=picAr.length;j>=0;j--){
	for(let k=picB.length;k>=0;k--){
    let disT=dist(picAr[j].x,picAr[j].y,picB[k].x,picB[k].y);
	
	if(disT<50){
		picB[k].pic.position(-300,-200);picB.splice(k,1);
	    picAr[j].pic.position(-300,-200);picAr.splice(j,1);
	}

	}}		
}


