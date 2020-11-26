// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let nomeDaPeca = 'BISPO';
let text;
switch(nomeDaPeca.toLowerCase()) {
  case "bispo":
    text = 'O bispo se move pelas diagonais.';
    console.log(text)
    break;
  case 'cavalo':
    texto = 'O cavalo se move em forma de L.';
    break;
  case 'peão':
    text = 'O peão se move ou para frente em duas casas nos primeiros movimentos de cada um e em uma casa em todo o restante da partida ou para os lados. Pode se mover pela diagonal para capturar peças adversárias, mas nunca para trás.'
    console.log(text)
    break;
  case 'peao':
    text = 'O peão se move ou para frente em duas casas nos primeiros movimentos de cada um e em uma casa em todo o restante da partida ou para os lados. Pode se mover pela diagonal para capturar peças adversárias, mas nunca para trás.'
    console.log(text)
    break;
  case 'torre':
    text = 'A torre se move horizontal e verticalmente.';
    console.log(text)
    break;
  case 'rei':
    text = 'O rei pode se mover em todas as posições, porém uma casa por vez.';
    console.log(text)
    break;
  case 'rainha':
    text = 'A rainha pode se mover em todas as posições quantas casas puder.';
    console.log(text)
    break;
  default:
    text = 'Por favor, insira um nome de peça válido.'
    console.log(text)
}