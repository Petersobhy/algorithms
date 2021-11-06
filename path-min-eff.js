var minimumEffortPath = function(heights) {
    var m = heights.length;
    var n = heights[0].length;

    var efforts = new Array(m);
    var q = []

    for(var i=0; i<m; i++){
        efforts[i] = new Array(n).fill(Infinity);
    }

    // Dist, Row, Col
    q.push([0,0,0])

    var dir = [[0,1], [0,-1], [1,0], [-1,0]]

    while(q.length != 0){

        var min = q.pop();
     
        var dist = parseInt(min[0]), row = parseInt(min[1]), col = parseInt(min[2]);

        if(dist > efforts[row][col]) continue;

        if(row == m - 1 && col == n - 1) { 
            return dist; 
        }

        for(let d of dir){

            var newRow = parseInt(row) + parseInt(d[0]);
            var newCol = parseInt(col) + parseInt(d[1]);

            if(newRow >= 0 && newRow < m && newCol >= 0 && newCol < n){
                
                var newDist = Math.max(dist, Math.abs(heights[newRow][newCol] - heights[row][col]));
                
                if(newDist < efforts[newRow][newCol]){
                    efforts[newRow][newCol] = newDist;
                    q.push([newDist, newRow, newCol]);
                }
            }
        }

        q = q.sort(function(a,b){ return b[0] - a[0] });
    }

    return 0;
};


// console.log(minimumEffortPath([[1]])); // 0
// console.log(minimumEffortPath([[1, 5]])); // 4
// console.log(minimumEffortPath([[1, 5, 2]])); // 3
// console.log(minimumEffortPath([[1], [5]])); // 4
// console.log(minimumEffortPath([[10], [60], [30]])); // 0
console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));

console.log(minimumEffortPath([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]));