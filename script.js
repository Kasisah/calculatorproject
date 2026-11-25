let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (expression === "") {
            return;
        }

        // Allow only calculator characters
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Invalid Input");
        }

        // Prevent incomplete expressions
        if (!/[0-9)]$/.test(expression)) {
            throw new Error("Invalid Input");
        }

        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Cannot divide by zero");
        }

        display.value = Number(
            result.toPrecision(12)
        ).toString();

    } catch (error) {
        display.value = "Error";
    }
}