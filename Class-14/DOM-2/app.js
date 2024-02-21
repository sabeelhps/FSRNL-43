const image = document.querySelector('img');

const URL1 = "https://images.unsplash.com/photo-1707597941447-4f65515e628e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8";
const URL2 = "https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXw2c01WalRMU2tlUXx8ZW58MHx8fHx8";


image.style.width = '400px';

let isTrue = true;

function toggleImage() {
    if (isTrue) {
        image.setAttribute('src', URL2);
    } else {
        image.setAttribute('src', URL1);
    }
    isTrue = !isTrue;
}

// setInterval(toggleImage, 1000);