const add = (h, w) => {
    if (h === w) return 1;
    if (h > w) return 2;
    return 0;
}

export function bouncingBall(h: number, bounce: number, window: number): number {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
    let res = 1;
    h = h * bounce;
    while (h > window) {
        res += add(h, window);
        h = h * bounce;
    }
    return res;
}
