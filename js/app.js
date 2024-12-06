let ValorTotal = 0
document.getElementById("lista-produtos").innerHTML = " ";
document.getElementById('valor-total').textContent = "R$ 0"

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitário = produto.split('R$')[1];
  let quantidadeProduto = document.getElementById("quantidade").value;
  let preço = (quantidadeProduto*valorUnitário);
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">${preço}</span>
        </section>`
  ValorTotal = ValorTotal + preço
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${ValorTotal}`;
  document.getElementById("quantidade").value = "0"
}

function limpar () { 
ValorTotal = 0
document.getElementById("lista-produtos").innerHTML = " ";
document.getElementById('valor-total').textContent = "R$ 0";
document.getElementById("quantidade").value = "0"
}




