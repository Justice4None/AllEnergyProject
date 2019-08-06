
var dataRef = firebase.database();
var x = 0;
var y = 0;
//on click push XY coordinates to database
$(canvas).on('click', function () {
    x = event.clientX;     // Get the horizontal coordinate
    y = event.clientY;     // Get the vertical coordinate
    game.hoverTile = getSpace(x, y)

    console.log('x: ' + x + ' y: ' + y)

    dataRref.ref().push({
        email: email,
        x: x,
        y: y
    });
});

/*
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
*/


database.ref().on("value", function (snapshot) {
    console.log(snapshot.val().email);
});

//click listener
.addEventListener('click', event => {
    button.innerHTML = `Click event: ${event.detail}`;
});


// connected reference
var connectedRef = firebase.database().ref(".info/connected");
connectedRef.on("value", function (snap) {
    console.log('connectedRef working' + .info / connected)
    if (snap.val()) {

        var con = connectionsRef.push(true);

        con.onDisconnect().remove();
    }
});




connectedRef.on("value", function (snap) {
    if (snap.val() === true) {
        alert("connected");
    } else {
        alert("not connected");
    }
});

