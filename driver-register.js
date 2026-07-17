
document.getElementById("driverForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let autoNumber = document.getElementById("autoNumber").value;

    alert(
        "Registration Submitted!\n\n" +
        "Driver: " + name +
        "\nMobile: " + mobile +
        "\nAuto No: " + autoNumber +
        "\n\nWaiting for Admin Approval."
    );

});
