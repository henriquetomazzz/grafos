// Escreva uma função que busque o MAIOR numero em uma Árvore Binaria NÃO ORDENADA
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function buscarMaiorNumero(raiz) {
    if (raiz === null) {
      return Number.NEGATIVE_INFINITY;
    }
  
    const maiorEsquerda = buscarMaiorNumero(raiz.left);
    const maiorDireita = buscarMaiorNumero(raiz.right);
  
    return Math.max(raiz.value, maiorEsquerda, maiorDireita);
  }
  
  // Exemplo de uso
  const raiz = new Node(7);
  raiz.left = new Node(15);
  raiz.right = new Node(3);
  raiz.left.left = new Node(12);
  raiz.left.right = new Node(20);
  raiz.right.left = new Node(5);
  raiz.right.right = new Node(18);
  
  console.log(buscarMaiorNumero(raiz));
  