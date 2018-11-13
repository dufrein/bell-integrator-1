let go = document.getElementById("button");
let result = document.getElementById("result");
go.addEventListener('click',mathCalc);

function mathCalc (){
	let expression = document.getElementById("expression").value.trim();
	if (expression[expression.length-1]!='=') {
		alert("Expression must end with '=' !");
		return;
	}
	expression = expression.replace('=','');
	let parsedExpr = expression.split(/[\*/\+-]/);
	let arrOperators = expression.split(/[^\*/\+-]/);
	arrOperators = arrOperators.join(' ').replace(/\s/g,'').split('');
	calculatedValue = calculate(parsedExpr,arrOperators);
	result.value = calculatedValue.toFixed(2);
}

function calculate (parsedExpr,arrOperators){
	let calculatedValue = parsedExpr.reduce((value,currentChar,i)=>{
	if (i<parsedExpr.length-1) {
		switch (arrOperators[i]){
			case '+': value+=+parsedExpr[i+1];
			break;
			case '-': value-=+parsedExpr[i+1];
			break;
			case '/': value/=parsedExpr[i+1];
			break;
			case '*':value*= parsedExpr[i+1];
			break;
		}
	}
	return value;
	},+parsedExpr[0]);	
	return calculatedValue;
}