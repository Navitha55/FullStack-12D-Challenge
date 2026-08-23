let expression = "";
let resultDisplayed = false;

let display = document.querySelector(".input-box");
let buttons = document.querySelectorAll(".btn");


function handleCalculatorInput(event) {

    const buttonValue = event.target.value;

    if (buttonValue === "=") {
        resultDisplayed = true;
        try {
            expression = new Function(`return ${expression}`)().toString();
        } catch (error) {
            expression = "Error";
        }
    }

    else if (buttonValue === "C") {
        expression = "";
        resultDisplayed = false;
    }
    else {
        if (resultDisplayed) {
            expression = "";
            resultDisplayed = false;
        }
        expression += buttonValue;
    }
    display.value = expression;
}

buttons.forEach(button => {
    button.addEventListener("click", handleCalculatorInput);

});