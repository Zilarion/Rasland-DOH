var map;
document.getElementById('poleName').innerHTML = API.d.poleName;
document.getElementById('matchNumber').innerHTML = API.d.matchNumber;
$('#color').css("background-color", API.d.color);

$(document).ready(function() {  
  /* Google Map
	-----------------------------------------------------*/
  google.maps.event.addDomListener(window, 'load', mapInitialize);
});


<<<<<<< HEAD
  function mapInitialize() {
    var yourLatitude = 52.3101192;
    var yourLongitude = 4.7681613;

    var myOptions = {
      zoom: 15,
      center: new google.maps.LatLng(yourLatitude, yourLongitude - 0.01),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      panControl: false,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
      //styles: mapDark
    };

    map = new google.maps.Map(document.getElementById('google-map'), myOptions);
    addMeetingPoint(lat,long);
  }

  function addMeetingPoint(lat, long) {    
    var image = {
      url: 'img/marker.png',
    };
    var myLatLng = new google.maps.LatLng(lat, long);
    var myLocation = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Meeting point A"
      //icon: image
    });
  }
=======
function mapInitialize() {
  var yourLatitude = 52.3101192;
  var yourLongitude = 4.7781613;

  var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(yourLatitude, yourLongitude - 0.01),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    //styles: mapDark
  };

  map = new google.maps.Map(document.getElementById('google-map'), myOptions);
}

function addGateMarker(id) {  
  var geocoder = new google.maps.Geocoder();
  var address = 'Schiphol gate' + id;
  geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          lat = results[0].geometry.location.lat();
          long = results[0].geometry.location.lng();
      } else {
          console.log("Request failed.")
      }
  });
}

function addMeetingPoint(lat, long) {    
  var image = {
    url: 'img/marker.png',
  };
  var myLatLng = new google.maps.LatLng(lat, long);
  var myLocation = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Meeting point A"
    //icon: image
  });
}
>>>>>>> 82229b627280866318016740ea7463e09ff92643
