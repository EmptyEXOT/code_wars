// My decision
export function isLockNessMonster(s: string): boolean {
    const exps: RegExp[] = [/tree fiddy/, /three fifty/, /3.50/];
    for (let exp of exps) {
        if ((s.match(exp) || []).length) return true;
    }
    return false
}

// Better decision
export function isLockNessMonster2(s: string): boolean {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    return /tree fiddy|three fifty|3.50/.test(s);
}