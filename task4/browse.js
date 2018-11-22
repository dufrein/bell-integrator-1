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

let initialTime = 3003;
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
	if (!(initialTime%4)) {
		nextPage();
	}
	updateTimer();
}
function updateTimer (){
	if (initialTime%4) {
		timer.innerHTML = '( '+initialTime%4+' )';
	}
	else {
		timer.innerHTML = '( '+initialTime%4+' )';
		setTimeout(()=>{timer.innerHTML =""}, 100);
	}
	initialTime = initialTime -1; 
}
function clickNav (e){
	if (e.target.name=="stop") {
		clearInterval(intervalId);
		pausedInerval = intervalId;
	}
	else if (e.target.name =="play" && pausedInerval == intervalId) {
		start();
	}
	else if (e.target.name =="next"){
		clearInterval(intervalId);
		nextPage();
		initialTime = 3003;
		timer.innerHTML = "";
		start();
	}
	else if (e.target.name =="prev"){
		clearInterval(intervalId);
		prevPage();
		initialTime = 3003;
		timer.innerHTML = "";
		start();
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