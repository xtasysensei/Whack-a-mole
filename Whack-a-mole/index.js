const holes = document.querySelectorAll(".hole");
const mole = document.querySelector(".mole");
const score = document.querySelector(".score");
const timeLeft = document.querySelector(".time-left");
const start = document.querySelector(".start");
const halt = document.querySelector(".stop");
const speed = document.querySelector(".speed");

let result = 0;
let currentTime = 60;
let hitPosition;

function randomHoles() {
	holes.forEach((hole) => {
		hole.classList.remove("mole");
	});

	let randomHole = holes[Math.floor(Math.random() * 9)];
	randomHole.classList.add("mole");
	hitPosition = randomHole.id;
}

holes.forEach((hole) => {
	hole.addEventListener("mousedown", () => {
		if (hole.id == hitPosition) {
			result++;
			score.innerHTML = result;
			hitPosition = null;
		}
	});
});

function moveMole() {
	timer = setInterval(randomHoles, 900);
}

start.addEventListener("click", () => {
	if (currentTime !== 0) {
		moveMole();
		countDown();
	}
});

halt.addEventListener("click", () => {
	location.reload();
});

speed.addEventListener("click", () => {
	if (currentTime !== 0) {
		moveMole();
	}
});

function countDown() {
	let countdownTimerId = setInterval(() => {
		currentTime--;
		timeLeft.innerHTML = currentTime;

		if (currentTime == 0) {
			clearInterval(countdownTimerId);
			clearInterval(timer);
			alert("Game over,Your score is" + result);
		}
	}, 1000);
}
