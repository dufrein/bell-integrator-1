		let button = document.getElementById("button");
		let coms = ' !?.,:;';
		button.addEventListener('click',output);
		function output(e){
			let input  = document.getElementsByName('input')[0].value;
			CharRemover(input);
			e.preventDefault();
		}
		function CharRemover(input){
			let newStr ="";
			let output = document.getElementsByName("result")[0];
			let inArr =  input.split('');
			for (let i=0;i<inArr.length;i++){
			if (!~coms.indexOf(inArr[i])){
					let s="";
					while (!~coms.indexOf(inArr[i]) && i<inArr.length) {
						if (!~s.indexOf(inArr[i])) {
							s = s +inArr[i];							
						}
						i++;
						if (~coms.indexOf(inArr[i])) {break;}						
					} 
					newStr+=s;	
				}
				if (i==inArr.length) {break;} 
				newStr+=inArr[i];		 
			}
			output.value = newStr;
		}