const fs = require("fs");

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = {};
    }

    addEdge(node1, node2, weight) {
        this.edges[node1][node2] = weight;
    }

    setGraphFromMatrix(matrix) {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i < matrix.length; i++) {
            this.addNode(letters[i]);
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                this.addEdge(letters[i], letters[j], matrix[i][j]);
            }
        }
    }

    dijkstra(startNode) {
        let distances = {};
        let previousNodes = {};
        let unvisitedNodes = new Set(this.nodes);

        for (let node of this.nodes) {
            distances[node] = node === startNode ? 0 : Infinity;
            previousNodes[node] = null;
        }

        let currentNode = startNode;

        while (currentNode) {
            let currentDistance = distances[currentNode];
            let neighbors = this.edges[currentNode];

            for (let neighbor in neighbors) {
                let distanceToNeighbor = currentDistance + neighbors[neighbor];
                if (distanceToNeighbor < distances[neighbor]) {
                    distances[neighbor] = distanceToNeighbor;
                    previousNodes[neighbor] = currentNode;
                }
            }

            unvisitedNodes.delete(currentNode);
            currentNode = this.getClosestNode(distances, unvisitedNodes);
        }

        let table = [];
        for (let node of this.nodes) {
            let path = [];
            let currNode = node;
            while (currNode) {
                path.push(currNode);
                currNode = previousNodes[currNode];
            }
            path.reverse();
            table.push([node, distances[node], path.join(" -> ")]);
        }

        // save into file JSON
        let data = JSON.stringify(table, null, 4);
        fs.writeFileSync('data.json', data);


        console.log("Vysvětlení tabulky (první řádek):");
        console.log("(index) = Prosté pořadí uzlů");
        console.log("(uzel) = Uzel, pro který je vypočítána vzdálenost");
        console.log("(cesta) = Cesta od počátečního uzlu");
        console.log("(vzdálenost) = Vzdálenost od počátečního uzlu");

        console.table(table);

        console.log("-------------------------------------------");
        console.log("Uloženo do souboru data.json");

    }

    getClosestNode(distances, unvisitedNodes) {
        let closestNode = null;
        let smallestDistance = Infinity;

        for (let node of unvisitedNodes) {
            if (distances[node] < smallestDistance) {
                smallestDistance = distances[node];
                closestNode = node;
            }
        }

        return closestNode;
    }
}

let graph = new Graph();
let matrix = [
    [1 , 60, 2, 20],
    [60, 1 , 1, 10],
    [2 , 1 , 1, 200],
    [20, 10, 200, 1]
];

graph.setGraphFromMatrix(matrix);
graph.dijkstra("A");