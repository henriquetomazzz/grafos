//Escreva uma função que exclui todos os nós de uma árvore binária de busca com Valor par.
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function excluirNosPares(raiz) {
    if (raiz === null) {
      return null;
    }
  
    if (raiz.value % 2 === 0) {
      if (raiz.left === null && raiz.right === null) {
        return null;
      }
  
      if (raiz.left === null) {
        return raiz.right;
      }
  
      if (raiz.right === null) {
        return raiz.left;
      }
  
      let substituto = encontrarMinimo(raiz.right);
      raiz.value = substituto.value;
      raiz.right = excluirNosPares(raiz.right);
    } else {
      raiz.left = excluirNosPares(raiz.left);
      raiz.right = excluirNosPares(raiz.right);
    }
  
    return raiz;
  }
  
  function encontrarMinimo(no) {
    while (no.left !== null) {
      no = no.left;
    }
    return no;
  }
  
  const raiz = new Node(10);
  raiz.left = new Node(5);
  raiz.right = new Node(15);
  raiz.left.left = new Node(2);
  raiz.left.right = new Node(8);
  raiz.right.left = new Node(12);
  raiz.right.right = new Node(18);
  
  console.log(excluirNosPares(raiz));
  