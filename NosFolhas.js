//Escreva uma função que conte o numero de nós folhas de uma Árvore Binaria
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function contarNosFolhas(raiz) {
    if (raiz === null) {
      return 0;
    }
  
    if (raiz.left === null && raiz.right === null) {
      return 1;
    }
  
    const folhasEsquerda = contarNosFolhas(raiz.left);
    const folhasDireita = contarNosFolhas(raiz.right);
  
    return folhasEsquerda + folhasDireita;
  }
  
  const raiz = new Node(1);
  raiz.left = new Node(2);
  raiz.right = new Node(3);
  raiz.left.left = new Node(4);
  raiz.left.right = new Node(5);
  raiz.right.right = new Node(6);
  
  console.log(contarNosFolhas(raiz));
  