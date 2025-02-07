document.getElementById('taskerSignupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = Array.from(document.getElementById('skills').selectedOptions).map(option => option.value);
    const availability = document.getElementById('availability').value;
    const location = document.getElementById('location').value;

    // Simple form validation (example)
    if (firstName && lastName && email && phone && skills.length > 0 && availability && location) {
        console.log('Form Submitted Successfully!');
        alert('Thank you for joining as a Tasker!');
        // You can add an API call here to submit the data to the server
    } else {
        alert('Please fill in all the required fields.');
    }
});