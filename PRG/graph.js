// Zde si můžete vložit vlastní graf, který chcete prohledávat. Jestli je graf validní nebo ne řešit nemusíte, program to zkontroluje sám.
let graph = [
    [0, 5, 0, 1, 0],
    [5, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0]
]

// Zde si definujte startovní a koncový bod pro hledání cesty
let START = 0;
let END = 4;

// --------------------------------------------------------- //


function isGraphValid(graph) {
    let isValid = true;
    let previousLineSize = graph[0].length;
    let currentLineSize = graph[0].length;
    graph.forEach((line) => {
        currentLineSize = line.length;
        if (previousLineSize !== currentLineSize) {
            isValid = false;
        }
        previousLineSize = currentLineSize;
    })

    return isValid;
}


function doesPathExist(graph, start, end) {
    let visited = [];
    let queue = [];
    queue.push(start);
    visited.push(start);
    while (queue.length > 0) {
        let node = queue.shift();
        if (node === end) {
            return true;
        }
        
        graph[node].forEach((neighbour, index) => {
            if (neighbour !== 0 && !visited.includes(index)) {
                queue.push(index);
                visited.push(index);
            }
        })
    }
    return false;
}


if (isGraphValid(graph)) {
    console.log(doesPathExist(graph, START, END))
} else {
    console.log("Graph is not valid")
}
