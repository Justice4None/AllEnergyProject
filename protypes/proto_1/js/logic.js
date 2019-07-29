
//Globals
var w = window.innerWidth
var h = window.innerHeight
var canvas = document.getElementById('game_canvas')
var ctx = canvas.getContext("2d")

//Master Game Object
var game = {
    canvas: $('#game_canvas'),
    tileSize: 32,
    spaces: [],
    towers: [],
    createBoard: function (boardWidth, boardHeight) {

        var boardCount = 0

        for (var j = 0; j < boardHeight; j++) {
            for (var i = 0; i < boardWidth; i++) {
                game.spaces[boardCount] = new space(boardCount, i * game.tileSize, j * game.tileSize)
                boardCount++
            }
        }
        render()
    }
}

//Updates Controller
var update = {
    all: function () {
        //game.board.update()
        //game.towers.update()
        //game.units.update()
        //game.player_1.update()
    },
    window: function () {
        $('#game_canvas').width = window.innerWidth
        $('#game_canvas').height = window.innerHeight
        ctx.canvas.width = w;
        ctx.canvas.height = h;
    }
}

//Render Controller
function render() {
    for (var i = 0; i < game.spaces.length; i++) {

        //console.log('id: ' + game.spaces[i].id)
        //console.log('x: ' + game.spaces[i].x)
        //console.log('y: ' + game.spaces[i].y)
        game.spaces[i].render()
    }
}

//Animation Timer
var globalID
var count = 0

function animate() {

    count++

    //TRIGGER CHANGES
    //oscillateColor('#hud', 0.1, 0.8)

    //draw map
    //ctx.fillStyle = '#55ff88'
    //ctx.fillRect(0, 0, w, h)

    globalID = requestAnimationFrame(animate)

}

globalID = requestAnimationFrame(animate)
update.window()
game.createBoard(10, 10)


