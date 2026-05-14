let users = JSON.parse(localStorage.getItem("users")) || [];

let list = document.getElementById("userList");

users.forEach(function(user) {
    let li = document.createElement("li");
    li.textContent = user.name + " - " + user.email;
    list.appendChild(li);
});