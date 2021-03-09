// Your code goes here


// Prevents the default behaviour of the nav links
Array.from(document.links).forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

// Stops the event propagation of the 'current target' console log
Array.from(document.all).forEach(elem => {
    elem.addEventListener('click', (event) => {
        // console.log('🎯 target:   ', event.target);
        // console.log('🧭 current target:   ', event.currentTarget);
        // console.log('\n');
        event.stopPropagation();
    });
});

// Isolating and selecting the 'Sign Me Up!' buttons
let footer = document.querySelectorAll('.destination');
let footer1 = footer[0];
let footer2 = footer[1];
let footer3 = footer[2];
let footer1Button = footer1.querySelector('.btn');
let footer2Button = footer2.querySelector('.btn');
let footer3Button = footer3.querySelector('.btn');

// Logs/Alerts when the leftmost button is double-clicked
footer1Button.addEventListener('dblclick', function(event){
    console.log('You double-clicked the button!');
    window.alert('You double-clicked the button!');
});
