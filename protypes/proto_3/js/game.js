'use strict'

window.addEventListener('load', loadImages, false);

var towerGame;   // the global game object
var FRAME_RATE = 30;
var cellId = 0;

var bsImage;
var wallImag;
var aImage;
var ssImage;
var load = document.getElementById('loader');
var wrap;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++slider
// var sliderDiv = document.createElement('div');
// sliderDiv.setAttribute('id', 'sliderDiv');
// document.body.appendChild(sliderDiv);
/*
var slider1 = document.createElement('input');
slider1.setAttribute('type', 'range');
slider1.setAttribute('min', '0');
slider1.setAttribute('max', '1000');
slider1.setAttribute('id', 'slider1');
sliderDiv.appendChild(slider1); */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loadImages() {
    bsImage = new Image();
    bsImage.src = "resources/resources/images/spritesheets/buttons_1.png";
    wallImag = new Image();
    wallImag.src = "resources/resources/images/spritesheets/jungle_wall.png";
    ssImage = new Image();
    ssImage.src = "resources/resources/images/spritesheets/sprites2_v1.png";
    window.setTimeout(setup, 1500);
    aImage = new Image();
    aImage.src = "resources/resources/images/spritesheets/arrow.png"
}
function setup() {
    wrap = document.getElementById('wrapperDiv');
    load.style.display = 'none';
    wrap.style.display = 'block';

    towerGame = new Game();
    window.setTimeout(draw, 100);    // wait 100ms for resources to load then start draw loop
    //panelthings
}

function draw() {   // the animation loop
    towerGame.run();
    //console.clear();
    window.setTimeout(draw, 1000 / FRAME_RATE);  // come back here every interval
}



