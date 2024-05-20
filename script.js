// Ensure the carousel behaves as desired
$(document).ready(function () {
    $('#testimonialCarousel').carousel({
        interval: 2000 // Adjust the interval as needed
    });

    $('.carousel').carousel('pause');
});
