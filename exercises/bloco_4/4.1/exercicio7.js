// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 102;

if (nota >= 90 && nota <= 100) {
  console.log('Conceito A, parabéns!')
} else if (nota >= 80 && nota <= 100) {
  console.log('Conceito B, parabéns!')
} else if (nota >= 70 && nota <= 100) {
  console.log('Conceito C, precisa melhorar, mesmo assim parabéns!')
} else if (nota >= 60 && nota <= 100) {
  console.log('Conceito D, escapou fedendo.')
} else if (nota >= 50 && nota <= 100) {
  console.log('Conceito E...')
} else if (nota < 50 && nota >= 0) {
  console.log('Conceito F, estude mais.')
} else {
  console.log('Erro: insira notas entre 0 e 100.')
}