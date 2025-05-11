//气球随机生成
function createBalloons(){
	const colors = ['#ff3366','#4CAF50','#2196F3'];
	for(let i=0;i<20;i++){
		const balloon = document.createElement('div');
		balloon.style.left = Math.random()*100 + '%';
		balloon.style.animationDelay = Math.randon()*2 + 's';
		balloon.style.backgrandColor = colors[Math,fllor(math.random()*3)];
		document.querySelector('.balloons').appendChild(balloon);
	}
}

//倒计时功能
function updateCountdown(){
	const targetDate = new Date('2025-5-28');
	const now = new Date();
	const diff = targetDate - now;

	document.getElementById('days').innerHTML = 
		Math.floor(diff / (1000*60*60*24));
	document.getElementById('hours').innerHTML = 
		Math.floor((diff%(1000*60*60*24))/(1000*60*60));
}

setInterval(updateCountdown,1000);