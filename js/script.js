

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