document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function() {
        if (xhr.status == 201) {
            alert("Registration Successful");
            window.location.href = "users.html";
        }
    };

    xhr.send(JSON.stringify(user));
});