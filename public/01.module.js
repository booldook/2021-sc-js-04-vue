const random = (start, count) => Math.floor(Math.random() * count) + start;
const zp = n => n < 10 ? '0' + n : n

export { random, zp }