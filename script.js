let memory = 0;
const box = document.getElementById('box');
const memoryDisplay = document.getElementById('memoryDisplay');

function updateMemoryDisplay() {
    memoryDisplay.innerText = `Memory: ${memory}`;
}

function clearInput() {
    box.value = '';
}

function clearEntry() {
    box.value = box.value.slice(0, -1);
}

function deleteLast() {
    box.value = box.value.slice(0, -1);
}

function inputDigit(digit) {
    box.value += digit;
}

function inputSymbol(symbol) {
    box.value += symbol;
}

function calculateResult() {
    try {
        box.value = eval(box.value);
    } catch (e) {
        box.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        box.value = Math.sqrt(eval(box.value));
    } catch (e) {
        box.value = 'Error';
    }
}

function calculateSquare() {
    try {
        box.value = Math.pow(eval(box.value), 2);
    } catch (e) {
        box.value = 'Error';
    }
}

function calculateReciprocal() {
    try {
        box.value = 1 / eval(box.value);
    } catch (e) {
        box.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        const currentExpression = box.value;
        const operatorIndex = currentExpression.search(/[\+\-\*\/]/); // Find the operator
        if (operatorIndex > -1) {
            const operator = currentExpression[operatorIndex];
            const firstPart = currentExpression.slice(0, operatorIndex);
            const secondPart = currentExpression.slice(operatorIndex + 1);
            const percentageValue = (parseFloat(firstPart) * parseFloat(secondPart)) / 100;
            box.value = `${firstPart} ${operator} ${percentageValue}`;
        }
    } catch (e) {
        box.value = 'Error';
    }
}

function memoryClear() {
    memory = 0;
    updateMemoryDisplay();
    alert("Memory Cleared");
}

function memoryRecall() {
    box.value += memory;
}

function memoryAdd() {
    try {
        memory += eval(box.value);
        updateMemoryDisplay();
    } catch (e) {
        box.value = 'Error';
    }
}

function memorySubtract() {
    try {
        memory -= eval(box.value);
        updateMemoryDisplay();
    } catch (e) {
        box.value = 'Error';
    }
}
