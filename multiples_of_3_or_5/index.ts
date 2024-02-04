export class Challenge {
    static solution(number: number): number {
        if (number < 3) return 0;
        const arr: number[] = []
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                arr.push(i);
            }
        }
        return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
}

console.log(Challenge.solution(10))