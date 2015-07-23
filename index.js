
function randomRange(min, max) {
    min = min || 1;
    max = max || 100;
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomRange(1, 20));
console.log(randomRange());