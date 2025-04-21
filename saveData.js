document.getElementById("registerForm").addEventListener("submit", function (e) {
    // When we submit the form, the page is reloaded. In order to save the data, I will prevent reloading.
    e.preventDefault();
    const formElements = {
        username: document.querySelector('input[name="username"]').value,
        email: document.querySelector('input[name="email"]').value,
        pass: document.querySelector('input[name="pass"]').value,
        confPass: document.querySelector('input[name="confPass"]').value
    };

    if (formElements.pass != formElements.confPass) {
        alert("Passwords do not match!");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // To prevent repeated registered using one email or username
    const userExists = (field, value) => users.some(user => user[field].toLowerCase() === value.toLowerCase());

    if (userExists("email", formElements.email)) {
        return alert("This email is already registered!");
    }

    if (userExists("username", formElements.username)) {
        return alert("This username is already taken!");
    }

    users.push(formElements);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("User registered successfully!");
    window.location.href = "index.html" ; 
});