document.getElementById("location").addEventListener("click", function(event) {
    event.preventDefault();

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            alert("Latitude: " + lat + "\nLongitude: " + lon);
        }, function(error) {
            alert("Error: " + error.message);
        });
    } else {
        alert("Trình duyệt không hỗ trợ định vị");
    }
});