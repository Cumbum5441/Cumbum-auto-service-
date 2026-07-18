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
