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
    grid: [],
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
            for (var i = 0; i < boardWidth; i++) {
                game.spaces[boardCount] = new space(boardCount, i * game.tileSize, j * game.tileSize)
                boardCount++
            }
        }
        this.loadGrid()

        console.log(this.grid)
    },
    loadGrid: function () {
        for (var c = 0; c < game.boardWidth; c++) {
            game.grid.push([])
            for (var r = 0; r < game.boardHeight; r++) {
                game.grid[c].push(new cell(this, game.boardCount++, c, r))
                if (Math.random() * 100 < 10) this.grid[c][r].occupied = true
            }
        }

        for (let c = 0; c < game.boardWidth; c++) {
            for (let r = 0; r < game.boardHeight; r++) {
                game.grid[c][r].loadNeighbors();
            }
        }
        // sort of a starting point
        this.grid[0][0].occupied = false;

        let nc = this.grid.length - 1;
        let nr = this.grid[nc].length - 1;

        this.grid[nc][nr].occupied = false;
        //set a goal
        this.goal = game.grid[this.boardWidth - 1][this.boardHeight - 1]
        this.goal.occupied = false
        this.goal.value = 0
        this.brushfire();

    },
    brushfire: function () {
        //number field
        let checkCells = [this.goal];
        while (checkCells.length) {
            var curr = checkCells.shift()
            for (var i = 0; i < curr.neighbours.length; i++) {
                if (curr.neighbours[i].value === -1) {
                    checkCells.push(curr.neighbours[i])
                    curr.neighbours[i].value = curr.value + 1;
                }
            }
        }
        // vector field
        // for each cell in the grid
        for (var c = 0; c < game.grid.length; c++) {
            for (r = 0; r < game.grid[c].length; r++) {
                // find the smallest value
                if (!game.grid[c][r].occupied) game.grid[c][r].getSmallestNeighbourValue()
            }
        }
    },

    addTower: function () {
        game.spaces[game.hoverTile].build(getSpace())
        game.spaces[game.hoverTile].developed === true
    },
    addUnit: function () {
        var numEnemies = Math.random() * 5;
        let startCell;// i, j;
        for (var i = 0; i < numEnemies; i++) {
            for (j = 0; j < 3; j++) {
                let startCell = this.grid[Math.random() * 0][Math.random() * 0]
                if (startCell && startCell.parent)
                    break;
            }

        }
        if (j < 3) {
            let randomPath = Math.floor(Math.random() * 2)
            this.units.push(new Unit(this.grid, startCell, randomPath))
        }
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
        // game.units.update()
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
    grid: function () {
        for (var c = 0; c < game.boardWidth; c++) {
            for (var r = 0; r < game.boardHeight; r++) {
                game.grid[c][r].render()
            }
        }
    },

    towers: function () {
        for (var i = 0; i < game.towers.length; i++) {
            game.towers[i].render()
        }
    },
    units: function () {
        for (var i = 0; i < game.units.length; i++) {
            game.units[i].run()
        }
    }

}

//Animation Timer
var globalID
var count = 0

function animate() {

    // count++

    render.background()
    render.tiles()
    render.towers()
    render.units()
    render.grid()

    globalID = requestAnimationFrame(animate)

}

globalID = requestAnimationFrame(animate)
update.window()

game.addUnit(5)
game.createBoard(16, 10)



