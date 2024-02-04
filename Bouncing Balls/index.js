"use strict";
exports.__esModule = true;
exports.bouncingBall = void 0;
var add = function (h, w) {
    if (h === w)
        return 1;
    if (h > w)
        return 2;
    return 0;
};
function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h)
        return -1;
    var res = 1;
    h = h * bounce;
    while (h > window) {
        res += add(h, window);
        h = h * bounce;
    }
    return res;
}
exports.bouncingBall = bouncingBall;
