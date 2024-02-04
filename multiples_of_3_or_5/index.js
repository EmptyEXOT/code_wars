"use strict";
exports.__esModule = true;
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 3)
            return 0;
        var arr = [];
        for (var i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                arr.push(i);
            }
        }
        return arr.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
    };
    return Challenge;
}());
exports.Challenge = Challenge;
console.log(Challenge.solution(10));
