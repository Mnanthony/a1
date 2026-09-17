// Variables used for the summary table
let results = [];
let continueCalculation = true;

// Keep asking the user for calculations
while (continueCalculation) {

    // Ask the user for the first number
    let x = prompt("Enter the first number (x):");

    // Ask the user for the operator
    let operator = prompt("Enter an operator (+, -, *, /, %):");

    // Ask the user for the second number
    let y = prompt("Enter the second number (y):");

    let result;

    // Check if x or y is not a number
    if (isNaN(x) || isNaN(y)) {
        result = "Error: x and y must be numbers.";
    }

    // Check for addition
    else if (operator === "+") {
        result = Number(x) + Number(y);
    }

    // Check for subtraction
    else if (operator === "-") {
        result = Number(x) - Number(y);
    }

    // Check for multiplication
    else if (operator === "*") {
        result = Number(x) * Number(y);
    }

    // Check for division
    else if (operator === "/") {
        result = Number(x) / Number(y);
    }

    // Check for modulus
    else if (operator === "%") {
        result = Number(x) % Number(y);
    }

    // Invalid operator
    else {
        result = "Error: Invalid operator.";
    }

    // Add valid numerical results to the results array
    if (typeof result === "number" && !isNaN(result)) {
        results.push(result);
    }

    // Display the current calculation
    document.write("<table>");
    document.write("<tr>");
    document.write("<th>Number 1</th>");
    document.write("<th>Operator</th>");
    document.write("<th>Number 2</th>");
    document.write("<th>Result</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");

    document.write("</table>");

    // Ask the user if they want to continue
    continueCalculation = confirm("Click OK to enter another calculation or Cancel to stop.");
}


// Create the summary table
if (results.length > 0) {

    let total = 0;
    let min = results[0];
    let max = results[0];

    // Calculate total, minimum, and maximum
    for (let i = 0; i < results.length; i++) {

        total = total + results[i];

        if (results[i] < min) {
            min = results[i];
        }

        if (results[i] > max) {
            max = results[i];
        }
    }

    // Calculate average
    let avg = total / results.length;

    // Display the summary table
    document.write("<h2>Summary</h2>");

    document.write("<table>");

    document.write("<tr>");
    document.write("<th>Minimum</th>");
    document.write("<th>Maximum</th>");
    document.write("<th>Average</th>");
    document.write("<th>Total</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + avg + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");

    document.write("</table>");
}