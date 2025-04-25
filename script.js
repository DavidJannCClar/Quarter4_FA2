document.getElementById('generate-btn').addEventListener('click', function() {
    
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const outputDiv = document.getElementById('table-output');
    
    outputDiv.textContent = '';
    
 
    if (isNaN(num1) || isNaN(num2) || num1 < 2 || num1 > 10 || num2 < 2 || num2 > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }
    
    
    let tableText = '';
    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= num2; j++) {
            tableText += (i * j).toString().padEnd(3, ' ');
        }
        tableText += '\n';
    }
    
    outputDiv.textContent = tableText;
});