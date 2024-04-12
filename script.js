document.addEventListener('mousemove', function(event) {
    const color = getColor(event.clientX, event.clientY);
    document.querySelector('.background').style.backgroundColor = color;
});

function getColor(x, y) {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    const hue = (x / maxX) * 360; /* Map mouse X position to hue */
    const saturation = (y / maxY) * 100; /* Map mouse Y position to saturation */
    return `hsl(${hue}, ${saturation}%, 50%)`; /* Construct HSL color */
}

document.addEventListener('DOMContentLoaded', function() {
    const discoverMoreBtn = document.getElementById('discover-more');
    const featuresSection = document.getElementById('features');

    discoverMoreBtn.addEventListener('click', function() {
        featuresSection.classList.remove('features-hidden'); // Show the features section
        this.style.display = 'none'; // Hide the "Discover More" button after clicking
    });
});
