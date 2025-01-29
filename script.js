// Navbar
// Replace the existing menu click handler with this code
const menuIcon = document.querySelector('#menu-icon i');
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    // Toggle between bars and times icon
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    
    // Toggle navbar
    navbar.classList.toggle('hidden');
    navbar.classList.toggle('active');
};

// Optional: Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.replace('fa-times', 'fa-bars');
        navbar.classList.add('hidden');
        navbar.classList.remove('active');
    }
});

// // Dark Mode
// const darkModeToggle = document.getElementById('dark-mode-toggle');

// if (localStorage.getItem('dark-mode') === 'enabled') {
//     document.body.classList.add('dark-mode');
// }

// darkModeToggle.onclick = () => {
//     document.body.classList.toggle('dark-mode');

//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('dark-mode', 'enabled');
//     } else {
//         localStorage.setItem('dark-mode', 'disabled');
//     }
// };

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navbar
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').slice(1) === current) {
            a.classList.add('active');
        }
    });
});

//ScrollBack to top feature
const backToTop = document.createElement('a');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});