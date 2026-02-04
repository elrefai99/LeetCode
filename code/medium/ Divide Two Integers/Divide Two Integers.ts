function divide(dividend: number, divisor: number): number {
    const INT_MIN: number = -2147483648;
    const INT_MAX: number = 2147483647;

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }
    let sum: number = Math.trunc(dividend / divisor)
    return sum;
}
