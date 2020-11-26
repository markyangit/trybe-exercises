//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custoDoProduto = 100;
let valorDeVenda = 800;

if (custoDoProduto >=0 && valorDeVenda >=0) {
  custoDoProduto = custoDoProduto + custoDoProduto * 0.2
  let lucro = valorDeVenda - custoDoProduto
  console.log(lucro)
} else {
  console.log('Erro: insira valores validos para Custo e Valor de Venda.')
}