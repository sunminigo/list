
//text 확대축소
baseFont=12;

function fontBig(){
		thebody=document.getElementsByTagName("body")[0];
	baseFont++;
	if(baseFont>=20){
		alert("최대크기입니다");
	}else{
		thebody.style.fontSize=baseFont+"px";
	}
}

function fontSmall(){
		thebody=document.getElementsByTagName("body")[0];
	baseFont--;
	if(baseFont<=8){
		alert("최소크기입니다");
	}else{
		thebody.style.fontSize=baseFont+"px";
	}
}


function fontOrg(){
	baseFont=12;
	thebody.style.fontSize="12px";
}

