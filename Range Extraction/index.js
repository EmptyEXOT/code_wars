function solution(list) {
    var currSeries = [];
    var allSeries = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i + 1] - list[i] === 1 || list[i + 1] - list[i] === 0) {
            currSeries.push(list[i]);
        }
        else {
            currSeries.push(list[i]);
            allSeries.push(currSeries);
            currSeries = [];
        }
    }
    var res = '';
    allSeries.forEach(function (series) {
        switch (series.length) {
            case 1: {
                res += String("".concat(series[0], ","));
                break;
            }
            case 2: {
                res += String("".concat(series[0], ","));
                res += String("".concat(series[1], ","));
                break;
            }
            default: {
                res += String("".concat(series[0], "-"));
                res += String("".concat(series[series.length - 1], ","));
            }
        }
    });
    return res.slice(0, res.length - 1);
}
//console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
