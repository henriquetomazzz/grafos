//Escreva uma função que busque um numero impar em uma Árvore Binaria NÃO ORDENADA
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function buscarNumeroImpar(raiz) {
    if (raiz === null) {
      return null;
    }
  
    if (raiz.value % 2 !== 0) {
      return raiz.value;
    }
  
    const resultadoEsquerda = buscarNumeroImpar(raiz.left);
    if (resultadoEsquerda !== null) {
      return resultadoEsquerda;
    }
  
    return buscarNumeroImpar(raiz.right);
  }
  
  const raiz = new Node(8);
  raiz.left = new Node(4);
  raiz.right = new Node(10);
  raiz.left.left = new Node(2);
  raiz.left.right = new Node(9);
  raiz.right.left = new Node(12);
  raiz.right.right = new Node(6);
  
  console.log(buscarNumeroImpar(raiz)); // Saída: 9
  