document.addEventListener('DOMContentLoaded', function () { 
    let button = document.querySelector('#button1');
    let input = document.querySelector('#input1');
    let output = document.querySelector('#output1');
    
    button.addEventListener('click', function() {
        let text = input.value;
    
        if (text === '') {
            alert('入力値が空です。');
            return;
        }
        
        output.textContent = text;
        });
    });