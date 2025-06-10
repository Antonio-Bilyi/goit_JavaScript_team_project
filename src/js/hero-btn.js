const hasBtn = document.querySelector('.hero-btn');


hasBtn.addEventListener('click', () => {
    
    const hasSection = document.getElementById('artists');
    hasSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
