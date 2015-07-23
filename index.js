
function randomRange(min, max) {
    min = min || 1;
    max = max || 100;
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomRange(1, 20));
console.log(randomRange());for (var i = 0; i < 10; i++) {
    console.log(randomRange(1, 20));
}