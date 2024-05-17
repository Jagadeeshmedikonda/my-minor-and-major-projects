
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // name validation (only alphabets and spaces)
    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        alert("Please enter valid first and last names.");
        event.preventDefault();
        return false;
    }

    // Email validation
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return false;
    }

    // Phone number validation (10 numbers)
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a 10-digit phone number.");
        event.preventDefault();
        return false;
    }

    // Form submission successful validation
    alert("Form submitted successfully! Thank you...");
    
});