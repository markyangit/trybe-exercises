let salario = 20040.78;
let salarioSemINSS;
let salarioLiquido;

if (salario < 0) {
  console.log('Por favor, insira um valor valido (maior ou igual a zero)')
} else if (salario <= 1556.94) {
  salarioSemINSS = salario - salario * 0.08
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salarioSemINSS = salario - salario * 0.09
} else if (salario >= 2594.93 && salario <= 5189.82) {
  salarioSemINSS = salario - salario * 0.11
} else if (salario > 5189.82) {
  salarioSemINSS = salario - 570.88
} else {
  console.log('Insira apenas valores numericos para o salario')
}

if (salarioSemINSS <= 1903.98) {
  console.log('Voce esta isento de imposto de renda')
} else if (salarioSemINSS >= 1903.99 && salarioSemINSS <= 2826.65) {
  salarioLiquido = salarioSemINSS - ((salarioSemINSS * 0.075) - 142.80)
} else if (salarioSemINSS >= 2826.66 && salarioSemINSS <= 3751.05) {
  salarioLiquido = salarioSemINSS - ((salarioSemINSS * 0.15) - 354,80)
} else if (salarioSemINSS >= 3751.06 && salarioSemINSS <= 4664.68) {
  salarioLiquido = salarioSemINSS - ((salarioSemINSS * 0.225) - 636.13)
} else {
  salarioLiquido = salarioSemINSS - ((salarioSemINSS * 0.275) - 869.36)
}

console.log(salarioLiquido)