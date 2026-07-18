document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            let locationLink = `https://maps.google.com/?q=${lat},${lon}`;

            let message =
`🚖 *New Auto Booking*

👤 Name: ${name}
📞 Mobile: ${mobile}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}

📌 Live Location:
${locationLink}`;
firebase.database().ref("bookings").push({
    name: name,
    mobile: mobile,
    pickup: pickup,
    drop: drop,
    location: locationLink,
    status: "Pending",
    createdAt: Date.now()
});
            window.open(
                `https://wa.me/917989202444?text=${encodeURIComponent(message)}`,
                "_blank"
            );

        }, function() {
            alert("Location permission denied.");
        });

    } else {
        alert("Geolocation is not supported.");
    }
});
