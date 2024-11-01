
const currentMode = localStorage.getItem('theme');


if (currentMode === 'light') {
    document.body.classList.add('light-mode');
    document.body.style.backgroundImage = "url('images/light-background.png')";   
} else {
    document.body.style.backgroundImage = "url('images/background.png')";
}

// Fonction pour basculer le mode
function toggleTheme() {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        document.body.classList.add('light-mode');
        document.body.style.backgroundImage = "url('images/light-background.png')";
        
        localStorage.setItem('theme', 'light');
    } else {
        document.body.style.backgroundImage = "url('images/background.png')";
        localStorage.setItem('theme', 'dark');
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
