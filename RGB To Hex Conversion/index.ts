const limiter = (value) => {
    if (value > 255) return 255;
    if (value < 0) return  0;
    return value;
}

export function rgb(r: number, g: number, b: number) {
    return Array(r, g, b)
        .map(code => limiter(code)
            .toString(16)
            .toUpperCase()
            .padStart(2, '0'))
        .reduce((arr, curr) => arr + curr, '')
}
