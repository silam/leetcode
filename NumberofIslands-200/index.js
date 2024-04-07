

const getAdjNeighbors = (i,j, grid, islandsVisisted) => {

    const adjNeighbors = [];

    if ( i > 0 && !islandsVisisted[i-1][j])  adjNeighbors.push([i-1, j]);
    
    if ( i < grid.length - 1 && !islandsVisisted[i + 1][j]) adjNeighbors.push([i+1, j]);
    
    if ( j > 0 && !islandsVisisted[i][j-1])  adjNeighbors.push([i, j-1]);

    if ( j < grid[i].length-1 && !islandsVisisted[i][j+1]) adjNeighbors.push([i, j+1]);

    return adjNeighbors;
}


const foundIsland = (r, c, grid, islandsVisisted) => {
    const islandStack = [[r, c]];
    let islandSize = 0;
    
    while ( islandStack.length > 0 ) {
        let currentNode = islandStack.pop();

        let [i,j] = currentNode;

        // check if visited already
        if ( islandsVisisted[i][j] == true ) continue;
        islandsVisisted[i][j] = true;

        // check if cell is island 
        if (grid[i][j] === '0') continue;
        // if island, then its size is increased
        islandSize++;
        

        let adjNeighbors = getAdjNeighbors(i, j, grid, islandsVisisted);

        islandStack.push(...adjNeighbors);

    }

    return islandSize > 0 ? true : false;

}

var numIsLand = function(grid) { 

    let islandCount = 0;
    
    // initialize tempo grid with all cells not visited

    const islandsVisisted = grid.map(row => row.map(cell => cell = false));

    for (let r = 0; r < grid.length; r++) {
    
        for (let c = 0; c <grid[r].length; c++) {
            if (foundIsland(r, c, grid, islandsVisisted)) islandCount++;
        }
    }
    console.log("Number of island:" +  islandCount);
    

    return islandCount;
}



let grid = [
    ["1","1","0","1"],
    ["1","1","0","0"]
];
numIsLand(grid);
