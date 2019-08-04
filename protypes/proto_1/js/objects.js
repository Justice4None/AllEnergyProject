//Game Tile Base Object
function space(id, x, y) {
    this.id = id,
        this.x = x,
        this.y = y,
        this.size = game.tileSize,
        this.developed = false,
        this.occupants = [],
        this.watching_towers = [],
        this.occupied = false,
        this.tower = null,
        this.build = function (space_id) {
            var t = new tower(space_id)
            game.towers.push(t)
        },
        this.render = function (color) {
            this.color = color
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
}

//Tower Base Object
function tower(space_id) {

    game.spaces[space_id].developed = true
    game.spaces[space_id].tower = this

    this.id = space_id,
        this.x = game.spaces[this.id].x,
        this.y = game.spaces[this.id].y,
        this.type = 'wall',
        this.level = 1,
        this.color = '#000000',
        this.hoverColor = '#550000',
        this.range = 2,

        this.upgrade = function () {

            this.level++

            if (this.type === 'wall') {
                this.type = 'tower'
                this.color = '#ff3333'
                this.hoverColor = '#ff8888'
            }

            this.peer()
        },
        this.render = function () {

            var img = new Image()
            img.src = 'gfx/buildings/tower_' + this.level + '.png'


            if (this.id === game.hoverTile) {
                ctx.drawImage(img, this.x, this.y, game.tileSize, game.tileSize)
            } else {
                ctx.drawImage(img, this.x, this.y, game.tileSize, game.tileSize)
            }
        },
        this.wake = function () {
            //Detect visible tiles( spaces )
            game.spaces[this.id].occupied = true
        },
        this.peer = function () {
            //Check proximal tiles for occupancy
            if (game.spaces.length >= 1) {
                console.log("occupied")

            }
        },
        this.fall = function () {
            //console.log(myTowers[i].x)
        }
}

function arrow(space_id) {
    this.x =
        this.y
}

//Unit Base Object
class Unit {
    constructor(loc) {
        this.loc = loc;
        this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 0 - 3)
        this.acc = new JSVector(0, 0)
        this.rad = 10;
        this.clr = "rgba(200, 0, 0, .5)";


    }
    run() {
        this.update()
        this.render()
        this.checkEdges()
    }
    checkEdges() {
        if (this.loc.x < 0 || this.loc.x > canvas.offsetWidth) this.vel.x = - this.vel.x;
        if (this.loc.y < 0 || this.loc.y > canvas.offsetHeight) this.vel.y = - this.vel.y;
    }
    update() {
        var col = Math.floor(this.loc.x / game.boardWidth);
        var row = Math.floor(this.loc.y / game.boardHeight)
        if (game.grid[col][row] === game.goal) return;
        if (game.grid[col][row] && !game.grid[col][row].occupied) {
            var currCell = game.grid[col][row];
            var nextCell = currCell.smallestNeighbour;

            // this.acc = this.acc.subGetNew(nextCell.center, this.loc);
            this.acc.setMagnitude(0, 5);

        }
        this.vel.add(this.acc);
        // this.vel.limit(2)
        this.loc.add(this.vel);

    }
    render() {
        ctx.beginPath();
        ctx.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.stroke();
        ctx.fillStyle = this.clr;
        ctx.fill();
    }


}
class cell {
    constructor(game, id, c, r) {
        var game = game;
        this.loc = new JSVector(c * game.tileSize, r * game.tileSize)
        this.center = new JSVector(this.loc.x + game.tileSize / 2, this.loc.y + game.tileSize / 2)
        this.id = id;
        this.c = c;
        this.r = r;
        this.neighbours = [];
        this.value = -1;
        this.occupied = false;
        this.getSmallestNeighbourIndex = 0;
        this.smallestNeighbour = null;

    }
    render() {
        ctx.font = "10px, arial"
        if (this.occupied) {
            ctx.strokeStyle = "white"
        } else {
            ctx.strokeStyle = "black"
        }
        ctx.strokeRect(this.loc.x, this.loc.y, game.tileSize, game.tileSize)
        ctx.fillText(this.value, this.loc.x, this.loc.y + 6, game.tileSize, game.tileSize)
    }
    loadNeighbors() {
        var c = this.c
        var r = this.r
        var grid = game.grid

        //n
        if (r > 0 && !this.occupied)
            this.neighbours.push(grid[c][r - 1])
        //e
        if (this.c > grid.length - 1 && !this.occupied)
            this.neighbours.push(grid[c + 1][r])
        //s
        if (this.r > grid[c].length - 1 && !this.occupied)
            this.neighbours.push(grid[c][r + 1])
        //w
        if (this.c > 0 && !this.occupied)
            this.neighbours.push(grid[c - 1][r])
    }
    getSmallestNeighbourValue() {
        var smallest = 10000;
        for (let i = 0; i < this.neighbours.length; i++) {
            if (this.neighbours[i].value < smallest) {
                smallest = this.neighbours[i].value;
                this.getSmallestNeighbourIndex = i;
            }
        }
        this.smallestNeighbour = this.neighbours[this.getSmallestNeighbourIndex]
    }

}