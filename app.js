// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

function addName (name)  {
	friends.push(name);
};
function cleanInput (firendNameInput){
	firendNameInput.value = '';
};
function validateName (name) {
	if(name.length < 1) {
		alert('Por favor, inserte un nombre.');
	} else {
		addName(name);
		console.log(friends);
	}
};

function agregarAmigo () {
	const firendNameInput = document.getElementById('amigo');
	validateName(firendNameInput.value);
	cleanInput(firendNameInput);
};
