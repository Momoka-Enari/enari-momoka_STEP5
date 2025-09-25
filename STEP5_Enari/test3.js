document.addEventListener('DOMContentLoaded', function () { 
    let button = document.getElementById('button3');
let input = document.getElementById('input3');
let output = document.getElementById('output3');

button.addEventListener('click', function () {
    let text = input.value;

    if (text === '') {
        alert('入力値が空です。');
        return;
    }

    output.textContent = text;

    output.classList.toggle('highlight');
    });
});