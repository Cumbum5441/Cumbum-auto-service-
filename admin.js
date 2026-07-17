document.addEventListener("DOMContentLoaded", () => {

  const driversRef = firebase.database().ref("drivers");

  driversRef.on("value", (snapshot) => {

    const data = snapshot.val();

    const driverRequests = document.getElementById("driverRequests");

    driverRequests.innerHTML = "";

    let totalDrivers = 0;
    let availableDrivers = 0;
    let busyDrivers = 0;

    if (data) {

      Object.keys(data).forEach((key) => {

        const driver = data[key];

        totalDrivers++;

        if (driver.status === "Available") {
          availableDrivers++;
        }

        if (driver.status === "Busy") {
          busyDrivers++;
        }

        driverRequests.innerHTML += `
          <div class="card">
            <h3>👤 ${driver.name}</h3>
            <p>📞 ${driver.mobile}</p>
            <p>🚖 ${driver.autoNumber}</p>
            <p>📌 Status: ${driver.status}</p>

            <button onclick="approveDriver('${key}')">
              ✅ Approve
            </button>

            <button onclick="rejectDriver('${key}')">
              ❌ Reject
            </button>

            <hr>
          </div>
        `;
      });

    } else {
      driverRequests.innerHTML = "<p>No pending requests.</p>";
    }

    document.getElementById("totalDrivers").textContent = totalDrivers;
    document.getElementById("availableDrivers").textContent = availableDrivers;
    document.getElementById("busyDrivers").textContent = busyDrivers;

  });

});

function approveDriver(id) {
  firebase.database().ref("drivers/" + id).update({
    status: "Available"
  });

  alert("Driver Approved ✅");
}

function rejectDriver(id) {
  firebase.database().ref("drivers/" + id).remove();

  alert("Driver Rejected ❌");
}
