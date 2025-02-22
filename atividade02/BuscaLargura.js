/*Implemente um Algoritmo BFS em qualquer linguagem de sua preferencia comentando e 
 testando o código com um grafo real de no mínimo 40 vértices*/
 class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  bfs(start) {
    let queue = [start];
    let visited = new Set();

    visited.add(start);

    while (queue.length > 0) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();
const cities = [
  "Esperança", "João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cabedelo", "Cajazeiras", "Guarabira",
  "Sapé", "Mamanguape", "Queimadas", "São Bento", "Monteiro", "Pombal", "Catolé do Rocha", "Alagoa Grande", "Pedras de Fogo", "Lagoa Seca",
  "Itabaiana", "Solânea", "Mari", "Araruna", "Princesa Isabel", "Conde", "Areia", "Bananeiras", "Alhandra", "Cuité",
  "Rio Tinto", "Picuí", "São João do Rio do Peixe", "Taperoá", "Juripiranga", "Teixeira", "Remígio", "Belém", "Nova Floresta", "Boqueirão"
];

cities.forEach(city => graph.addVertex(city));

for (let i = 0; i < 40; i++) {
  for (let j = i + 1; j < 40; j++) {
    if (Math.random() > 0.7) {
      graph.addEdge(cities[i], cities[j]);
    }
  }
}

console.log("BFS a partir de Esperança:");
graph.bfs("Esperança");
