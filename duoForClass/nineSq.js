function arcR(t,len){
	t.rt(90);
	for(let j=0;j<180;j++){
	t.fd(PI/12);t.lt(1);	
	}
	t.rt(90);
}

function arcL(t,len){
	t.lt(90);
	for(let j=0;j<180;j++){
	t.fd(PI/12);t.rt(1);	
	}
	t.lt(90);
}

function nineSqA(t,len,lev){
	if(lev==0){let rand=floor(random(2));
	if(rand==1){arcL(t,len);}else{arcR(t,len);}}
	else{
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);
	}}

function nineSqAL(t,len,lev){
	if(lev==0){arcL(t,len);}
	else{
	nineSqAL(t,len/3,lev-1);t.lt(90);
	nineSqAL(t,len/3,lev-1);t.rt(90);
	nineSqAL(t,len/3,lev-1);t.rt(90);
	nineSqAL(t,len/3,lev-1);t.rt(90);
	nineSqAL(t,len/3,lev-1);t.lt(90);
	nineSqAL(t,len/3,lev-1);t.lt(90);
	nineSqAL(t,len/3,lev-1);t.lt(90);
	nineSqAL(t,len/3,lev-1);t.rt(90);
	nineSqAL(t,len/3,lev-1);
	}}


function nineSqK(t,len,lev){
	if(lev==0){let rand=floor(random(2));
	if(rand==1){kochL(t,len,3);}else{kochR(t,len,3);}}
	else{
	nineSqK(t,len/3,lev-1);t.lt(90);
	nineSqK(t,len/3,lev-1);t.rt(90);
	nineSqK(t,len/3,lev-1);t.rt(90);
	nineSqK(t,len/3,lev-1);t.rt(90);
	nineSqK(t,len/3,lev-1);t.lt(90);
	nineSqK(t,len/3,lev-1);t.lt(90);
	nineSqK(t,len/3,lev-1);t.lt(90);
	nineSqK(t,len/3,lev-1);t.rt(90);
	nineSqK(t,len/3,lev-1);
	}}


function kochL(t,len,level){
if(level==1){t.fd(len);}
else{
kochL(t,len/2,level-1);t.lt(60);
kochL(t,len/2,level-1);t.rt(120);
kochL(t,len/2,level-1);t.lt(60);
kochL(t,len/2,level-1);
}}

function kochR(t,len,level){
if(level==1){t.fd(len);}
else{
kochR(t,len/2,level-1);t.rt(60);
kochR(t,len/2,level-1);t.lt(120);
kochR(t,len/2,level-1);t.rt(60);
kochR(t,len/2,level-1);
}}


function StriA(t,len,level){
	if(level==0){}
	else{
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
}
}

function hilbert(t,len,lev,p){
	if(lev==0){}else
	{t.lt(p*90);hilbert(t,len,lev-1,-1*p);t.fd(len);
		t.rt(p*90);hilbert(t,len,lev-1,p);t.fd(len);
		hilbert(t,len,lev-1,p);t.rt(p*90);t.fd(len);
		hilbert(t,len,lev-1,-1*p);t.lt(p*90);
}
}


function nineSq(t,len,lev){
	if(lev==0){t.fd(len);}
	else{
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.lt(90);
	nineSqA(t,len/3,lev-1);t.rt(90);
	nineSqA(t,len/3,lev-1);
	}}


