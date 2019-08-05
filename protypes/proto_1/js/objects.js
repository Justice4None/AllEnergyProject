
//Game Tile Base Object
function space(id, x, y) {
    this.id = id,
        this.x = x,
        this.y = y,
        this.size = game.tileSize,
        this.developed = false,
        this.occupied = false,
        this.occupants = [],
        this.watching_towers = [],
        this.tower = null,
        this.build = function (space_id) {
            var t = new tower(space_id)
            game.towers.push(t)
        },
        this.render = function (color) {

            var ground_img = new Image()
            ground_img.src = 'gfx/tiles/gravel.png'

            ctx.drawImage(ground_img, this.x, this.y, game.tileSize, game.tileSize)

            //this.color = color
            //ctx.fillStyle = color
            //ctx.fillRect(this.x, this.y, this.size, this.size);
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
        },
        this.fall = function () {
            //console.log(myTowers[i].x)
        },
        this.shoot = function () {

        }
}

//Unit Base Object
function unit(unit_id, space_id, x, y, type, speed) {

    this.id = unit_id,
        this.space = space_id,
        this.type = type,
        this.color = '#ff00ff',
        this.x = x,
        this.y = y,
        this.target_y = x,
        this.target_x = y,
        this.speed = speed,
        this.maxHealth = maxHealth,
        this.health = health,
        this.damage = damage,
        this.ac = ac,
        this.sounds = [],
        this.addSound = function (name, url) {
            //load sound file from server
            //push file to this.sounds[]
            //push file to audio.files[]
            //push object to audio.noisemakers[]
        },
        this.setSound = function (sound) {
            //assign new sound
            //remove old sound
        },
        this.playSound = function (sound) {
            //play passed sound file
        },
        this.pauseSound = function (sound) {
            //play passed sound file
        }
    this.spawn = function (x, y) {
        //Spawn Logic
    },
        this.findPath = function (x, y, target_x, target_y) {
            //Pathfinding Logic
            //Map Obstruction Test( Before an Obsticle is placed)
            //if( target_y === y && target_x === x ){ !DONT FIND PATH! }
        },
        this.move = function (x, y) {
            //Movement Logic
            //if( new space ){ 
            //  this.space = new space
            //  this.peer() 
            //}
        },
        this.setTarget = function (new_target_x, new_target_y) {
            //Movement Logic
        },
        this.attack = function (target) {
            //Attack Logic
        },
        this.peer = function (target) {
            //Track proximal Units in 8 Spaces( N,NE,E,SE,S,SW,W,NW ) + in occupied space
        },
        this.takeDamage = function () {
            //Health Reduction Logic
        },
        this.die = function () {
            //Death Logic
        },
        this.rotate = function () {
            //Rotation Trig Logic
            //Sprite Shift
        }
    this.render = function () {
        ctx.fillStyle = this.color;
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    }
}