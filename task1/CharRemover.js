let button = document.getElementById("button");
let coms = ' !?.,:;';
button.addEventListener('click',output);
function output(e){
	let input  = document.getElementById("inputExpression").value;
	console.dir(input);
	CharRemover(input);
	e.preventDefault();
}
function CharRemover(input){
	let newStr ="";
	let output = document.getElementById("result");
	let inArr =  input.split('');
	output.value = inArr.join("");


	let words=[];
	for (let i=0;i<inArr.length;i++){
		if (coms.indexOf(inArr[i])==-1){
			let s="";
			while (coms.indexOf(inArr[i])==-1 && i<inArr.length) {
				s = s +inArr[i];							
				i++;
				words.push(s);	
			}
			if (i==inArr.length) {break;} 
			words.push(inArr[i]);		 
		}
	}
	words.forEach(word=>{let wordSort = word.split("").sort(); 
		wordSort.forEach((s,i)=>{ 
			if (i<wordSort.length-1 && s==wordSort[i+1]){
				while(inArr.indexOf(s)!=-1){
					inArr.splice(inArr.indexOf(s),1);
				} 
			}
		}
	)});

output.value = inArr.join("");

}