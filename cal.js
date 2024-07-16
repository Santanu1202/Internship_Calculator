const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNum = '';
let previousNum = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.textContent;

    if (value === 'C') {
      currentNum = '';
      previousNum = '';
      operator = '';
      display.value = '';
    } else if (value === '=') {
      calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
      previousNum = currentNum;
      currentNum = '';
    } else {
      currentNum += value;
    }

    display.value = currentNum;
  });
});

function calculate() {
  let result;
  switch(operator) {
    case '+':
      result = parseFloat(previousNum) + parseFloat(currentNum);
      break;
    case '-':
      result = parseFloat(previousNum) - parseFloat(currentNum);
      break;
    case '*':
      result = parseFloat(previousNum) * parseFloat(currentNum);
      break;
    case '/':
      result = parseFloat(previousNum) / parseFloat(currentNum);
      break;
    default:
      return;
  }

  currentNum = result.toString();
  display.value = currentNum;
  previousNum = '';
  operator = '';
}