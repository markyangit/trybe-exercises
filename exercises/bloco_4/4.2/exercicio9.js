//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arrayAteVinteCinco = []
let arrayAteVinteCincoPor2 = []

for (let index = 1; index <= 25; index +=1) {
  arrayAteVinteCinco.push(index)
} console.log(arrayAteVinteCinco.join(", "))

for (let index = 0; index < arrayAteVinteCinco.length; index +=1) {
    arrayAteVinteCincoPor2.push(arrayAteVinteCinco[index] / 2)

} console.log(arrayAteVinteCincoPor2)