// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let anguloA = 90;
let anguloB = 120; 
let anguloC = -30;

if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log('Erro. Insira valores numéricos correspondentes aos ângulos do triângulo (Ps: o ângulo não pode ser negativo, a não ser que esteja em um ciclo trigonométrico, que no caso você deverá utilizar outro programa para este cálculo.')
} else if (anguloA + anguloB + anguloC == 180) {
    console.log('true')
} else if (anguloA + anguloB + anguloC != 180) {
    console.log('false')
} else {
    console.log('Erro. Insira valores numéricos correspondentes aos ângulos do triângulo')
}