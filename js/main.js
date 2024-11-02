const currentMode = localStorage.getItem('theme');


if (currentMode === 'light') {
    document.body.classList.add('light-mode');
    document.body.style.backgroundImage = "url('images/light-background.png')";
    document.querySelector(".spiderman").style.backgroundImage = "url('images/lagartha-lightmode.jpg')";
    document.getElementById('theme-toggle').innerText = "Dark Mode";
} else {
    document.body.style.backgroundImage = "url('images/background.png')";
    document.querySelector(".spiderman").style.backgroundImage = "url('images/vikings.jpg')";
    document.getElementById('theme-toggle').innerText = "Light Mode";
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    
    var themeToggleBtn = document.getElementById('theme-toggle');

    if (document.body.classList.contains('light-mode')) {
        document.body.style.backgroundImage = "url('images/light-background.png')";
        document.querySelector(".spiderman").style.backgroundImage = "url('images/lagartha-lightmode.jpg')";
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerText = "Dark Mode";
    } else {
        document.body.style.backgroundImage = "url('images/background.png')";
        document.querySelector(".spiderman").style.backgroundImage = "url('images/vikings.jpg')";
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerText = "Light Mode";
    }
}

// Add event listener to the button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
