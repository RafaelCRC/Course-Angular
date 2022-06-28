var myVar = 'my variable';
function myFunc(x, y) {
    return x + y;
}
//ES6 or ES 2015
var num = 2;
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (value) {
    return value * 2;
});
numbers.map(function (value) { return value * 2; });
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    MyMath.prototype.mySum = function (x, y) {
        return x + y;
    };
    return MyMath;
}());
var n1 = 'String';
n1 = 4;
