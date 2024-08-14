$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'your-server-endpoint', // Replace with your server endpoint
            data: $(this).serialize(),
            success: function (response) {
                alert('Your message has been sent successfully.');
            },
            error: function () {
                alert('There was an error sending your message.');
            }
        });
    });
});
