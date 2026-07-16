document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            let message =
`🚖 New Auto Booking

👤 Name: ${name}
📞 Mobile: ${mobile}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}

📌 Live Location:
https://www.google.com/maps?q=${lat},${lng}`;

            let url = "https://wa.me/917989202444?text=" + encodeURIComponent(message);
            window.open(url, "_blank");

        }, function() {
            alert("Please allow location access.");
        });
    } else {
        alert("Geolocation is not supported on this device.");
    }
});
