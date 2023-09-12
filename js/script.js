

const registeredMail =  ['pippo@gmail.com', 'pappo@gmail.com', 'pino@gmail.com'];
const inputName = document.getElementById('input-name');
const inputMail = document.getElementById('input-mail');
const control = document.getElementById('btn-control');
const reset = document.getElementById('btn-reset');
const outputMessage =  document.getElementById('output-message');
let mailValid = false;                                    //condizione di default
let message = 'Attenzione! questa mail non è registrata!'; //messaggio di default




control.addEventListener('click', function(){
	outputMessage.classList.remove('d-none');
	
	//1. Controllo se la mail inserita è nella lista
	for (let i = 0; i < registeredMail.length && mailValid !== true; i++){
		if (inputMail.value === registeredMail[i]){
			//S'è nella lista visualizza il messasggio 'Benvenuto!'
			mailValid = true;
			message = 'Bentornato ' + inputName.value + '!';
			console.log('Bentornato!');
		}
	}

	document.getElementById('output').innerHTML = message;


})

reset.addEventListener('click', function(){
	inputName.value = '';
	inputMail.value = '';
	mailValid = false;
	message = 'Attenzione! questa mail non è registrata!';
	outputMessage.classList.add('d-none');
})


/*************************************************************************/

const play = document.getElementById('btn-play');




// const userNumber = Math.floor(Math.random() * 6) + 1;
// console.log ('userNumber: ' + userNumber);
// const computerNumber = Math.floor(Math.random() * 6) + 1;
// console.log ('computerNumber: ' + computerNumber);

play.addEventListener('click', function(){
	let diceResult ;
	// creare 2 variabili per i giocatori (utente e computer)
	// generare 2 numeri da 1 a 6 e salvare nelle 2 variabili 
	console.log('-------------------------------');
	const userNumber = Math.floor(Math.random() * 6) + 1;
	console.log ('userNumber: ' + userNumber);
	const computerNumber = Math.floor(Math.random() * 6) + 1;
	console.log ('computerNumber: ' + computerNumber);
	document.getElementById('user-number').innerHTML = 'IL TUO NUMERO: ' + userNumber;
	document.getElementById('computer-number').innerHTML = 'IL NUMERO DEL COMP: ' + computerNumber;

	// fare un confronto tra i 2 variabili, vince chi tra i due ha il numero più alto.
	// visualizzare un messaggio ('Hai vinto!' , 'Hai perso!' oppure 'Pareggio!' )
	if (userNumber > computerNumber){
		console.log('Hai vinto!');
		diceResult = 'Hai vinto!';
	} else if (userNumber < computerNumber){
		console.log('Hai perso!');
		diceResult = 'Hai perso!';
	} else {
		console.log('Pareggio!');
		diceResult = 'Pareggio!';
	}
	document.getElementById('dice-result').innerHTML = diceResult;
})