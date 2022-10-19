document.addEventListener('keypress', function(event){

  if (event.key != "Enter") return;

  const outputBox = document.querySelector('p');
  outputBox.classList.remove('text-green-700', 'font-bold', 'text-red-700');
  const aiBox = document.getElementById('aiNumber');
  const numberUser = parseInt(document.querySelector('[type=text]').value);
  if (wrongInput(numberUser)) {
    alert('Inserisci un numero tra 1 e 5');
    return;
  }
  //True se è pari, False se è dispari
  const choiceUser = document.getElementById('pari').checked;

  const randomNumber = getRandomNumber(1,5);
  aiBox.innerHTML = randomNumber;

  const somma = numberUser + randomNumber;

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
  if(isPari && !(somma%2)){
    return true;
  } else if(!isPari && somma%2){
    return true;
  } else {
    return false;
  }
}

function wrongInput(num){
  if (isNaN(num)) return true;
  if (num<1 || num>5){
    return true;
  } else {
    return false;
  }
}