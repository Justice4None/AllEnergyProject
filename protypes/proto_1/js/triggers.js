
//User Input Events
$(canvas).mousemove(function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    //towerDetection(x, y)
    spaceDetection(x, y)
    console.log('x: ' + x + ' y: ' + y)
})

$(canvas).on('click', function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    towerDetection(x, y)
    //unitDetection(x, y)
})

$(window).resize(function () {
    update.window()
})