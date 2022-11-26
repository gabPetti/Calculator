const calculator = {
    add: (x, y) => {
        return x + y;
    },
    subtract: (x, y) => {
        return x - y;
    },
    multiply: (x, y) => {
        return x * y;
    },
    divide: (x, y) => {
        return x / y;
    },
    pow: (x, y) => {
        return x ** y;
    },
    factorial: (x) => {
        let i = 1;
        for (x; x > 0; x--) {
            i = i * x;
        }
        return i;
    },
}
var showDisplay = document.querySelector("#display h2")
var displayNum1 = document.querySelector("#display-num-1");
var displayOp = document.querySelector("#display-op");
var displayNum2 = document.querySelector("#display-num-2");

var calculation;
function calculateThis(event) {
    var calculation = calculation + event.innerHTML;
}

function operate() {
    let displayh1 = document.querySelector("#display h1").innerHTML
    let num1 = Number(displayNum1.innerHTML);
    let num2 = Number(displayNum2.innerHTML);
    
    if (displayNum1.innerHTML == "") {
        displayNum1.innerHTML = "0";
    } else if (displayOp.innerHTML == "") {
        
    } else if (displayNum2.innerHTML == ""){
        if (displayOp.innerHTML == "+") {
            displayNum1.innerHTML = calculator.add(num1, num1)
        } else if (displayOp.innerHTML == "-") {
            displayNum1.innerHTML = calculator.subtract(num1, num1)
        } else if (displayOp.innerHTML == "*") {
            displayNum1.innerHTML = calculator.multiply(num1, num1)
        } else {
            displayNum1.innerHTML = calculator.divide(num1, num1)
        }

        showDisplay.innerHTML = `<span>${num1}</span><span>${displayOp.innerHTML}</span><span>${num1}</span><span>=</span>`;
        displayOp.innerHTML = "";
    } else if (!(displayNum2 == "")) {
        if (displayOp.innerHTML == "+") {
            displayNum1.innerHTML = calculator.add(num1, num2)
        } else if (displayOp.innerHTML == "-") {
            displayNum1.innerHTML = calculator.subtract(num1, num2)
        } else if (displayOp.innerHTML == "*") {
            displayNum1.innerHTML = calculator.multiply(num1, num2)
        } else {
            displayNum1.innerHTML = calculator.divide(num1, num2)
        }

        showDisplay.innerHTML = `<span>${num1}</span><span>${displayOp.innerHTML}</span><span>${num2}</span><span>=</span>`;
        displayOp.innerHTML = "";
        displayNum2.innerHTML = "";
    }

    if (displayNum1.innerHTML == "NaN" || displayNum1.innerHTML == "Infinity") {
        document.querySelectorAll("button").forEach((item) => {
            item.classList.toggle("undefined")
        })
        document.querySelector("#tools button:nth-child(1)").classList.toggle("undefined")
    }
}


function displayNum(num) {
    if (displayOp.innerHTML == "") {
        displayNum1.innerHTML += num;
    } else {
        displayNum2.innerHTML += num;
    }
}


function displayFloatPoint() {
    if (displayOp.innerHTML == "") {
        if (displayNum1.innerHTML.includes(".") == false) {
            if (displayNum1.innerHTML == "") {
                displayNum1.innerHTML = "0."
            } else {
                displayNum1.innerHTML += ".";
            }
        }
    } else {
        if (displayNum2.innerHTML.includes(".") == false) {
            if (displayNum2.innerHTML == "") {
                displayNum2.innerHTML = "0."
            } else {
                displayNum2.innerHTML += ".";
            }
        }
    }
}

function displaySignal() {
    if (displayOp.innerHTML == "") {
        if (displayNum1.innerHTML != "" && displayNum1.innerHTML[0] != "-") {
            displayNum1.innerHTML = "-" + displayNum1.innerHTML;
        } else {
            displayNum1.innerHTML = displayNum1.innerHTML.slice(1);
        }
    } else if (!(displayNum2 == "")) {
        if (displayNum2.innerHTML != "" && displayNum2.innerHTML[0] != "-") {
            displayNum2.innerHTML = "-" + displayNum2.innerHTML;
        } else {
            displayNum2.innerHTML = displayNum2.innerHTML.slice(1);
        }
    }
}

function displayOperation(op) {
    if (displayOp.innerHTML == "") {
        if (displayNum1.innerHTML == "") {
            displayNum1.innerHTML = 0;
        }
        displayOp.innerHTML = op;
    } else if (!(displayNum2 == "")) {
        operate();
        displayOp.innerHTML = op;
    }
}

function percentage() {
    if (displayOp.innerHTML == "") {
        displayNum1.innerHTML = calculator.multiply(Number(displayNum1.innerHTML), 0.01)
    } else {
        displayNum1.innerHTML = calculator.multiply(0.01, Number(displayNum2.innerHTML))
    }
}

function clearDisplay() {
    if (displayNum1.innerHTML == "NaN" || displayNum1.innerHTML == "Infinity") {
        document.querySelectorAll("button").forEach((item) => {
            item.classList.toggle("undefined")
        })
        document.querySelector("#tools button:nth-child(1)").classList.toggle("undefined")
    }
    displayNum1.innerHTML = "";
    displayOp.innerHTML = "";
    displayNum2.innerHTML = "";
    showDisplay.innerHTML = "";
}

function deleteNum() {
    if (displayOp.innerHTML == "" && !(displayNum1 == "")) {
        displayNum1.innerHTML = displayNum1.innerHTML.slice(0, -1);
    } else if (displayNum2.innerHTML == "" && !(displayOp == "")){
        displayOp.innerHTML = displayNum2.innerHTML.slice(0, -1);
    } else if (!(displayNum2 == "")) {
        displayNum2.innerHTML = displayNum2.innerHTML.slice(0, -1);
    }

    if (showDisplay.innerHTML != "") {
        showDisplay.innerHTML = "";
    }
}