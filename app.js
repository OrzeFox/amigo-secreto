// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

function addName (name)  {
	friends.push(name);
};
function cleanInput (friendNameInput){
	friendNameInput.value = '';
};
function validateName (name) {
	if(name.length < 1) {
		alert('Por favor, inserte un nombre.');
	} else {
		addName(name);
		console.log(friends);
	}
};


function updateFriendList () {
	const friendList = document.getElementById('listaAmigos');
	friendList.innerHTML = '';
	for( let friend of friends){
        const listName = document.createElement('li');
        listName.textContent = friend;
        friendList.appendChild(listName);
	}
}

function agregarAmigo () {
	const friendNameInput = document.getElementById('amigo');
	validateName(friendNameInput.value);
	cleanInput(friendNameInput);
	updateFriendList();
};