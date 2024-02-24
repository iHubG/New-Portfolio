let btn = document.querySelector('#theme');
let darkMode = document.body;
let image =  document.querySelector('#theme');
let user = document.querySelector('#user');

btn.addEventListener('click', function onClick(event) {

    
    if (image.src.match("icons8-moon-100.png")) {
        image.src = "icons8-light-100.png";
    }
    else {
        image.src = "icons8-moon-100.png";
    }

    if (user.src.match("black.png")) {
        user.src = "white.png";
    }
    else {
        user.src = "black.png";
    }

    darkMode.classList.toggle('dark-mode'); 
    
});




