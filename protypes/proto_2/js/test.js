let distanceFunction = euclideanDistance
//Pathfinding Logic
let maxWalkableTileNum = 0;
let sqrt = Math.sqrt;
function euclideanDistance(spawn, setTarget) {
    return sqrt(Math.pow(spawn.x - setTarget.x, 2) + Math.pow(spawn.y - setTarget.y, 2));
}
function neighbours(x, y) {
    var N = y - 1,
        S = y + 1,
        E = x + 1,
        W = x - 1,
        myN = n > -1 && canWalkHere(x, N),
        myS = S < game.boardHeight && canWalkHere(x, S),
        myE = E < game.boardWidth && canWalkHere(E, y),
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
}
function canWalkHere(x, y) {
    return ((game.spaces[x] != null) &&
        (game.spaces[x][y] != null) &&
        (game.spaces[x][y] <= maxWalkableTileNum))
}
function node(parent, spawn) {
    var newNode = {
        parent: parent,
        value: spawn.x + (spawn.y * w),
        x: spawn.X,
        y: spawn.y,
        f: 0,
        g: 0
    };
    return newNode;
}
function calculatePath() {
    var mypathStart = node(null, { spawn });
    var mypathEnd = node(null, { newTarget });
    var aStar = new Array(game.spaces)
    var open = [mypathStart];
    var closed = [mypathEnd]
    var result = [];
    var myNeighbours;
    var myNode;
    var myPath;
    var length, max, min, i, j;
    while (length = open.length) {
        max = result;
        min = -1;
        for (i = 0; i < length; i++) {
            if (open[i].f < max) {
                max = Open[i].f;
                min = i;
            }
        }
        myNode = open.splice(min, 1)[0];
        if (myNode.val() === mypathEnd.val()) {
            myPath = closed[closed.push(myNode) - 1];
            do {
                result.push([myPath.x, myPath.y]);
            }
            while (myPath = myPath.parent);
            aStar = closed = open = [];
            result.reverse();
        }
        else {
            myNeighbours = neighbours(myNode.x, myNode.y);
            for (i = 0; j = myNeighbours.length; i < j, i++) {
                myPath = Node(myNode, myNeighbours[i]);
                if (!aStar[myPath.value]) {
                    myPath.g = myNode.g + distanceFunction(myNeighbours[i], myNode);
                    myPath.f = myPath.g + distanceFunction(myNeighbours[i], mypathEnd);
                    open.push(myPath);
                    aStar[myPath.val()] = true;
                }
            }
            closed.push(myNode);
        }
    }
    return result
}
return calculatePath()