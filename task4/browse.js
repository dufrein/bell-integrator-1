let iWindow = document.getElementById('iframe');
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
let numberOfPage = 1; 

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
	if (numberOfPage <4){
		numberOfPage+=1;
 		iWindow.src = 'page'+numberOfPage+'.html';
 	}
 	else {
		let endOrNot = confirm('you have reached the last page! continue from the beginning or exit?');
		if (endOrNot) {
			numberOfPage=1;
			iWindow.src = 'page1.html';
		}
		else {
			window.close();
		}
 	}
 
}
function prevPage(){
	if (numberOfPage > 1){
		numberOfPage-=1;
 		iWindow.src = 'page'+numberOfPage+'.html';
 	} 	
 	else {
 		numberOfPage = 4;
 		iWindow.src = 'page4.html';
 	}
}