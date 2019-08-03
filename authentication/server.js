
var dataRef = firebase.database();
var x = 0;
var y = 0;

$(canvas).mousemove(function () {
    x = event.clientX;     // Get the horizontal coordinate
    y = event.clientY;     // Get the vertical coordinate
    game.hoverTile = getSpace(x, y)
})

console.log('x: ' + x + ' y: ' + y)

dataRref.ref().push({
    email: email,
    x: x,
    y: y
});


var dbHoverX = (snapshot.val().x);
var dbHoverY = (snapshot.val().y);

var player = {
    activeTile: null,
    hoverTileX: dbHoverX,
    hoverTileY: dbHoverY,
    clickTileX:  ,
    clickTileY:

    //Populated by Travis' Login
    //Interfaces with Travis' Firebase User Data

}

console.log(snapshot.val().email);

database.ref().on("value", function (snapshot) {

});

//click listener
.addEventListener('click', event => {
    button.innerHTML = `Click event: ${event.detail}`;
});


// connected reference
connectedRef.on("value", function (snap) {

    if (snap.val()) {

        var con = connectionsRef.push(true);

        con.onDisconnect().remove();
    }
});