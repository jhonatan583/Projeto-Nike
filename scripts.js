let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botaoCarrinho = document.querySelector(".botao-carrinho") // Ajuste este seletor conforme sua classe

function mudarVisual(cor, imagem){
  tenis.classList.add("troca-efeito")

  body.style.background = cor
  
  // Muda a cor do botão do carrinho para a mesma cor do fundo
  if (botaoCarrinho) {
    botaoCarrinho.style.backgroundColor = cor
    
    // Opcional: Ajusta a cor do texto para manter boa legibilidade
    botaoCarrinho.style.color = isCorClara(cor) ? '#000' : '#fff'
  }

  // contador de tempo
  setTimeout(() => {
    tenis.src = imagem
    tenis.classList.remove("troca-efeito")
  }, 500);
  // 1000 = 1 segundo
}

// Função auxiliar para determinar se a cor é clara ou escura
function isCorClara(cor) {
  // Remove o # se existir
  cor = cor.replace('#', '');
  
  // Converte para RGB
  const r = parseInt(cor.substr(0, 2), 16);
  const g = parseInt(cor.substr(2, 2), 16);
  const b = parseInt(cor.substr(4, 2), 16);
  
  // Calcula a luminância
  const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminancia > 0.5;
}