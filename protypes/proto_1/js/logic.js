
$('#game_canvas').width = window.innerWidth
$('#game_canvas').height = window.innerHeight

var w = window.innerWidth
var h = window.innerHeight
var canvas = document.getElementById('game_canvas')
var ctx = canvas.getContext("2d")

ctx.canvas.width = w;
ctx.canvas.height = h;

var game = {
    canvas: $('#game_canvas'),
    buildLvl: function () {

    },
    towers: []
}

buildTowers(30)

function buildTowers(num) {

    for (var i = 0; i < num; i++) {

        game.towers[i] = new tower()
        game.towers[i].x = Math.random() * w
        game.towers[i].y = Math.random() * h
        game.towers[i].render()

    }

}

function tower() {

    this.type = 'wall',
        this.x = 0,
        this.y = 0,
        this.width = 16,
        this.height = 16,
        this.color = '#003388',

        this.upgrade = function () {
            if (this.type === 'wall') {
                this.type = 'tower'
                this.color = '#ffaa88'
            }
        },
        this.render = function () {

            //console.log(myTowers[i].x)
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);

        }
}

function unit() {

    this.type = 'goblin',
        this.health = 1,
        this.x = 100,
        this.y = 100,
        this.width = 8,
        this.height = 8,
        this.color = '#ff0000',

        this.move = function () {
            this.x++
            this.render()
        },

        this.die = function () {

        },

        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

}

var unit_1 = new unit()
unit_1.render()

$(canvas).on('click', function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    towerDetection(x, y)
    //unitDetection(x, y)
})

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



game.buildLvl()

var globalID
var count = 0

function repeatOften() {

    count++

    oscillateColor('#hud', 0.1, 0.8)

    unit_1.move()

    function oscillateColor(element, frequency, amplitude) {

        formula = Math.sin(count / 6 * frequency) * amplitude
        var concat = 'rgba( ' + formula * 255 + ', 0, 0, 1.0 )'
        $(element).css('background-color', concat)

    }

    globalID = requestAnimationFrame(repeatOften)

}

globalID = requestAnimationFrame(repeatOften)

