// Initialize and add the map
function initMap() {
    // Your location 42.662914,21.165503
    const loc = { lat: 46.455630, lng: 24.117110 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}


//For smoothscrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});