document.addEventListener('keypress', function(event){

  if (event.key != "Enter") return;

  const outputBox = document.querySelector('p');
  outputBox.classList.remove('text-green-700', 'font-bold', 'text-red-700');
  const aiBox = document.getElementById('aiNumber');
  const numberUser = parseInt(document.querySelector('[type=text]').value);
  //True se è pari, False se è dispari
  const choiceUser = document.getElementById('pari').checked;

  const randomNumber = getRandomNumber(1,5);
  aiBox.innerHTML = randomNumber;

  if (checkPariDispari(choiceUser,numberUser,randomNumber)) {
    outputBox.innerHTML = 'Hai vinto!';
    outputBox.classList.add('text-green-700', 'font-bold');
  } else {
    outputBox.innerHTML = 'Hai perso...';
    outputBox.classList.add('text-red-700', 'font-bold');
  }

})

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}

function checkPariDispari(isPari,num1,num2){
  const somma = num1 + num2;
  if(isPari && !(somma%2)){
    return true;
  } else if(!isPari && somma%2){
    return true;
  } else {
    return false;
  }
}