document.getElementById("loginForm").addEventListener("submit", function (e) {
    // When we submit the form, the page is reloaded. In order to save the data, I will prevent reloading.
    e.preventDefault();
    const usernameOrEmail = document.querySelector('input[name="usernameOrEmail"]').value;
    const pass = document.querySelector('input[name="pass"]').value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if ((users[i].email == usernameOrEmail || users[i].username == usernameOrEmail) && users[i].pass == pass ) {
                foundUser = users[i];
                break;
        }
    }

    if(foundUser){
        if((foundUser.email == "admin@exampl.com" || foundUser.username == "admin") && foundUser.pass == "admin123"){
            window.location.href = "dashboard.html";
        }
        else{
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
            window.location.href = "home.html";
        }
    }
    else{
        alert("Users Not Found , Please sign in");
        window.location.href = "register.html" ; 
    }

});