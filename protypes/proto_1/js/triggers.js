
//User Input Events
$(canvas).mousemove(function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    game.hoverTile = getSpace(x, y)
    console.log('x: ' + x + ' y: ' + y)
})

$(canvas).on('click', function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    if (game.spaces[game.hoverTile].developed === false) {
        game.spaces[game.hoverTile].build(getSpace(x, y))
        game.spaces[game.hoverTile].developed === true
    } else {
        game.spaces[game.hoverTile].tower.upgrade()
    }
})

$(window).resize(function () {
    update.window()
})