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

function operate(op, num1, num2) {
    if (op == "+") {
        return calculator.add(num1, num2);
    } else if (op == "-") {
        return calculator.subtract(num1, num2);
    } else if (op == "*") {
        return calculator.multiply(num1, num2);
    } else if (op == "/") {
        return calculator.divide(num1, num2);
    }
}