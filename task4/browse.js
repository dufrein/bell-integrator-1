let pages = document.getElementById('pages');
let nav = document.createElement('nav');
let explorer = document.getElementById('explorer');
explorer.insertBefore(nav,pages);

nav.outerHTML =`<nav id="navMenu">
<ul>
<li class="navButton"><a href="#" name="stop">Stop ||</a></li>
<li class="navButton"><a href="#" name="play">Play ></a></li>
<li class="navButton"><a href="#" name="prev">Prev <<</a></li>
<li class="navButton"><a href="#" name="next">Next >></a></li>
</ul>
</nav>`;

let initialTimeValue = 4;
let initialTime = initialTimeValue;
let navMenu = document.getElementById('navMenu');
navMenu.addEventListener('click',clickNav);
let intervalId;
let timer = document.getElementById('timer');	
let pausedInterval;
function start(){
	intervalId = setInterval(slider, 1000);				
}
start();

function slider(){
	if (initialTime===0) {
		nextPage();
	}
	updateTimer();
}
function updateTimer (){
	if (initialTime!=0) {
		timer.innerHTML = '( '+initialTime+' )';
	}
	else {
		timer.innerHTML = '( '+initialTime+' )';
		setTimeout(()=>{timer.innerHTML =""}, 100);
	}
	initialTime = initialTime -1; 
}
function clickNav (e){
	if (e.target.name ==="play" && pausedInerval === intervalId) {
		start();
	}
	switch (e.target.name) {
		case "stop":
		clearInterval(intervalId);
		pausedInerval = intervalId;
		break;
		case "next":
		clearInterval(intervalId);
		nextPage();
		initialTime = initialTimeValue;
		timer.innerHTML = "";
		start();
		break;
		case "prev":
		clearInterval(intervalId);
		prevPage();
		initialTime = initialTimeValue;
		timer.innerHTML = "";
		start();
		break;
	}
}

function nextPage(){
	if (pageNum <4){
		pageNum++;
		document.location.assign('page'+pageNum+'.html');
	}
	else {
		let endOrNot = confirm('you have reached the last page! continue from the beginning or exit?');
		if (endOrNot) {
			document.location.assign('page1.html');
		}
		else {
			window.close();
		}
	}
}

function prevPage(){
	if (pageNum > 1){
		pageNum--;
		document.location.assign('page'+pageNum+'.html');
	} 	
	else {
		document.location.assign('page4.html');
	}
}