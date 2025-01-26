//Escreva uma função que calcule a altura de uma Árvore Binaria
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function calcularAltura(raiz) {
    if (raiz === null) {
      return -1;
    }
    
    const alturaEsquerda = calcularAltura(raiz.left);
    const alturaDireita = calcularAltura(raiz.right);
  
    return Math.max(alturaEsquerda, alturaDireita) + 1;
  }
  
  const raiz = new Node(1);
  raiz.left = new Node(2);
  raiz.right = new Node(3);
  raiz.left.left = new Node(4);
  raiz.left.right = new Node(5);
  
  console.log(calcularAltura(raiz));
  