class Game {
    constructor() {
        this.isRunning = true;
        this.addTower = 0;
        this.currentTower = 0
        this.towerType = 0
        this.gameTime = 0
        this.towers = []
        this.enemies = []
        this.bullets = []
        this.dmg = [1, 5, 10, 15, 20]
        this.bankIncValue;
        this.textBankInc
        this.bankValue = 500
        this.rays = []
        this.towersBankValuesARR = []
        this.checkOnce = true;
        this.enemyNum = Math.floor(Math.random() > 1)
        this.enDa = []
        this.towImgData = []
        this.bulletImgData = []
        this.paused = false

        this.loadEnemyImages()
        this.score = 0
        this.wave = 0
        this.health = 100
        this.canvas = document.createElement("canvas");
        if (!this.canvas || !this.canvas.getContext)
            throw "No valid canvas found!";
        this.canvas.width = 900;
        this.canvas.height = 750;
        this.canvas.canDiv = document.getElementById('canDiv')
        this.canvas.canDiv.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.lastTime = Date.now();
        this.tileDivs = this.createTileDivs();
        this.loadDOMCallBacks(this.tileDivs)
        this.canvas.addEventListener('mousemove', this.handleCNVMouseMoved, false);
        this.canvas.addEventListener('mouseover', this.handleCNVMouseOver, false);
        this.canvas.addEventListener('click', this.handleCNVMouseClicked, false);
        this.currentWaveNum = 0
        this.wave = new Wave(this, AllWaves[this.currentWaveNum])
        this.mouseX = 0
        this.mouseY = 0
        this.loadWallImage()
        this.level = new Level1(this)
        this.w = 50
        this.done = false

        window.onkeydown = function (e) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code === 38) { //up key
                //console.clear();
                //console.log("Basic Tower: " + slider1.value);
            }
        };


        // big grid boy
        this.grid = []
        this.cols = Math.floor(this.canvas.width / this.w)
        this.rows = Math.floor(this.canvas.height / this.w)

        this.loadGrid();
        this.root = this.grid[this.cols - 1][this.rows - 1]
        this.brushfire()


        var button = $("#pauseButton").on('click', this.paused, false)
    }



    loadWallImage() {
        // grab the wall image from the  sprite sheet
        var f = new Image
        f.src = "resources/resources/images/spritesheets/jungle_wall.png"
        // console.log(f.x);
        Cell.wallImage = f;

    }


    loadEnemyImages() {
        var enemyData = [];


        for (var i = 1; i <= 5; i++) {
            var propName = 'E' + i + '0000'
            var f = jsonx.frames[propName].frame;
            this.enDa.push(f);
        }
    };

    hideImgElement() { this.style.display = 'none'; }
    run() {

        if (!this.paused) {
            this.level.run()
            // this.updateFireRateSliders()
            // this.updateDamageSliders()
            // this.updateTileDivs()
        }
    }
    pause() {
        var butt = $("#pauseButton");
        towerGame.paused = !towerGame.paused;
        if (towerGame.paused) butt.innerHTML = 'play'
        if (!towerGame.paused) butt.innerHTML = 'pause'
    }
    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    //find the distance file
    brushfire(undo) {
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                var cell = this.grid[i][j];
                cell.dist = this.cols * this.rows * 10; // max distance
                cell.vec = null
                cell.parent = 0
                cell.addNeighbors(this, this.grid);
            }
        }
        this.root.dist = 0;
        this.root.occupied = false;
        var queue = [this.root];

        //loops cells as long as queue is not empty
        while (queue.length) {
            var current = queue.shift()
            for (let j = 0; j < current.neighbors.length; j++) {
                let neighbor = current.neighbors[j]
                var dist = current.dist + 10;
                if (current.loc.x != neighbor.loc.x && current.loc.y != neighbor.loc.y)
                    dist = current.dist + 14;
                //diagonals are included above
                if (neighbor.dist > dist) {
                    neighbor.parent = current;
                    neighbor.dist = dist;
                    queue.push(neighbor);
                }
            }
        }
        if (!this.validMap()) {
            if (undo) {
                undo()
                this.brushfire()
            } else {
                //delete enemies
                for (let i = 0; i, this.enemies.length; i++) {
                    let enemy = Game.enemies[i];
                    if (!enemy.currentCell.parent)
                        enemy.kill = true;
                }
                console.log("brushfire created an invalid map and no undo was inputed")

            }
        }
    }




    validMap() {
        if (this.grid[0][0].occupied || this.grid[0][0].hasTower) {
            return false;
        } else {
            for (var i = 0; i < this.cols; i++) {
                for (var j = 0; j < this.rows; j++) {
                    var cell = this.grid[i][j];
                    if (!cell.parent && !(cell.occupied || cell.hasTower) && cell != this.root) {
                        return false;
                    }
                }
            }
            return true;

        }
    }
    undo(cell, tower) {
        if (tower) {
            return function () {
                cell.hasTower = false;
                towerGame.towers.splice(towerGame.towers.indexOf(tower))
                throw "you cannot place a tower here"
            }
        } else {
            return function () {
                if (cell.occupied) {
                    cell.occupied = false;
                    towerGame.bankValue += 30
                } else {
                    cell.occupied = true;
                    towerGame.bankValue -= 30
                }
            }
        }
    }
    sendEnemies() {
        var numEnemies = Math.random() * 5;
        var row, col, startCell, i, j;
        for (i = 0; i < numEnemies; i++) {
            for (j = 0; j < 3; j++) {
                startCell = this.grid[0][0];
                if (startCell && startCell.parent)
                    break;
            }
            if (j < 3) {
                let randomPath = Math.floor(Math.random() * 2);
                this.enemies.push(new Enemy(this, startCell, randomPath));
            }
        }

    }
    controlWaves() {
        if (this.wave.isWaveOver()) {
            this.currentWaveNum += 1
            this.wave = new Wave(this, AllWaves[this.currentWaveNum])
        } else {
            this.wave.run()
        }
    }
    removeEnemies() {
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            if (this.enemies[i].kill)
                this.enemies.splice(i, 1);
        }
    }
    removeBullets() {
        if (this.bullets.length < 1) return;
        for (let i = this.bullets.length - 1; i >= 0; i--) {

            if (this.bullets[i].loc.x < 0 ||
                this.bullets[i].loc.x > this.canvas.width ||
                this.bullets[i].loc.y < 0 ||
                this.bullets[i].loc.y > this.canvas.height) {
                this.bullets.splice(i, 1);
            }
        }
    }
    updateInfoElements(time) {
        let infoElements = document.getElementById('infoDiv').getElementsByClassName('infoTileDiv');
        for (let i = 0; i < infoElements.length - 1; i++) {
            let info = infoElements[i];
            // change the html content after condition--use indexOf
            if (info.innerHTML.indexOf('Bank') != -1) {
                info.innerHTML = 'Bank <br/>';
                var value = document.createElement('p');
                value.style.fontSize = '10pt';
                value.innerHTML = this.bankValue;
                info.appendChild(value)
                if (this.bankValue < 0) {
                    this.bankValue == 0;
                }
            } else if (info.innerHTML.indexOf('Time') != -1) {
                info.innerHTML = 'Time <br/>';
                var value = document.createElement('p');
                value.style.fontSize = '10pt';
                value.innerHTML = time;
                info.appendChild(value);
            }
            if (info.innerHTML.indexOf('Score') != -1) {
                info.innerHTML = 'Score <br/>';
                var value = document.createElement('p');
                value.style.fontSize = '10pt';
                value.innerHTML = this.score;
                info.appendChild(value);
            }
            if (info.innerHTML.indexOf('Wave') != -1) {
                info.innerHTML = 'Wave <br/>';
                var value = document.createElement('p');
                value.style.fontSize = '10pt';
                value.innerHTML = this.wave.waveJson.name;
                info.appendChild(value);
            }
            if (info.innerHTML.indexOf('Health') != -1) {
                info.innerHTML = 'Health <br/>';
                var value = document.createElement('p');
                value.style.fontSize = '12pt';
                value.innerHTML = this.health;
                info.appendChild(value);
            }
        }
    }
    updateCostInfoElement(value) {
        let infoElements = document.getElementById('infoDiv').getElementsByClassName('infoTileDiv');
        let info = infoElements[infoElements.length - 3];
        info.innerHTML = 'Cost <br/>' + value;
    }

    updateGameTime() {
        var millis = Date.now();
        if (millis - this.lastTime >= 1000) {
            this.gameTime++;
            this.lastTime = millis;
        }
        return this.gameTime;
    }
    loadGrid() {
        for (var i = 0; i < this.cols; i++) {
            this.grid[i] = [];
            for (var j = 0; j < this.rows; j++) {
                this.grid[i][j] = new Cell(this, JSVector((i * this.w), (j * this.w)), ++cellId)
                // if (Math.random() * 100 < 20) this.grid[i][j].occupied = true;




            }
        }
    }// ++++ end of loadGrid
    createTowerBitmaps(ssImage, mtd, index) {
        if (!ssImage || !bsImage.complete) {
            alert("Images not loaded");
            // quit code
        }
        var propertyName = "B" + (index + 1) + "0000";
        var frame = buttonsJSON.frames[propertyName].frame;
        var bulletPropertyName = "p" + (index + 1) + "0000";
        var bulletFrame = jsonx.frames[bulletPropertyName].frame;
        this.towImgData.push(frame);
        this.bulletImgData.push(bulletFrame);
        mtd.cnvTurImg = this.towImgData[index];
        mtd.cnvBulImg = this.bulletImgData[index];

    }
    updateTileDivs() {
        for (var i = 0; i < 5; i++) {
            this.towersBankValuesARR[i].cost = this.cost
        }
    }
    createTileDivs() {
        var tiles = [];
        var buttons = ["B10000", "B20000", "B30000", "B40000", "B50000", "B60000"];
        //  loop through the towers and DO NOT include wall element
        for (var i = 0; i < 5; i++) {
            var mtd = document.createElement("div"); // createDiv("");
            if (i == 0) {
                mtd.ability = "normal";
                mtd.cost = 10;//200;
                // mtd.style.backgroundImage = "url(resources/resources/images/spritesheets/arrow.png)"

            } else if (i == 1) {
                mtd.ability = "fast";
                mtd.cost = 20;

            } else if (i == 2) {
                mtd.ability = "freeze";
                mtd.cost = 30;

            } else if (i == 3) {
                mtd.ability = "explosive";
                mtd.cost = 40;

            } else {
                mtd.ability = "ray";
                mtd.cost = 50;
            }// createDiv("");

            var b = buttons[i];
            var button = buttonsJSON.frames[b].frame;

            var innerDiv = document.createElement("div");
            innerDiv.id = "innerDiv" + i;
            innerDiv.style.width = "90px";
            innerDiv.style.height = "90px";
            innerDiv.style.backgroundImage = "url(resources/resources/images/spritesheets/buttons_1.png)";
            innerDiv.style.backgroundPosition = `${-button.x}px ${-button.y}px`;
            innerDiv.style.margin = "5px";
            mtd.appendChild(innerDiv);

            document.getElementById("menuDiv").appendChild(mtd);


            //    mtd.cost = 100*i +50;
            mtd.setAttribute('title', 'Cost = ' + mtd.cost);
            mtd.id = 'towImgDiv' + i;
            tiles.push(mtd);
            this.towersBankValuesARR.push(mtd);
            this.createTowerBitmaps(ssImage, mtd, i)

        }
        return tiles;

    }

    getBankValue() {
        return this.bankValue;
    }
    //  Logic to add tower +++++++++++++++++++++++
    canAddTower(cell) {
        // add conditions before allowing user to place turret
        // Some money required but also cannot place tower on a cell
        // of the grid that is occupied or is the root cell
        if (towerGame.placingTower) {
            if (!cell.occupied && !cell.hasTower && cell != towerGame.root) {
                return true;
            }
            return (false);
        }
    }

    createTower(mtd) { // menu turret div
        // create a new tower object and add to array list
        // the menu tower div contains the parameters for the tower
        //  console.log("Bankvalue = " + this.bankValue);
        //  console.log("Cost = " + mtd.cost);
        if (this.bankValue >= mtd.cost) {
            var tower = new Tower(mtd.cost, mtd.cnvTurImg, mtd.cnvBulImg, mtd.ability);
            //  console.log(mtd.cnvTurImg);
            if (tower) {
                this.towers.push(tower); // add tower to the end of the array of towers
                return (true);
            }
            else {
                println('failed to make tower');
            }
        }
        else alert("Insufficient Funds!");
        return (false);
    }

    placeTower(cell) {
        //  place tower into play area at center of cell
        towerGame.towers[towerGame.towers.length - 1].loc = cell.center.copy();
        //    console.log(towerGame.towers[towerGame.towers.length-1].loc.toString());
        //  tower needs to know if it is placed
        towerGame.towers[towerGame.towers.length - 1].placed = true;
        cell.hasTower = true;
        //  only one tower placed at a time
        towerGame.placingTower = false;
        let placeSound = new Audio("audio/tower-upgrade.mp3")
        placeSound.play()
        // placing a tower makes the cell containing the tower
        // unavailable to enemies the same as if it were
        // occupied (blocked)
        towerGame.brushfire(towerGame.undo(cell, towerGame.towers[towerGame.towers.length - 1]));   // all new distances and parents
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ load callbacks
    loadDOMCallBacks(menuTiles) {
        //  load tile menu callbacks
        for (var i = 0; i < menuTiles.length; i++) {
            var mtd = menuTiles[i];
            mtd.addEventListener('mouseover', this.tileRollOver, false);
            mtd.addEventListener('mouseout', this.tileRollOut, false);
            mtd.addEventListener('mousedown', this.tilePressed, false);
            mtd.addEventListener('click', this.tileClicked, false);
        }

    }

    //+++++++++++++++++++++++++   tile menu callbacks
    tileRollOver() {
        this.style.backgroundColor = '#f7e22a';
        towerGame.updateCostInfoElement(this.cost);
    }

    tileRollOut() {
        this.style.backgroundColor = '#DDD';
        towerGame.updateCostInfoElement("");
    }

    tilePressed() {
        this.style.backgroundColor = '#900';
    }

    tileClicked() {
        //if user clicks tile and not placing tile change placing to true
        // can add Tower checks cost and other conditions
        if (towerGame.placingTower === true) return;
        if (towerGame.createTower(this))
            towerGame.placingTower = true;



    }
    //  ++++++++++++++++++++++++++++++++++++++++++++++++++    mouse handlers
    handleCNVMouseOver() {
        if (towerGame.towers.length < 1) return;
        towerGame.towers[towerGame.towers.length - 1].visible = true;
    }

    handleCNVMouseMoved(event) {
        // add some properties to the canvas to track the mouse.
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
        if (towerGame.towers.length < 1) return;
        if (!towerGame.towers[towerGame.towers.length - 1].placed &&
            towerGame.placingTower === true) {
            //follow mouse
            towerGame.towers[towerGame.towers.length - 1].loc.x = this.mouseX;
            towerGame.towers[towerGame.towers.length - 1].loc.y = this.mouseY;
            //        console.log(this.mouseX + ", " + this.mouseY + ", " + towerGame.towers[towerGame.towers.length-1].loc.toString());
        }
    }

    handleCNVMouseClicked(event) {
        var row = Math.floor(event.offsetY / towerGame.w);
        var col = Math.floor(event.offsetX / towerGame.w);
        var cell = towerGame.grid[col][row];

        if (towerGame.placingTower && towerGame.canAddTower(cell)) {
            towerGame.placeTower(cell);
        }

        else if (!towerGame.placingTower && !cell.hasTower) {
            // toggle the occupied property of the clicked cell
            if (!cell.occupied && towerGame.bankValue >= 30) {
                towerGame.bankValue -= 30;
                cell.occupied = true;
            } else if (!cell.occupied) {

            }
            else {
                towerGame.bankValue += 30;
                cell.occupied = false;
            }
            towerGame.brushfire(towerGame.undo(cell));   // all new distances and parents
        }
    }
    // collision detection utility
    distance(c0, c1) {
        this.x0 = c0.x;
        this.y0 = c0.y;
        this.x1 = c1.x;
        this.y1 = c1.y;

        var dx = this.x1 - this.x0;
        var dy = this.y1 - this.y0;

        return Math.sqrt(dx * dx + dy * dy);

    }

    distanceXY(x0, y0, x1, y1) {
        var dx = x1 - x0;
        var dy = y1 - y0;

        return Math.sqrt(dx * dx + dy * dy);
    }

    inRange(value, min, max) {
        return value >= Math.min(min, max) && Math.max(min, max) <= Math.max(min, max);
    }

    //parameters:
    //loc1 = location vector of first circle
    //loc2 = location vector of second circle
    //rad1 = radius of first circle
    //rad2 = radius of second circle
    circleCollision(loc1, loc2, rad1, rad2) {
        if (this.distance(loc1, loc2) <= rad1 + rad2) {
            return true;
        }
    }

    //parameters:
    //x, y = locations of point
    //circx, circy = locations of circle
    //radius = radius of circle
    circlePointCollision(x, y, circx, circy, radius) {
        if (this.distanceXY(x, y, circx, circy) < radius) {
            return true;
        }
    }

    //parameters:
    //x, y = locations of point
    //loc = location vector of rectangle
    //rect width, height = width and height of rectangle
    rectanglePointCollision(x, y, loc, rectWidth, rectHeight) {
        if (this.inRange(x, loc.x, loc.x + rectWidth) && inRange(y, loc.y, loc.y + rectHeight)) {
            return true;
        }
    }


    range(min0, max0, min1, max1) {
        return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1);
    }


    //parameters:
    //loc1 = location vector of first rectangle
    //loc2 = location vector of second rectangle
    rectangleCollision(loc1, rectWidth1, rectHeight1, loc2, rectWidth2, rectHeight2) {
        if (this.range(loc1.x, loc1.x + rectWidth1, loc2.x, loc2.x + rectWidth2) &&
            this.range(loc1.y, loc1.y + rectHeight1, loc2.y, loc2.y + rectHeight2)) {
            return true;
        }
    }


}




