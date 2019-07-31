
//CSS ANIMATION FUNCTIONS

function oscillateColor(element, frequency, amplitude) {

    formula = Math.sin(count / 6 * frequency) * amplitude
    var concat = 'rgba( ' + formula * 255 + ', 0, 0, 1.0 )'
    $(element).css('background-color', concat)

}

function billboardFog(weight, scale) {

}

function parallaxFog(weight, scale) {

}