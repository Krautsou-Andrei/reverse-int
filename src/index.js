module.exports = function reverse(n) {
    return +Math.abs(n).toString().split("").map(Number).reverse().join("");
};
