const a = Math.floor(Math.random() * 20) + 1;
const b = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const op = operators[Math.floor(Math.random() * operators.length)];

let question = `${a} ${op} ${b}`;
let correct;

switch (op) {
  case '+':
    correct = a + b;
    break;
  case '-':
    correct = a - b;
    break;
  case '*':
    correct = a * b;
    break;
  case '/':
    correct = +(a / b).toFixed(2);
    break;
}

console.log("Question:", question);
console.log("Correct answer:", correct);
