// https://aonecode.com/Interview-Question/Find-Bridges-In-A-Graph

function bridgesInGraph(nodes) {
    var edges = {};

    for(var node of nodes){
        if(node[0] in edges) edges[node[0]] = [node, ...edges[node[0]]];
        else edges[node[0]] = [node]

        if(node[1] in edges) edges[node[1]] = [node, ...edges[node[1]]];
        else edges[node[1]] = [node]
    }

    var result = [];

    for(var e in edges){
        if(edges[e].length === 1)
           result = [...result, ...edges[e]]
    }

    return result
}

console.log(bridgesInGraph([[1,2],[1,3],[1,4]]));
console.log(bridgesInGraph([[1, 2], [1, 3], [2, 3]]));