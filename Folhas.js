//Escreva uma função que conte o numero de nós não folhas de uma Árvore Binaria
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function contarNosNaoFolhas(raiz) {
    if (raiz === null || (raiz.left === null && raiz.right === null)) {
      return 0;
    }
    
    const contarEsquerda = contarNosNaoFolhas(raiz.left);
    const contarDireita = contarNosNaoFolhas(raiz.right);
  
    return contarEsquerda + contarDireita + 1;
  }
  
  const raiz = new Node(1);
  raiz.left = new Node(2);
  raiz.right = new Node(3);
  raiz.left.left = new Node(4);
  raiz.left.right = new Node(5);
  
  console.log(contarNosNaoFolhas(raiz)); // Saída: 2
  