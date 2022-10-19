document.addEventListener('keypress', function(event){
  
  if (event.key != "Enter") return;

  const inputUser = document.getElementById('input').value;
  const outputBox = document.querySelector('p');
  outputBox.classList.remove('text-green-700', 'font-bold', 'text-red-700');

  if(checkPalindroma(inputUser)){
    outputBox.innerHTML = "Si, " + inputUser + " è palindroma!";
    outputBox.classList.add('text-green-700', 'font-bold');
  } else {
    outputBox.innerHTML = "No, " + inputUser + " non è palindroma!";
    outputBox.classList.add('text-red-700', 'font-bold');
  }

})

function checkPalindroma(word){

  // Rimuove tutti gli spazi nella stringa di input e mette in minuscolo
  word = word.replace(/\s/g, "").toLowerCase();

  //Creo la parola inversa
  let wordInv = "";
  for (let i=(word.length-1); i>=0; i--){
    wordInv += word[i];
  }

  //Controllo se le due parole sono uguali
  if (wordInv === word){
    return true;
  } else {
    return false;
  }
}