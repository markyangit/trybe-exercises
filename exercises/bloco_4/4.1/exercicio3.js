//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 10;
let b = 9;
let c = 9;

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else if (c > a && c > b) {
    console.log(c)
} else {
    console.log('Por favor, insira números diferentes para que a comparação possa ser realizada!')
}