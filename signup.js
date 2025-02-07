document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeToTerms = document.getElementById('agreeToTerms').checked;

    // Simple form validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all the required fields.');
        return;
    }

   

    if (!agreeToTerms) {
        alert('You must agree to the Terms of Service and Privacy Policy to sign up.');
        return;
    }

   //console.log('Sign Up Successful!');
   //alert('Your account has been created!');
    // You can add an API call here to submit the data to the server
});
