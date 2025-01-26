//Escreva uma função que busque o MAIOR numero em uma Árvore Binaria
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
  
  const raiz = new Node(10);
  raiz.left = new Node(20);
  raiz.right = new Node(15);
  raiz.left.left = new Node(40);
  raiz.left.right = new Node(25);
  raiz.right.left = new Node(5);
  raiz.right.right = new Node(30);
  
  console.log(buscarMaiorNumero(raiz)); 
