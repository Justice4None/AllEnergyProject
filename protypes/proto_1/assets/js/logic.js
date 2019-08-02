
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
    tileSize: 32,
    spaces: [],
    towers: [],
    units: [],
    hoverTile: 0,
    boardWidth: 0,
    boardHeight: 0,
    createBoard: function (boardWidth, boardHeight, tileSize) {
        var boardCount = 0
        game.boardWidth = boardWidth
        game.boardHeight = boardHeight
        game.tileSize = tileSize

        for (var j = 0; j < boardHeight; j++) {
            for (var i = 0; i < boardWidth; i++) {
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

var audio = {
    files: ["acolyte-chant-1", "acolyte-chant-2", "acolyte-chant-3", "acolyte-chant-4", "acolyte-chant-5", "acolyte-chant-6", "acolyte-chant-7", "acolyte-chant-8", "acolyte-chant-9", "acolyte-chant-10", "acolyte-chant-11", "acolyte-chant-12", "acolyte-chant-13", "acolyte-chant-long", "acolyte-march-footsteps-1", "arrow-impact-1", "desolving", "invalid-click", "level-up", "magic-spell-1", "monster-sounds-1", "monster-sounds-2", "monster-sounds-3", "monster-sounds-4", "monster-sounds-5", "monster-sounds-6", "monster-sounds-7", "monster-sounds-8", "monster-sounds-9", "monster-sounds-10", "new-map", "succubus-fire-1", "succubus-laugh-1"],
    noiseMakers: [],
    //EXAMPLE MASTERS SOUNDS, NOT REPRESENTATIVE OF FINAL AUDIO
    masterSounds: ["bird-calls-high", "bird-calls-low"],
    activeSounds: [],
    load: function () {
        for (i = 0; i < this.masterSounds.length; i++) {
            masterSounds[masterSounds.length] = new Audio("audio/sfx" + masterSounds[i] + ".mp3")
        }
    },
    play: function () {

    },
    pause: function () {

    },
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

game.createBoard(16, 10, 60)



