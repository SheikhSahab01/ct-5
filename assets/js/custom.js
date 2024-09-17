// Add this code to your existing JavaScript file
const flyout = document.getElementById('flyout');
const applyNowButton = document.querySelector('#apply-now');

applyNowButton.addEventListener('click', () => {
    flyout.classList.add('open');
});

// Add a close button to the flyout
const closeButton = document.querySelector('#close-flyout');
closeButton.addEventListener('click', () => {
    flyout.classList.remove('open');
});