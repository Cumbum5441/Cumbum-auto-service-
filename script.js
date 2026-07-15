
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;

    alert(
        "Booking Successful!\n\n" +
        "Name: " + name +
        "\nMobile: " + mobile +
        "\nPickup: " + pickup +
        "\nDrop: " + drop
    );
});
