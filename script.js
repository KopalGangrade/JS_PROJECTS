// defer attribute makes excution easy and at run time with js.

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



// const loginButton = document.getElementById("loginButton");
// const logoutButton = document.getElementById("logoutButton");

// loginButton.addEventListener("click", function() {
//     alert("Login successful!"); // You can replace this with your actual login logic
//     loginButton.style.display = "none";
//     logoutButton.style.display = "inline-block";
// });

// logoutButton.addEventListener("click", function() {
//     alert("Logout successful!"); // You can replace this with your actual logout logic
//     loginButton.style.display = "inline-block";
//     logoutButton.style.display = "none";
// });