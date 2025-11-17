const display = document.getElementById("display");
let num1 = "", num2 = "", operator = null;

// Number buttons
document.querySelectorAll("button[data-value]").forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-value");
        display.value += val;  // show number directly
        if (!operator) num1 += val;
        else num2 += val;
    });
});

// Operators
document.getElementById("plus").addEventListener("click", () => { 
    operator = "+"; 
    display.value += " + "; 
});
document.getElementById("minus").addEventListener("click", () => { 
    operator = "-"; 
    display.value += " - "; 
});
document.getElementById("multiply").addEventListener("click", () => { 
    operator = "*"; 
    display.value += " * "; 
});
document.getElementById("divide").addEventListener("click", () => { 
    operator = "/"; 
    display.value += " / "; 
});

// Equal button
document.getElementById("equal").addEventListener("click", () => {
    let result = 0;
    if (operator === "+") result = add(num1, num2);
    if (operator === "-") result = subtract(num1, num2);
    if (operator === "*") result = multiply(num1, num2);
    if (operator === "/") result = divide(num1, num2);
    display.value = result;  // show result as number
    num1 = result.toString();
    num2 = "";
    operator = null;
});
