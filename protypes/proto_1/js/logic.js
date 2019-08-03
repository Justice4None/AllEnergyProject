
//Globals
var w = window.innerWidth  // Window X
var h = window.innerHeight // Window Y
var x = 0;     // Mouse X
var y = 0;     // Mouse Y

var canvas = document.getElementById('game_canvas')
var ctx = canvas.getContext("2d")

//Master Game Object
var game = {
    canvas: $('#game_canvas'),
    tileSize: null,
    spaces: [],
    towers: [],
    units: [],
    hoverTile: 0,
    boardWidth: 0,
    boardHeight: 0,
    createBoard: function (boardWidth, boardHeight) {
        var boardCount = 0
        game.boardWidth = boardWidth
        game.boardHeight = boardHeight
        game.tileSize = h / boardHeight

        for (var j = 0; j < boardHeight; j++) {
            for (var i = 2.75; i < boardWidth; i++) {
                game.spaces[boardCount] = new space(boardCount, i * game.tileSize, j * game.tileSize)
                boardCount++
            }
        }
    },
    addTower: function () {
        game.spaces[game.hoverTile].build(getSpace())
        game.spaces[game.hoverTile].developed === true
    },
    addUnit: function () {

    }
}

//User Player Object
var player = {
    activeTile: null,
    hoverTile: null

    //Populated by Travis' Login
    //Interfaces with Travis' Firebase User Data

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
var render = {

    background: function () {
        ctx.fillStyle = '#ffaa33'
        ctx.fillRect(0, 0, w, h);
    },
    tiles: function () {

        for (var i = 0; i < game.spaces.length; i++) {
            if (game.hoverTile === i) {
                game.spaces[i].render('#ffffaa')
            } else {
                game.spaces[i].render('#e2c85d')
            }
        }

    },
    towers: function () {
        for (var i = 0; i < game.towers.length; i++) {
            game.towers[i].render()
        }
    },
    units: function () {
        for (var i = 0; i < game.towers.length; i++) {
            game.units[i].render()
        }
    }

}

//Animation Timer
var globalID
var count = 0

function animate() {

    count++

    render.background()
    render.tiles()
    render.towers()

    globalID = requestAnimationFrame(animate)

}

globalID = requestAnimationFrame(animate)
update.window()

game.createBoard(16, 10)



