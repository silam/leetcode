var numIsLand = function(grid) { 

    let islandCount = 0;
    
    // initialize all cells not visited
    
    const islandVisisted = grid.map(row => row.map(cell => cell = false));

    console.log("Number of island:" +  islandCount);
    

    return islandCount;
}

numIsLand()
