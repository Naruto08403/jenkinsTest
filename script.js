function add(a, b) {
    return a + b;
}

function subtract(a,b){
    return a-b
}
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = add(num1, num2);
}

// Export for unit testing
if (typeof module !== "undefined") { 
    module.exports = add;
    module.exports = subtract;
}