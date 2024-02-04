"use strict";
exports.__esModule = true;
exports.humanReadable = void 0;
function humanReadable(seconds) {
    if (seconds > 359999 || seconds < 0)
        throw new Error('incorrect value');
    var numToStr = function (num) {
        return (num <= 9) ? String("0".concat(num)) : String(num);
    };
    var hours = numToStr(Math.floor(seconds / 3600));
    var sec = numToStr(seconds % 60);
    var minutes = numToStr(Math.floor(seconds / 60 % 60));
    return "".concat(hours, ":").concat(minutes, ":").concat(sec);
}
exports.humanReadable = humanReadable;
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// String.prototype.padStart()
// instead of numToStr function
