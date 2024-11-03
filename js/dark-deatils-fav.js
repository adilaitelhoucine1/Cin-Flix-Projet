
const currentMode = localStorage.getItem('theme');


if (currentMode === 'light') {
    document.body.classList.add('light-mode');
    document.body.style.backgroundImage = "url('images/light-background.png')"; 
    document.getElementById('theme-toggle').innerText = "Dark Mode";  
} else {
    document.body.style.backgroundImage = "url('images/background.png')";
    document.getElementById('theme-toggle').innerText = "Light Mode";
}

// Fonction pour basculer le mode
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    var themeToggleBtn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.add('light-mode');
        document.body.style.backgroundImage = "url('images/light-background.png')";
        themeToggleBtn.innerText = "Dark Mode";
        
        localStorage.setItem('theme', 'light');
    } else {
        document.body.style.backgroundImage = "url('images/background.png')";
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerText = "Light Mode";
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
