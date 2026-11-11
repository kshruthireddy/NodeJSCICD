
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log("Node.js Application");
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));

module.exports = { add, subtract };
