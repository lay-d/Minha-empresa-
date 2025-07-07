document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    document.getElementById('mensagemEnviada').classList.remove('escondido');
    setTimeout(() => {
      document.getElementById('mensagemEnviada').classList.add('escondido');
      document.getElementById('formContato').reset();
    }, 3000);
  }
});

function comprarProduto(produto) {
  alert(`Você escolheu comprar: ${produto}`);
}