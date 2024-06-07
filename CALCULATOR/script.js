function appendNumber(number) {
    const display = document.getElementById('display');
    const currentText = display.value;
  
    
    if (number === '.' && currentText.includes('.')) {
      return;
    }
  
    display.value = currentText + number;
  }
  
  function appendOperator(operator) {
    const display = document.getElementById('display');
    const currentText = display.value;
  
    
    if (/[+\-*/]$/.test(currentText)) {
      return;
    }
  
    display.value = currentText + operator;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = "";
  }
  
  function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
  
    try {          
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      alert("Invalid expression!");
      clearDisplay();
    }
  }
  