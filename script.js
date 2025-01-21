document.getElementById('start-sorting').addEventListener('click', () => {
    const inputField = document.getElementById('input-numbers');
    const outputField = document.getElementById('sorted-numbers');
    const timeField = document.getElementById('time-taken');

    const input = inputField.value;
    if (!input.trim()) {
        alert('Please enter numbers separated by commas.');
        return;
    }

    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    if (numbers.length === 0) {
        alert('No valid numbers found.');
        return;
    }

    const startTime = performance.now();
    numbers.sort((a, b) => a - b);
    const endTime = performance.now();

    outputField.textContent = numbers.join(', ');
    timeField.textContent = `Time taken: ${(endTime - startTime).toFixed(2)} ms`;
});
