var name = prompt ("Coloque seu nome")
var questionOne
var questionTwo
var questionThree

document.getElementById('salutation').innerHTML = "Olá " + name + "!"

var quiz = prompt ("Deseja jogar? \n  1. Sim \n 2. Não")
if (quiz == 1){

questionOne = prompt("Qual continente está o brasill?  \n  1. América do Sul \n 2. Europa \n 3. Oceania")
if (questionOne == 1) {
  true
  document.getElementById('correctAnswerOne').innerHTML = "Pergunta 1"
}
else {
  false
  document.getElementById('incorrectAnswerOne').innerHTML = "Pergunta 1"
}


questionTwo = prompt("Qual região Minas Gerais está?  \n  1. Sudeste  \n 2. Centro Oeste \n 3.Norte")

if (questionTwo == 1) {
  true
  let answerOne = document.getElementById('correctAnswerTwo').innerHTML = "Pergunta 2"
}
else {
  false
 let answerOne =   document.getElementById('incorrectAnswerTwo').innerHTML = "Pergunta 2"
}

questionThree = prompt("Qual a capital do Brasil?  \n  1. Rio de Janeiro \n 2.São Paulo \n 3.Brasilia")

if (questionThree == 3) {
  true
    document.getElementById('correctAnswerThree').innerHTML = "Pergunta 3"
}
else {
  false
  document.getElementById('incorrectAnswerThree').innerHTML = "Pergunta 3"
}


}
else{
  alert('tchau ' + name);
}
