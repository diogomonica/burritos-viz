// We use a pure information theory approximation here, and complement it with other details
function isNumeric(P){
  if(parseInt(P) > 0){
    
  }
}
function getPasswordStrength(H){
	var D=(H.length);

	if (D<5) { D=0 }

	if(D>7){
		D=5
	}
	var F=H.replace(/[0-9]/g,"");
	var G=(H.length-F.length);
	if(G>3){G=3}
	var A=H.replace(/\W/g,"");
	var C=(H.length-A.length);
	if(C>3){C=3}
	var B=H.replace(/[A-Z]/g,"");
	var I=(H.length-B.length);
	if(I>3){I=3}
	var E=((D*10)-20)+(G*10)+(C*15)+(I*10);
	if(E<0){E=0}
	if(E>100){E=100}
	return E
}

console.log(getPasswordStrength("7<LENNG0sL"));