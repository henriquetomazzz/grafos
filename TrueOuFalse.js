//Escreva uma função que retorne TRUE se for uma Árvore Binaria e FALSE, caso contrario
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function verificarArvoreBinaria(raiz) {
    if (raiz === null) {
      return true;
    }
  
    if (raiz.left !== null && typeof raiz.left.value !== 'number') {
      return false;
    }
  
    if (raiz.right !== null && typeof raiz.right.value !== 'number') {
      return false;
    }
  
    const esquerdaValida = verificarArvoreBinaria(raiz.left);
    const direitaValida = verificarArvoreBinaria(raiz.right);
  
    return esquerdaValida && direitaValida;
  }
  
  const raiz = new Node(1);
  raiz.left = new Node(2);
  raiz.right = new Node(3);
  raiz.left.left = new Node(4);
  raiz.left.right = new Node(5);
  
  console.log(verificarArvoreBinaria(raiz));
  