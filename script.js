document.addEventListener('DOMContentLoaded', function() {
    const discoverMoreBtn = document.getElementById('discover-more');
    const featuresSection = document.getElementById('features');

    discoverMoreBtn.addEventListener('click', function() {
        featuresSection.classList.remove('features-hidden'); // Show the features section
        this.style.display = 'none'; // Hide the "Discover More" button after clicking
    });
});
