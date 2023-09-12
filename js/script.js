

const registeredMail =  [rossi@gmail.it, verdi@gmail.it, marroni@libero.it];
const mail = document.getElementById('').innerHTML;
let mailValid = false;

//1. Controllo se la mail inserita è nella lista
for (let i=0; i < registeredMail.length; i++){
	if (mail === registeredMail[i]){
		//S'è nella lista visualizza il messasggio 'Benvenuto!'
		mailValid = true;
		console.log('Bentornato!');
	} else {
		//Se non è nella lista visualizza il messasggio 'Attenzione! questa mail non è registrata!'
		console.log('Attenzione! questa mail non è registrata!');
	}
}
