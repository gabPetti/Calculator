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