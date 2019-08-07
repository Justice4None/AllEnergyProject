
var JSVector = function (vx, vy) {

    var vec = {
        // x and y components of vector stored in x,y.
        x: vx,
        y: vy,

        // scale() method allows us to scale the vector
        // either up or down.
        scale: function (scale) {
            vec.x *= scale;
            vec.y *= scale;
            return (this);
        },

        // add() method adds a vector.
        add: function (vec2) {
            vec.x += vec2.x;
            vec.y += vec2.y;
            return (this);
        },

        // sub() method subtracts a vector.
        sub: function (vec2) {
            vec.x -= vec2.x;
            vec.y -= vec2.y;
            return (this);
        },


        dist: function (vec2) {
            return (vec2.copy().sub(this).length());
        },


        angleBetween: function (vec2) {
            return (vec2.angle() - this.angle());
        },


        angle: function () {
            return (Math.atan2(this.y, this.x));
        },

        // negate() method points the vector in the opposite direction.
        negate: function () {
            vec.x = -vec.x;
            vec.y = -vec.y;
            return (this);
        },

        // length() method returns the length of the vector using Pythagoras.
        length: function () {
            return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
        },

        // A faster length calculation that returns the length squared.
        // Useful if all you want to know is that one vector is longer than another.
        lengthSquared: function () {
            return vec.x * vec.x + vec.y * vec.y;
        },

        // normalize() method turns the vector into a unit length vector
        // pointing in the same direction.
        normalize: function () {
            var len = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
            if (len) {
                vec.x /= len;
                vec.y /= len;
            }
            return (this);
        },

        // Rotates the vector by an angle specified in radians.
        rotate: function (angle) {
            var x = vec.x,
                y = vec.y,
                cosVal = Math.cos(angle),
                sinVal = Math.sin(angle);
            vec.x = x * cosVal - y * sinVal;
            vec.y = x * sinVal + y * cosVal;
            return (this);
        },

        // toString() is a utility function for displaying the vector as text,
        // a useful debugging aid.
        toString: function () {
            return '(' + vec.x.toFixed(3) + ',' + vec.y.toFixed(3) + ')';
        },

        dotProd: function (v2) {
            return (this.x * v2.x) + (this.y * v2.y);
        },


        copy: function () {
            return (JSVector(this.x, this.y));
        }
    };
    return vec;
};

function JSVector() {
    if (arguments.length == 1) {
        this.x = arguments[0].x;
        this.y = arguments[0].y;
    }
    else {
        this.x = arguments[0];
        this.y = arguments[1];
    }

    // Multiply vector.
    JSVector.prototype.mul = function (mul) {
        this.x *= mul;
        this.y *= mul;
        return (this);
    };

    // Add a vector.
    JSVector.prototype.add = function (v2) {
        this.x += v2.x;
        this.y += v2.y;
        return (this);
    };

    // Subtract a vector.
    JSVector.prototype.sub = function (v2) {
        this.x -= v2.x;
        this.y -= v2.y;
        return (this);
    };

    // Length of vector.
    JSVector.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    // Normalize (unit length). Also returns length before normalisation.

    JSVector.prototype.normalize = function () {
        var len = Math.sqrt(this.x * this.x + this.y * this.y);
        if (len) {
            this.x /= len;
            this.y /= len;
        }
        return (this);
    };

    // Dot product.
    JSVector.prototype.dotProd = function (v2) {
        return (this.x * v2.x) + (this.y * v2.y);
    };

    // Rotate vector by an angle in radians.
    JSVector.prototype.rotate = function (ang) {
        this.x = (this.x * Math.cos(ang)) - (this.y * Math.sin(ang));
        this.y = (this.y * Math.cos(ang)) + (this.x * Math.sin(ang));
        return (this);
    };

    // Negate vector (point in opposite direction).
    JSVector.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        return (this);
    };

    //toString function.
    JSVector.prototype.toString = function () {
        return 'x = ' + this.x + ', y = ' + this.y;
    };

    JSVector.prototype.rotate = function (angle) {
        this.x = Math.cos(angle) * this.x - Math.Sin(angle) * this.y
        this.y = Math.Sin(angle) * this.x + Math.Cos(angle) * this.y
        return (this);

    };


    JSVector.prototype.copy = function () {
        return (new JSVector(this.x, this.y));
    };


    JSVector.prototype.dist = function (vec2) {
        return (vec2.copy().sub(this).len());
    };


    JSVector.prototype.angleBetween = function (vec2) {
        return (vec2.angle() - this.angle());
    };


    JSVector.prototype.angle = function () {
        return (Math.atan2(this.y, this.x));
    };



    /* JSVector CrossProduct(const JSVector & v) const
     {
     return JSVector(v.Y, -v.X);
     }
     */
};
