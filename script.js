// Math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Separate DOM interaction
if (typeof document !== "undefined") { 
    function calculate() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        document.getElementById("result").textContent = add(num1, num2);
    }
}

// Export functions for unit testing in Node.js
if (typeof module !== "undefined" && module.exports) { 
    module.exports = { add, subtract };
}
