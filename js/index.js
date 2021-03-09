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
        console.log('🎯 target:   ', event.target);
        console.log('🧭 current target:   ', event.currentTarget);
        console.log('\n');
        event.stopPropagation();
    });
});


