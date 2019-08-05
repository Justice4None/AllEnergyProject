
//Detection( UNDER CONSTRUCTION )

//returns the space which the xy point is within
function getSpace() {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    for (var i = 0; i < game.spaces.length; i++) {
        if (x > game.spaces[i].x && x < game.spaces[i].x + game.tileSize && y > game.spaces[i].y && y < game.spaces[i].y + game.tileSize) {
            return i
        }
    }
}

//returns the space which the xy point is within
function isTower(id) {

    for (var i = 0; i < game.towers.length; i++) {
        if (x >= game.towers[i].x && x < game.towers[i].x + game.towers[i].width && y >= game.towers[i].y && y < game.towers[i].y + game.towers[i].height) {
            console.log('tower clicked')
            game.towers[i].upgrade()
            game.towers[i].render()
        }
    }
}

function findNeigbor(id, direction) {
    // function euclideanDistance() { };
    //NSEW space neighbor reference
    var N = y - 1,
        S = y + 1,
        E = x + 1,
        W = x - 1,
        myN = n > -1 && canWalkHere(x, N),
        myS = S < game.boardHeight && canWalkHere(x, S),
        MyE = E < game.boardWidth && canWalkHere(E, y),
        myW = w > -1 && canWalkHere(W, y);
    if (myN)
        game.spaces.push({ x: x, y: N });
    if (myE)
        game.spaces.push({ x: E, y: y });
    if (myS)
        game.spaces.push({ x: x, y: S });
    if (myW)
        game.spaces.push({ x: W, y: y });
    neighbours(myN, myS, myE, myW, N, S, E, W, game.spaces);
    return game.spaces;
    // function diagonalNeighours() { };



}

//returns an array of the unit objects occupying in the space
function getUnits() {
    //space[].occupants
}