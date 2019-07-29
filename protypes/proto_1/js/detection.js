
//Detection( UNDER CONSTRUCTION )

function spaceDetection(x, y) {

    for (var i = 0; i < game.spaces.length; i++) {
        if (x > game.spaces[i].x && x < game.spaces[i].x + game.spaces[i].width && y > game.spaces[i].y && y < game.spaces[i].y + game.spaces[i].height) {
            console.log('space hover')
            game.spaces[i].color = '#000000'
            game.spaces[i].render()
        }
    }
}

function towerDetection(x, y) {

    for (var i = 0; i < game.towers.length; i++) {
        if (x > game.towers[i].x && x < game.towers[i].x + game.towers[i].width && y > game.towers[i].y && y < game.towers[i].y + game.towers[i].height) {
            console.log('tower clicked')
            game.towers[i].upgrade()
            game.towers[i].render()
        }
    }
}

function unitDetection() {

}