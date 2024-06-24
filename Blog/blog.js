document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('email');
    const subscribeBtn = document.getElementById('subscribeBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Validate email format using a simple regex
        if (!validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return false;
        }

        // Simulate AJAX submission (replace with actual backend code)
        // Example: You can use fetch() to send data to a server
        // Replace 'your-server-endpoint' with your actual endpoint
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailInput.value.trim() })
        })
        .then(response => {
            if (response.ok) {
                alert('Subscription successful!'); // Replace with your success message
                form.reset(); // Reset the form
            } else {
                alert('Subscription failed. Please try again later.'); // Replace with your error message
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Subscription failed. Please try again later.'); // Replace with your error message
        });
    });

    // Function to validate email format using regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
