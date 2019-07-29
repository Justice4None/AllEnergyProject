
//Game Tile Base Object
function space(id, x, y) {
    this.id = id,
        this.x = x,
        this.y = y,
        this.size = game.tileSize,
        this.building = 'none',
        this.occupants = [],
        this.watching_towers = [],
        this.developed = false,
        this.occupied = false,
        this.build = function (space_id) {
            var t = new tower(space_id)
            game.towers.push(t)
        },
        this.render = function (color) {
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
}

//Tower Base Object
function tower(space_id) {

    this.id = space_id,
        this.x = game.spaces[this.id].x,
        this.y = game.spaces[this.id].y,
        this.type = 'wall',
        this.color = '#000000',
        this.range = 2,

        this.upgrade = function () {
            if (this.type === 'wall') {
                this.type = 'tower'
                this.color = '#ffaa88'
            }
            this.peer()
        },
        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, game.tileSize, game.tileSize);
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
        }
}

//Unit Base Object
function unit(unit_id, space_id, type, x, y, speed, maxHealth, health, damage, ac) {

    this.id = unit_id,
        this.space = space_id,
        this.type = type,
        this.x = x,
        this.y = y,
        this.target_y = x,
        this.target_x = y,
        this.speed = speed,
        this.maxHealth = maxHealth,
        this.health = health,
        this.damage = damage,
        this.ac = ac,
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
}