export function humanReadable(seconds:number): string {
    if (seconds > 359999 || seconds < 0) throw new Error('incorrect value')
    const numToStr = (num: number): string => {
        return (num <= 9) ? String(`0${num}`) : String(num);
    }
    const hours = numToStr(Math.floor(seconds / 3600));
    const sec = numToStr(seconds % 60)
    const minutes = numToStr(Math.floor(seconds / 60 % 60))
    return `${hours}:${minutes}:${sec}`
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// String.prototype.padStart()
// instead of numToStr function