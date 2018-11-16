let arr1 =['Option1','Option2','Option3','Option4','Option5','Option6','Option7'];
	let select1 = document.getElementById('select1')
	let select2 = document.getElementById('select2')
	let buttons = document.getElementById('buttons');
	buttons.addEventListener('click',buttonListener);

	function onl(){
		arr1.forEach(function(item){select1.innerHTML = select1.innerHTML+"<option>"+item+"</option>";});
	};

	select1.addEventListener('click', delegate);
	select2.addEventListener('click', delegate);

	function delegate(e){
		if (e.target.tagName == "OPTION") {
			e.target.classList.toggle("yellow");
		}
	}

	function buttonListener(e){
		if (e.target.name == "toRight") {
 			replace(select1.childNodes,select2);
		};
		if (e.target.name == "toLeft") {
			replace(select2.childNodes,select1);
		};
		if (e.target.name == "allToRight") {	
			replaceAll(select1.childNodes,select2);
		};
		if (e.target.name == "allToLeft") {
			replaceAll(select2.childNodes,select1);			
		};
	};

	function replace(from, to) {
		checkSelect(from);	
		for (i=0;i<from.length;i++){
			if (from[i].className=="yellow") {
				from[i].classList.toggle("yellow");
				from[i].selected = false;
				to.appendChild(from[i]); 
				i--;
			}
		}	
	}
	function replaceAll(from, to) {
		for (i=0;i<from.length;i++){
			from[i].classList.remove("yellow");
			from[i].selected = false;
			to.appendChild(from[i]); 
			i--;
		}	
	}
	function checkSelect(where){
		for (i=0;i<where.length;i++){
			if (where[i].className=="yellow") {
				return;
			}
		}
		alert('select at least one option');
	}