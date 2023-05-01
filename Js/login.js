
/*Asking for a username and password that is specified in this area below  */
function login(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "password") {
        window.location.href = "loggedin.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
/* this allows the menu to change when page is smaller*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}