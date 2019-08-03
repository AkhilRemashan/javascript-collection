<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>darkMap</title>

<style type="text/css">
	html, body, #map-canvas {
  		height: 100%;
  		margin: 0;
  		padding: 0;
	}
</style>

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

</head>

<body>
	

	<div id="map-canvas"></div>



<script type="text/javascript">
	function initialize() {
  
  var styleArray = [
    {
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#000000" },
        { lightness: 17 }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: "#000000" },
        { lightness: 20 }
      ]
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [
        { visibility: "on" },
        { color: "#000000" },
        { lightness: 16 }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        { visibility: "on" },
        { color: "#cd5c5c" },
        { lightness: 17 }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        { visibility: "on" },
        { saturation: 36 },
        { color : "#000000" },
        { lightness : 16 }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.icon",
      stylers: [
        { visibility: "on" }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color : "#000000" },
        { lightness : 16 }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text",
      stylers: [
        { visibility: "on" },
        { color: "#000000" },
        { lightness: 16 }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        { saturation: 36 },
        { color : "#ffffff" },
        { lightness : 40 }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        { visibility: "on" },
        { color: "#000000" },
        { lightness: 17 }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text",
      stylers: [
        { visibility: "on" },
        { color: "#000000" },
        { lightness: 16 }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        { visibility: "on" },
        { color: "#ffffff" },
        { lightness: 40 }
      ]
    }
  ];

    var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(12.9716,77.5946),
    disableDefaultUI: true,
    styles: styleArray
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
</script>	
</body>

</html>
