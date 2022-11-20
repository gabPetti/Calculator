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

var displayNum1 = document.querySelector("#display-num-1");
var displayOp = document.querySelector("#display-op");
var displayNum2 = document.querySelector("#display-num-2");

var calculation;
function calculateThis(event) {
    var calculation = calculation + event.innerHTML;
}

function operate() {
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

        displayOp.innerHTML = "";
        displayNum2.innerHTML = "";
    }

    if (displayNum1.innerHTML == "NaN") {
        document.querySelectorAll("button").forEach((item) => {
            item.classList.toggle("nan")
        })
        document.querySelector("#tools button:nth-child(2)").classList.toggle("nan")
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

function clearDisplay() {
    displayNum1.innerHTML = "";
    displayOp.innerHTML = "";
    displayNum2.innerHTML = "";
}

function deleteNum() {
    if (displayOp.innerHTML == "" && !(displayNum1 == "")) {
        displayNum1.innerHTML = displayNum1.innerHTML.slice(0, -1);
    } else if (displayNum2.innerHTML == "" && !(displayOp == "")){
        displayOp.innerHTML = displayNum2.innerHTML.slice(0, -1);
    } else if (!(displayNum2 == "")) {
        displayNum2.innerHTML = displayNum2.innerHTML.slice(0, -1);
    }
}