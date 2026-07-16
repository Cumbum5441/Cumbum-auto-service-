document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;

    let message =
`🚖 *New Auto Booking*

👤 Name: ${name}
📞 Mobile: ${mobile}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}`;

    let whatsappNumber = "917989202444";

    let whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});
