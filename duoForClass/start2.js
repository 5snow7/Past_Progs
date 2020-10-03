let inp1;let multvec=[];
let par0,sl0;let par1,sl1;
let par2,sl2;let par3,sl3;
let rad2;let mouseStx=300,mouseSty=250;

function start2(){

multvec=[20,30,40,50,200];


inp1=createInput("len1,dir1,len2,dir2,amt");inp1.class('bdd');
inp1.position(800,50);
inp1.changed(chglev1);

par0=createP("first length");par0.position(800,90);
par0.id('p0');par0.class('parbdd');
sl0=createSlider(0,150,50,1);
sl0.parent('p0');sl0.mousePressed(chgmult0);

par1=createP("first angle");par1.position(800,190);
par1.id('p1');par1.class('parbdd');
sl1=createSlider(0,180,50,2);
sl1.parent('p1');sl1.mousePressed(chgmult1);

par2=createP("second length");par2.position(800,280);
par2.id('p2');par2.class('parbdd');
sl2=createSlider(0,150,50,5);
sl2.parent('p2');sl2.mousePressed(chgmult2);

par3=createP("second angle");par3.position(800,370);
par3.id('p3');par3.class('parbdd');
sl3=createSlider(0,180,50,2);
sl3.parent('p3');sl3.mousePressed(chgmult3);

rad2=createRadio("choose a Rec.Shape");rad2.class('radbdd');
rad2.position(1000,110);
rad2.option('Sier',1);
rad2.option('koch',2);
rad2.option('clear',3);
rad2.option('hilbert',4);
rad2.option('nineLeft',5);
rad2.option('nineArc',6);
rad2.option('nineKoch',7);
rad2.option('duoPoly',8);
rad2.mousePressed(chgRec);

}

function chglev1(){
let mult=inp1.value();
multvec=mult.split(',').map(n=>floor(n));
//for(let j=0;j<5;j++){
//multvec[j]=	mult.split(',').map(n => floor(n))[j];
//}
}

function chgmult0(){
multvec[0]=sl0.value();
}

function chgmult1(){
multvec[1]=sl1.value();
}
function chgmult2(){
multvec[2]=sl2.value();
}
function chgmult3(){
multvec[3]=sl3.value();
}

function chgRec(){
let choice=rad2.value();
if(choice){
switch (choice){
	case '1':tChoice.set1(200,300,-60);
	StriA(tChoice,150,5);break;
	case '2':tChoice.set1(10,450,0);
	kochL(tChoice,100,6);break;
	case '3':break;
	case '4':tnine.set1(690,490,-90);	
	background(200,200,100);hilbert(tnine,10,6,1);
	break;
	case '5':tnine.set1(690,490,-135);
	background(100,150,50);nineSqAL(tnine,15,3);
	break;
	case '6':tnine.set1(690,490,-135);
	background(20,200,10);nineSqA(tnine,15,3);
	break;
	case '7':tnine.set1(690,490,-135);
	background(200,20,100);nineSqK(tnine,400,3);
	break;
	case '8':tD.set1(mouseStx,mouseSty,0);
	background(20,70,200);
	duoPoly(tD,multvec[0],multvec[1],multvec[2],multvec[3],multvec[4]);
    break;
	}}
	}

function duoPoly(t,len1,dir1,len2,dir2,total)
{
	let amt=1;
	do{
		t.vec(amt*dir1,len1);
		t.vec(amt*dir2,len2);
		amt+=1;
	}while(amt<total);
}
		
