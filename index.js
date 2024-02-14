let box = document.getElementById('box');
let img = document.getElementById('card');
let noButton = document.getElementById('no');
let yesButton = document.getElementById('yes');
let nextButton = document.getElementById('next');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

window.onload = function() {
    box.style.width = img.offsetWidth + 'px';
    box.style.height = img.offsetHeight + 'px';

    noButton.addEventListener('mouseover', function() {
        // Get the dimensions of the box
        var boxWidth = box.offsetWidth;
        var boxHeight = box.offsetHeight;

        // Get the dimensions of the button
        var buttonWidth = noButton.offsetWidth;
        var buttonHeight = noButton.offsetHeight;

        // Calculate the maximum possible positions
        var maxX = boxWidth - buttonWidth;
        var maxY = boxHeight - buttonHeight;

        // Generate random positions within the boundaries
        var randomX = Math.random() * maxX;
        var randomY = Math.random() * maxY;

        // Apply the random positions to the button
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });

    yesButton.addEventListener('click', function(e) {
        one.style.display = 'none'
        two.style.display = 'flex';
        two.style.fontSize = '0.7em';
    });

    nextButton.addEventListener('click', function() {
        two.style.display = 'none'
        three.style.display = 'flex';
        three.style.fontSize = '1em';
    });

    img.addEventListener('click', function() {
        img.style.top = "-100%";
    })
};
