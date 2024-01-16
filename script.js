const registerButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");


registerButton.addEventListener("click", function() {
    alert("Register successful!"); 
    registerButton.style.display = "inline-block";
    registerButton.style.display = "none";
});

loginButton.addEventListener("click", function() {
    alert("Login successful!");
    loginButton.style.display = "none";
    logoutButton.style.display = "inline-block";
});