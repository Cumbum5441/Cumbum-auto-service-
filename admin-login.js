
document.getElementById("adminLoginForm").addEventListener("submit", function(e){

e.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "admin" && password === "123456"){

window.location.href="admin.html";

}else{

alert("Invalid Username or Password");

}

});
