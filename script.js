document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const msgInput = document.getElementById("msg");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const msgError = document.getElementById("msg-error");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        let isValid = true;

        clearErrors();

        if (!validateName(nameInput.value)) {
            nameError.textContent = "Name is required and must be at least 3 characters long.";
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        }

        if (!validateMessage(msgInput.value)) {
            msgError.textContent = "Message cannot be empty.";
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });

    function validateName(name) {
        return name.trim().length >= 3;
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateMessage(msg) {
        return msg.trim().length > 0;
    }

    function clearErrors() {
        nameError.textContent = "";
        emailError.textContent = "";
        msgError.textContent = "";
    }
});
