document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        // Show notification message
        var notification = document.getElementById('notification');
        notification.innerText = 'Your form has been submitted!';
        notification.classList.add('show');

        // Reset form after 3 seconds
        setTimeout(function() {
            notification.innerText = '';
            notification.classList.remove('show');
            document.getElementById('contactForm').reset();
        }, 3000);
    }
});
