const users = [
    { username: "Joe", password: "abc" },
    { username: "Mark", password: "xyz2" },
   
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    let foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
