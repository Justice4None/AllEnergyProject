//User Input Events
$(canvas).mousemove(function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    game.hoverTile = getSpace(x, y)
    console.log('x: ' + x + ' y: ' + y)
})

$(canvas).on('click', function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // get the vertical coordinate
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;
    var gridCol = Math.floor(mouseX / game.tileSize);
    var gridRow = Math.floor(mouseY / game.tileSize);
    var cell = game.grid[gridCol][gridRow];
    cell.occupied = !cell.occupied;
    if (game.spaces[game.hoverTile].developed === false) {
        game.addTower()
        game.addUnit()

    } else {
        game.spaces[game.hoverTile].tower.upgrade()
    }
    if (game.spaces.length >= 1) {
        game.grid.occupied = true
    }
})

$(window).resize(function () {
    update.window()
})