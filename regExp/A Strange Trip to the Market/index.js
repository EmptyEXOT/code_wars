"use strict";
exports.__esModule = true;
exports.isLockNessMonster2 = exports.isLockNessMonster = void 0;
// My decision
function isLockNessMonster(s) {
    var exps = [/tree fiddy/, /three fifty/, /3.50/];
    for (var _i = 0, exps_1 = exps; _i < exps_1.length; _i++) {
        var exp = exps_1[_i];
        if ((s.match(exp) || []).length)
            return true;
    }
    return false;
}
exports.isLockNessMonster = isLockNessMonster;
// Better decision
function isLockNessMonster2(s) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    return /tree fiddy|three fifty|3.50/.test(s);
}
exports.isLockNessMonster2 = isLockNessMonster2;
