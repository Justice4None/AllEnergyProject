
$('#game_canvas').width = window.innerWidth
$('#game_canvas').height = window.innerHeight

var w = window.innerWidth
var h = window.innerHeight
var canvas = document.getElementById('game_canvas')

var game = {
    canvas: $('#game_canvas'),
    buildLvl: function () {
    },
}

var myTower = new tower()

buildTowers(30)

function buildTowers(num) {

    var myTowers = []

    for (var i = 0; i < num; i++) {

        myTowers[i] = new tower()
        myTowers[i].x = Math.random() * w
        myTowers[i].y = Math.random() * h
        console.log(myTowers[i].x)
        myTowers[i].render()

    }
}

function tower() {

    this.type = 'wall',
        this.health = 10,
        this.x = 0,
        this.y = 0,
        this.width = 16,
        this.height = 16,
        this.color = 'rgba( ' + Math.random() * 256 + ', ' + Math.random() * 256 + ', ' + Math.random() * 256 + ', 1.0 )',
        this.ctx = document.getElementById('game_canvas').getContext("2d"),
        this.upgrade = function () {
            if (this.type === 'wall') {
                this.type = 'tower'
                this.color = '#ffaa88'
            }
        },
        this.render = function () {

            this.ctx.canvas.width = w;
            this.ctx.canvas.height = h;
            //this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.x, this.y, 16, 16);

        }

}

game.buildLvl()

var globalID
var count = 0

function repeatOften() {

    count++

    //oscillateColor('#hud', 0.1, 0.8)

    function oscillateColor(element, frequency, amplitude) {

        formula = Math.sin(count / 6 * frequency) * amplitude
        var concat = 'rgba( ' + formula * 255 + ', 0, 0, 1.0 )'
        $(element).css('background-color', concat)

    }

    globalID = requestAnimationFrame(repeatOften)

}

globalID = requestAnimationFrame(repeatOften)

