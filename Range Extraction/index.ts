function solution(list: number[]) {
    let currSeries = [];
    let allSeries: number[][] = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i + 1] - list[i] === 1 || list[i + 1] - list[i] === 0) {
            currSeries.push(list[i]);
        } else {
            currSeries.push(list[i])
            allSeries.push(currSeries)
            currSeries = []
        }
    }

    let res: string = '';

    allSeries.forEach(series => {
        switch (series.length) {
            case 1: {
                res += String(`${series[0]},`);
                break
            }
            case 2: {
                res += String(`${series[0]},`);
                res += String(`${series[1]},`);
                break
            }
            default: {
                res += String(`${series[0]}-`);
                res += String(`${series[series.length - 1]},`)
            }
        }
    })

    return res.slice(0, res.length - 1);
}

//console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))