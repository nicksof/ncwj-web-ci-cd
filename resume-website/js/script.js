// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


// Add toggle functionality for the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle the visibility of the menu
});


const counter = document.querySelector(".visitor-counter");
async function updateCounter() {
    let response = await fetch("https://wnhltgztcsbegfrdxfmxj5jo6e0wpkfl.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
