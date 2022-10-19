document.addEventListener('keypress', function(event){

  if (event.key != "Enter") return;

  // Prendere l'elemnto dove scrivo il risultato e rimuovo eventuali classi di una precedente iterazione
  const outputBox = document.querySelector('p');
  outputBox.classList.remove('text-green-700', 'font-bold', 'text-red-700');
  // Prendere il box dove scriverò il numero estratto
  const aiBox = document.getElementById('aiNumber');
  // Prendere il numero inserito dall'utente e fare i controlli
  const numberUser = parseInt(document.querySelector('[type=text]').value);
  if (wrongInput(numberUser)) {
    alert('Inserisci un numero tra 1 e 5');
    return;
  }
  //Prendere la scelta del utente sul pari o dispari
  // True se è pari, False se è dispari
  const choiceUser = document.getElementById('pari').checked;
  // Calcolare il numero casuale e scriverlo
  const randomNumber = getRandomNumber(1,5);
  aiBox.innerHTML = randomNumber;

  const somma = numberUser + randomNumber;

  // Controllare chi ha vinto
  if (checkPariDispari(choiceUser,somma)) {
    outputBox.innerHTML = 'Hai vinto!, La somma è ' + somma;
    outputBox.classList.add('text-green-700', 'font-bold');
  } else {
    outputBox.innerHTML = 'Hai perso... La somma è ' + somma;
    outputBox.classList.add('text-red-700', 'font-bold');
  }

})

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}

function checkPariDispari(isPari,somma){
  // Se lutente ha scelto pari e la somma è pari return true
  if(isPari && !(somma%2)){
    return true;
  } else if(!isPari && somma%2){ //Oppure se lutente ha scelto dispari e la somma è dispari returna sempre true
    return true;
  } else { //Altirmenti return false
    return false;
  }
}

function wrongInput(num){
  // Se non è un numero ritorna true
  if (isNaN(num)) return true;
  // Se non è compreso tra 1 e 5 ritorna true
  if (num<1 || num>5){
    return true;
  } else {
    return false;
  }
}