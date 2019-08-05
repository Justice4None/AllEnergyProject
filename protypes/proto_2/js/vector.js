var JSVector = function (x, y) {
    this.x = x || 0; //if there is no parameter
    this.y = y || 0;
}

JSVector.prototype.add = function (vec) {
    this.x += vec.x || 0;
    this.y = + vec.y || 0;
}
JSVector.prototype.sub = function (vec) {
    this.x -= vec.x || 0;
    this.y -= vec.y || 0;

}
JSVector.addGetNew = function (x, y) {
    var x = this.x += vec.x || 0;
    var y = this.y += vec.y || 0;
    var newVec = new JSVector(x, y)
    return newVec;
}
JSVector.subGetNew = function (x, y) {
    var x = this.x -= vec.x || 0;
    var y = this.y -= vec.y || 0;
    var newVec = new JSVector(x, y)
    return newVec;
}
JSVector.prototype.getDirection = function () {
    return Math.atan2(this.y, this.x);
}
JSVector.prototype.getMagnitude = function () {
    var x2 = this.x * this.x;
    var y2 = this.y * this.y;
    return Math.sqrt(x2 + y2)
}
JSVector.prototype.setDirection = function (newAngle) {
    var magnitude = this.getMagnitude();
    if (newAngle) {
        this.x = Math.cos(newAngle) * magnitude;
        this.y = Math.sin(newAngle) * magnitude;
    } else {
        this.x = 0;
        this.y = 0;
    }
}
JSVector.prototype.setMagnitude = function (magnitude) {
    var angle = this.getDirection();
    this.x = Math.cos(angle) * magnitude;
    this.y = Math.sin(angle) * magnitude;
}
JSVector.prototype.distance = function (vec) {
    var x = this.x - vec.x;
    var y = this.y - vec.y;

    return Math.sqrt(x * x + y * y);
};

// add normalize prototype.
