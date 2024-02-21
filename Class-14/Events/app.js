const heading = document.querySelector('h1');
const div = document.querySelector('div');
const inp = document.querySelector('input');
const form = document.querySelector('form');
const para = document.querySelector('p');

function scream() {
    console.log('scream............');
}

function shout() {
    console.log('shout............');
}

// heading.onclick = scream;
// heading.onclick = shout;

// click -----------------------------------------------

heading.addEventListener('click', scream);
heading.addEventListener('click', shout);

// Mouse events -----------------------------------------

div.addEventListener('mouseenter', function () {
    div.style.backgroundColor = 'aqua';
});


div.addEventListener('mouseleave', function () {
    div.style.backgroundColor = null;
});


// Keyboard Events --------------------------------------

inp.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        console.log('enter is pressed!');
    }
    console.log(event);
});


// Form Event ------------------------------------

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    console.log(`Username : ${username}, Password : ${password}`);
    console.log('form submitted')
});


// -------

para.addEventListener('copy', function () {
    alert('Stop coppying now!😡😡😡😡😡😡😡')
})