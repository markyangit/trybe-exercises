//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arrayAteVinteCinco = []
let arrayAteVinteCincoPares = []

for (let index = 1; index <= 25; index +=1) {
  arrayAteVinteCinco.push(index)
} console.log(arrayAteVinteCinco.join(", "))

for (let index = 0; index < arrayAteVinteCinco.length; index +=1) {
  if (arrayAteVinteCinco[index] % 2 == 0) {
    arrayAteVinteCincoPares.push(arrayAteVinteCinco[index])
  }
} console.log(arrayAteVinteCincoPares)