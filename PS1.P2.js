const problem2 = str => {
    const left = str.substring(0,1);
    const right = str.substring(2);
    const operator = str.substring(1,2);
    if (operator == '+') {
        return parseInt(left) + parseInt(right);
    }
    else if (operator == '-') {
        return left - right;
    }
    else if (operator == '*') {
        return left * right;
    }
    else if (operator == '%') {
        return left % right;
    }
    else if (operator == '/') {
        return left / right;
    }
    else {
        console.log('Having trouble parsing the input');
    }
}

const expression1 = '4+2';
const expression2 = '5*7';
const expression3 = '6-1';
const expression4 = '9/2';
const expression5 = '8%3';

let operator = problem2(expression1);
console.log(`${expression1} = ${operator}`)

operator = problem2(expression2);
console.log(`${expression2} = ${operator}`)

operator = problem2(expression3);
console.log(`${expression3} = ${operator}`)

operator = problem2(expression4);
console.log(`${expression4} = ${operator}`)

operator = problem2(expression5);
console.log(`${expression5} = ${operator}`)