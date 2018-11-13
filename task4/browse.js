let pages = document.getElementsByClassName('pages')[0];
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
	let activePage = pages.getElementsByClassName('active')[0];
	if (!!activePage.nextElementSibling) {
		let nextPage = activePage.nextElementSibling;
		nextPage.classList.toggle('active'); 
	}
	else {
		let endOrNot = confirm('you have reached the last page! continue from the beginning or exit?');
		if (!endOrNot) {window.close();}
			let nextPage = pages.firstElementChild;
			nextPage.classList.toggle('active');
		}
	activePage.classList.toggle('active');
}
function prevPage(){
	let activePage = pages.getElementsByClassName('active')[0];
	if (!!activePage.previousElementSibling) {
		let prevPage = activePage.previousElementSibling;
		prevPage.classList.toggle('active'); 
	}
	else {
		let prevPage = pages.lastElementChild;
		prevPage.classList.toggle('active');
	}
	activePage.classList.toggle('active');
}