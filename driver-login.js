document.getElementById("driverLoginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let mobile = document.getElementById("mobile").value;

    firebase.database().ref("drivers").once("value", function(snapshot){

        let drivers = snapshot.val();
        let found = false;

        for(let id in drivers){

            if(drivers[id].mobile === mob

                if(
    drivers[id].mobile === mobile &&
    drivers[id].approved === true &&
    drivers[id].status === "Available"
){

                localStorage.setItem("driverId", id);

                window.location.href = "driver-panel.html";

                break;
            }

        }

        if(!found){

            alert("Driver not approved or invalid mobile number.");

        }

    });

});
