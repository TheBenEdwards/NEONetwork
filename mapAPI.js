var map;
function initMap() {
    var uk = {
        lat: 55, lng: -1.5
    };

    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 5,
            center: uk
        }
    );

    geocoder = new google.maps.Geocoder();
}

function createMarker(long, lat){
    markerLatLng = new google.maps.LatLng(lat, long);
    marker = new google.maps.Marker({
        position: markerLatLng,
        map: map,
    });
    marker.setMap(map);
}

$(document).ready(function()
{
    var display = document.getElementById("tweets");
    $.ajax({
        method: "GET",
        type: "json",
        url: "mapAPI.php"
    }).done(function (response){
        var responseJSON = JSON.parse(response);
        
        geoSearch(responseJSON[0].geoLocation);
        console.log(responseJSON[0].geoLocation);
    })
})

function geoSearch(location) {
    geocoder.geocode({'address': location},
    function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            createMarker(results[0].geometry.location.lng(), results[0].geometry.location.lat());
            infoWindow = new google.maps.InfoWindow();
            marker.addListener('mouseover', function() {
                infoWindow.setContent( "Address : " + location);
                infoWindow.open(map, this);
            });
        }
    }
    );
}
