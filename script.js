function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}
