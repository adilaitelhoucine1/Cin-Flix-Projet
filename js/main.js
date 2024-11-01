
const currentMode = localStorage.getItem('theme');


if (currentMode === 'light') {
    document.body.classList.add('light-mode');
    document.body.style.backgroundImage = "url('images/light-background.png')";
    document.querySelector(".spiderman").style.backgroundImage = "url('images/lagartha-lightmode.jpg')";
} else {
    document.body.style.backgroundImage = "url('images/background.png')";
    document.querySelector(".spiderman").style.backgroundImage = "url('images/vikings.jpg')";

}

function toggleTheme() {
    document.body.classList.toggle('light-mode');

    // Changer l'image de fond selon le mode
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.add('light-mode');
        document.body.style.backgroundImage = "url('images/light-background.png')";
        document.querySelector(".spiderman").style.backgroundImage = "url('images/lagartha-lightmode.jpg')";
        localStorage.setItem('theme', 'light');
    } else {
        document.body.style.backgroundImage = "url('images/background.png')";
        document.querySelector(".spiderman").style.backgroundImage = "url('images/vikings.jpg')";
        localStorage.setItem('theme', 'dark');
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
