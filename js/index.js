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

// Isolating and selecting all the elements of the footer
let footer = document.querySelectorAll('.destination');
let footer1 = footer[0];
let footer2 = footer[1];
let footer3 = footer[2];
let footer1Button = footer1.querySelector('.btn');
let footer2Button = footer2.querySelector('.btn');
let footer3Button = footer3.querySelector('.btn');
let footer1Header = footer1.querySelector('h4');
let footer2Header = footer2.querySelector('h4');
let footer3Header = footer3.querySelector('h4');
let footer1Paragraph = footer1.querySelector('p');
let footer2Paragraph = footer2.querySelector('p');
let footer3Paragraph = footer3.querySelector('p');

// Logs & alerts when the leftmost 'Sign Me Up!' button is double-clicked
footer1Button.addEventListener('dblclick', function(event){
    console.log('You double-clicked the button!');
    window.alert('You double-clicked the button!');
});

// Logs every turn of the mouse wheel
document.addEventListener('wheel', function(event){
    console.log('You moved the wheel!');
});

// Logs & alerts when the page is fully loaded
window.addEventListener('load', function(event){
    console.log('Page is fully loaded!');
    window.alert('Page is fully loaded!');
});

// Logs & alerts when you press the 'Escape' key while on the main document
document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        console.log('There is no escape! Mwahahaha!');
        window.alert('There is no escape! Mwahahaha!');
    }
});
