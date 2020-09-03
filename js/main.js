function addDot(str){
	let strDot = []
	dot(str, '', strDot, 0, 0)
	document.write(strDot.length)
	return strDot
}

function dot(str, strStart, strDot, i, n){
	if(i <= str.length){
		if(n!=0){
			strDot.push(strStart + str.slice(i))
		}
		dot(str, strStart + str.substr(i, 1) + '.',strDot,i+1,1)
		dot(str, strStart + str.substr(i, 1),strDot,i+1,0)
	}
}

document.write('\n' + addDot("abcdg"))

//a.bcd
//a.b.cd
//a.b.c.d
//a.b.c.d.
//a.b.cd.
//a.bc.d
//a.bc.d.
//a.bcd.
//ab.cd
//ab.c.d
//ab.c.d.
//ab.cd.
//abc.d
//abc.d.
//abcd.