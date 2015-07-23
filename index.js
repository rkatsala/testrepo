
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomRange(1, 20));