// JavaScript for Modals
const modals = document.querySelectorAll('.modal');
const learnMoreButtons = document.querySelectorAll('.learn-more');
const closeButtons = document.querySelectorAll('.close');

// Open modal when "Learn More" is clicked
learnMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Close modal when "X" is clicked
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});