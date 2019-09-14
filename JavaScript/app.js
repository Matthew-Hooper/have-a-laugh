/* function joke() {
	var request = new XMLHttpRequest();
	var url = 'https://icanhazdadjoke.com/';

	request.open('GET', url, true);
	request.responseType = 'text';

	request.onload = function joke() {
		url.textContent = request.response;
	};

	request.send();

	function newJoke(joke) {
		var joke = document.getElementById(joke);
		function onclick(joke) {
			request.send();
		}
	}
}
function onclick(joke) {
	request.send();
}

const userAction = async () => {
	const response = await fetch('https://icanhazdadjoke.com/', {
		method: 'POST',
		body: myBody, // string or object
		headers: {
			'Content-Type': 'string'
		}
	});
	const myJson = await response.json(); //extract JSON from the http response
	// do something with myJson
};
let jokeArea = document.getElementById('joke-area');
*/

//fetch('https://icanhazdadjoke.com/').then((response) => response.json()).then((data) => console.log(data));

let dadJokes = [
	"How man programmers does it take to change a light bulb? None, that's a hardware issue.",
	"What's the object-oriented way of becoming wealthy? Inheritance.",
	"Why did the programmer quit his job? Because he didn't get a raise.",
	"What did the Java code say to the C code? You've got no class.",
	'Why are Assembly programmers always soaking wet? They work below C-level.',
	'What do cats and programmers have in common? Both get excited when they find a bug.',
	'What is the most used language in programming? Profanity.',
	'Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.',
	'I just watched my life flash before my eyes. All I saw was a close tag.',
	'The computer is mightier than the pen, the sword, and usually, the programmer.'
];

//let randomNumber = dadJokes[Math.floor(Math.random() * dadJokes.length + 1)];

let dadButton = document.getElementById('joke-area');

dadButton.onclick = randomDad();

function randomDad() {
	let randomNumber = dadJokes[Math.floor(Math.random() * dadJokes.length)];
	dadButton.innerHTML = randomNumber;
}

let catJokes = [
	'How do two cats end a fight? They hiss and make up',
	'How do you know a cat is agitated? He’s having a hissy fit!',
	'Why was the cat afraid of the tree? Because of its bark!',
	'What types of cats go bowling? Alley cats!',
	"Why don't cats play poker? Too many cheetahs!",
	'How do felines keep order? Claw enforcement!'
];

let catButton = document.getElementById('joke-area');

catButton.onclick = randomCat();

function randomCat() {
	let randomNumberCat = catJokes[Math.floor(Math.random() * catJokes.length)];
	catButton.innerHTML = randomNumberCat;
}
