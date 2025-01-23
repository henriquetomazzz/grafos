//Escreva uma função que conte o numero de nós de uma Árvore Binaria
function contarNos(raiz) {
    if (!raiz) {
        return 0;
    }

    let stack = [raiz];
    let count = 0;

    while (stack.length > 0) {
        let current = stack.pop();
        count++;

        if (current.right) {
            stack.push(current.right);
        }
        if (current.left) {
            stack.push(current.left);
        }
    }

    return count;
}


const arvore = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null }
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
};

console.log(contarNos(arvore)); 
