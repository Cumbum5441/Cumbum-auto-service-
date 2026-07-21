const driverId = localStorage.getItem("driverId");

function setAvailable() {
    firebase.database().ref("drivers/" + driverId).update({
        status: "Available"
    });

    alert("✅ You are Available");
}

function setBusy() {
    firebase.database().ref("drivers/" + driverId).update({
        status: "Busy"
    });

    alert("🔴 You are Busy");
}
firebase.database().ref("bookings").on("value", function(snapshot){

    let bookings = snapshot.val();
    let html = "";

    for(let id in bookings){

    if(bookings[id].driverId === driverId){

        html += `
<div class="card">
    <h3>${bookings[id].name}</h3>
    <p>📞 ${bookings[id].mobile}</p>
    <p>📍 ${bookings[id].pickup}</p>
    <p>🏁 ${bookings[id].drop}</p>
    <p>📌 Status: ${bookings[id].status}</p>

    <button onclick="acceptRide('${id}')">
        ✅ Accept Ride
    </button>

    <button onclick="completeRide('${id}')">
        🏁 Complete Ride
    </button>
</div>
`;
    }
}

    document.getElementById("rideList").innerHTML = html || "<p>No Ride Assigned.</p>";

});
function acceptRide(id){

    firebase.database().ref("bookings/" + id).update({
        status: "Accepted"
    });

    firebase.database().ref("drivers/" + driverId).update({
        status: "Busy"
    });

    alert("Ride Accepted ✅");
}

function completeRide(id){

    firebase.database().ref("bookings/" + id).update({
        status: "Completed"
    });

    firebase.database().ref("drivers/" + driverId).update({
        status: "Available"
    });

    alert("Ride Completed 🎉");
}
