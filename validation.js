var username = document.getElementById("username");

var email = document.getElementById("email");

var phone = document.getElementById("phone");

var password = document.getElementById("password");

var confirmPassword = document.getElementById("confirmPassword");

var age = document.getElementById("age");


// Get the buttons

var submitButton = document.getElementById("submitButton");

var clearButton = document.getElementById("clearButton");


// Get the labels

var usernameLabel = document.getElementById("usernameLabel");

var emailLabel = document.getElementById("emailLabel");

var phoneLabel = document.getElementById("phoneLabel");

var passwordLabel = document.getElementById("passwordLabel");

var confirmPasswordLabel = document.getElementById("confirmPasswordLabel");

var genderLabel = document.getElementById("genderLabel");

var ageLabel = document.getElementById("ageLabel");

var musicLabel = document.getElementById("musicLabel");



// Submit Button

submitButton.onclick = function()
{

    var valid = true;


    // Reset all label colors

    usernameLabel.style.color = "black";

    emailLabel.style.color = "black";

    phoneLabel.style.color = "black";

    passwordLabel.style.color = "black";

    confirmPasswordLabel.style.color = "black";

    genderLabel.style.color = "black";

    ageLabel.style.color = "black";

    musicLabel.style.color = "black";



    // --------------------------------
    // Username
    // --------------------------------

    if (username.value == "")
    {

        usernameLabel.style.color = "red";

        valid = false;

    }

    else
    {

        var usernameRegex = /^[a-z0-9]{4,12}$/;


        if (!usernameRegex.test(username.value))
        {

            usernameLabel.style.color = "orange";

            valid = false;

        }

    }



    // --------------------------------
    // Email
    // --------------------------------

    if (email.value == "")
    {

        emailLabel.style.color = "red";

        valid = false;

    }

    else
    {

        var emailRegex = /^[^@\s]+@[^@\s]+\.(net|com|org|edu)$/;


        if (!emailRegex.test(email.value))
        {

            emailLabel.style.color = "orange";

            valid = false;

        }

    }



    // --------------------------------
    // Phone Number
    // --------------------------------

    if (phone.value == "")
    {

        phoneLabel.style.color = "red";

        valid = false;

    }

    else
    {

        var phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;


        if (!phoneRegex.test(phone.value))
        {

            phoneLabel.style.color = "orange";

            valid = false;

        }

    }



    // --------------------------------
    // Password
    // --------------------------------

    if (password.value == "")
    {

        passwordLabel.style.color = "red";

        valid = false;

    }

    else
    {

        var passwordRegex = /^[A-Za-z0-9_]{9,}$/;


        if (!passwordRegex.test(password.value))
        {

            passwordLabel.style.color = "orange";

            valid = false;

        }

    }



    // --------------------------------
    // Confirm Password
    // --------------------------------

    if (confirmPassword.value == "")
    {

        confirmPasswordLabel.style.color = "red";

        valid = false;

    }



    // --------------------------------
    // Gender
    // --------------------------------

    var genderSelected = document.querySelector(
        'input[name="gender"]:checked'
    );


    if (genderSelected == null)
    {

        genderLabel.style.color = "red";

        valid = false;

    }



    // --------------------------------
    // Age Group
    // --------------------------------

    if (age.value == "")
    {

        ageLabel.style.color = "red";

        valid = false;

    }



    // --------------------------------
    // Music Genre
    // --------------------------------

    var musicSelected = document.querySelector(
        'input[name="music"]:checked'
    );


    if (musicSelected == null)
    {

        musicLabel.style.color = "red";

        valid = false;

    }



    // --------------------------------
    // Check Passwords
    // --------------------------------

    if (password.value != "" &&
        confirmPassword.value != "" &&
        password.value != confirmPassword.value)
    {

        alert("passwords do not match");

        confirmPasswordLabel.style.color = "orange";

        valid = false;

    }



    // --------------------------------
    // Successful Submission
    // --------------------------------

    if (valid == true)
    {

        alert("Form submitted successfully!");

    }

};



// --------------------------------
// Clear Button
// --------------------------------

clearButton.onclick = function()
{

    usernameLabel.style.color = "black";

    emailLabel.style.color = "black";

    phoneLabel.style.color = "black";

    passwordLabel.style.color = "black";

    confirmPasswordLabel.style.color = "black";

    genderLabel.style.color = "black";

    ageLabel.style.color = "black";

    musicLabel.style.color = "black";

};