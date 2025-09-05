let display = document.getElementById('display');
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value.replace(/%/g, '/100'));
    if (result === Infinity || result === -Infinity) {
      alert("Error: Division by zero!");
      clearDisplay();
      return;
    }
    if (isNaN(result)) {
      alert("Error: Invalid calculation!");
      clearDisplay();
      return;
    }
    display.value = result;
  } catch {
    alert("Error: Invalid Expression!");
    clearDisplay();
  }
}

function squareRoot() {
  display.value = Math.sqrt(parseFloat(display.value) || 0);
}

function square() {
  display.value = Math.pow(parseFloat(display.value) || 0, 2);
}

function toggleSign() {
  if (display.value) {
    display.value = String(parseFloat(display.value) * -1);
  }
}

function memoryClear() { memory = 0; }
function memoryRecall() { display.value += memory; }
function memoryAdd() { memory += parseFloat(display.value) || 0; }
function memorySubtract() { memory -= parseFloat(display.value) || 0; }

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

function toggleTheme() {
  document.body.classList.toggle('dark');
}
