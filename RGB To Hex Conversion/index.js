"use strict";
exports.__esModule = true;
exports.rgb = void 0;
var limiter = function (value) {
    if (value > 255)
        return 255;
    if (value < 0)
        return 0;
    return value;
};
function rgb(r, g, b) {
    return Array(r, g, b)
        .map(function (code) { return limiter(code)
        .toString(16)
        .toUpperCase()
        .padStart(2, '0'); })
        .reduce(function (arr, curr) { return arr + curr; }, '');
}
exports.rgb = rgb;
