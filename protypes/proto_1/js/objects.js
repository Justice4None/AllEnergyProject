

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
            game.towers[i] = new tower(i)
            game.towers[i].x = Math.random() * w
            game.towers[i].y = Math.random() * h
            game.towers[i].render()
        },
        this.render = function () {
            console.log('x: ' + game.spaces[this.id].x)
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(this.x, this.y, this.size, this.size);
        },
        this.toggleHover = function () {
            console.log('x: ' + game.spaces[this.id].x)
            ctx.fillStyle = '#ff8833';
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    console.log('space added')
}

//Tower Base Object
function tower(space_id, tower_x, tower_y) {

    this.id = space_id,
        this.x = tower_x,
        this.y = tower_y,
        this.type = 'wall',
        this.color = '#ff3388',

        this.upgrade = function () {
            if (this.type === 'wall') {
                this.type = 'tower'
                this.color = '#ffaa88'
            }
            this.peer()
        },
        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        },
        this.wake = function () {
            //Detect visible tiles( spaces )
        },
        this.peer = function () {
            //Check tiles for occupancy
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
            //Track Enemies
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