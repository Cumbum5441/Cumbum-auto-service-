document.getElementById("driverForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let autoNumber = document.getElementById("autoNumber").value;

    firebase.database().ref("drivers").push({
        name: name,
        mobile: mobile,
        autoNumber: autoNumber,
        status: "Pending",
        createdAt: Date.now()
    }).then(() => {
        alert("Driver Registration Successful!");
        document.getElementById("driverForm").reset();
    }).catch((error) => {
        alert("Error: " + error.message);
    });
});
