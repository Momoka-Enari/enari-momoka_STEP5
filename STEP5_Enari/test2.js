document.addEventListener('DOMContentLoaded', function () { 
    let bgcolor2 =['lightblue', 'lightgreen', 'lightcoral'];
    let currentIndex = 0;
    
    let button = document.getElementById('bgButton');
    
    button.addEventListener('click', function () {
        document.body.style.backgroundColor = bgcolor2[currentIndex];
    
        currentIndex = (currentIndex + 1) % bgcolor2.length;
        });
    });