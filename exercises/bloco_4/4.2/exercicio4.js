let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;

for (let index = 0; index < numbers.length; index +=1) {
  somaTotal += numbers[index]
}
let mediaDosValores = somaTotal / numbers.length
console.log(mediaDosValores)

if (mediaDosValores > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}