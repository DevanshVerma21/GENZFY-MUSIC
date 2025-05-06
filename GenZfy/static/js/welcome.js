window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const dogImage = document.getElementById('dogImage');

    // Check if the footer is in the viewport
    const footerPosition = footer.getBoundingClientRect();
    if (footerPosition.top <= window.innerHeight && footerPosition.bottom >= 0) {
        dogImage.style.animation = 'wink 1s ';
        dogImage.classList.add('wink');
    } else {
        dogImage.style.animation = '';
        dogImage.classList.remove('wink');
    }
});

// CSS for the wink effect
const style = document.createElement('style');
style.innerHTML = `
    @keyframes wink {
        0% { transform: translateX(-50%) scale(1.2); }
        50% { transform: translateX(-50%) scale(1); }
        100% { transform: translateX(-50%) scale(1.2); }
    }
`;
document.head.appendChild(style);
window.addEventListener('scroll', function() {
    const adoptNowText = document.getElementById('adoptNow');

    // Check if the page has been scrolled down
    if (window.scrollY > 50) {  // Change 50 to the scroll value where you want the fade-out to happen
        adoptNowText.classList.add('hidden');
    } else {
        adoptNowText.classList.remove('hidden');
    }
});
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
            element.classList.add('fade-in-visible');
        }
    });
});

// Trigger the initial scroll animations
window.dispatchEvent(new Event('scroll'));
setTimeout(function() {
document.getElementById('welcome-screen').style.display = 'none';
}, 1000);
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}  window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
var myDropdown = document.getElementById("myDropdown");
if (myDropdown.classList.contains('show')) {
myDropdown.classList.remove('show');
}
}
}