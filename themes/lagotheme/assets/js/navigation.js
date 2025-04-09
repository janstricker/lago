document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('nav-check');
    const navContainer = document.querySelector('.nav-container');
    const hamburger = document.querySelector('.hamburger');

    if (checkbox && navContainer && hamburger) {
        checkbox.addEventListener('change', function(e) {
            navContainer.classList.toggle('active', e.target.checked);
            hamburger.classList.toggle('active', e.target.checked);
        });
    }
});
