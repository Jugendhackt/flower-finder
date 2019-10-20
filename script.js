function show_flower_on_map(flower){
 // alert("flower is " + flower);
 var laden;
 
 if (flower=="rose"){
  laden = laden1;
} 
 
else if (flower=="allium"){
  laden = laden2;
}

else if (flower=="poppy"){
  laden = laden3;
}

else{
  laden=laden4;
}
var a =document.getElementById("map");
a.innerHTML="";
 drawmap(laden.lon, laden.lat, laden.name);
}
  

 var map;
        var layer_mapnik;
        var layer_tah;
        var layer_markers;

        function drawmap(lon, lat, popuptext) {
            // Popup und Popuptext mit evtl. Grafik
            OpenLayers.Lang.setCode('de');

            // Position und Zoomstufe der Karte
             popuptext = "<font color=\"black\"><b>"+popuptext+"</b></font>";
            var zoom = 16;

            map = new OpenLayers.Map('map', {
                projection: new OpenLayers.Projection("EPSG:900913"),
                displayProjection: new OpenLayers.Projection("EPSG:4326"),
                controls: [
                    new OpenLayers.Control.Navigation(),
                    new OpenLayers.Control.LayerSwitcher(),
                    new OpenLayers.Control.PanZoomBar()
                ],
                maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34,
                    20037508.34, 20037508.34),
                numZoomLevels: 18,
                maxResolution: 156543,
                units: 'meters'
            });

            layer_mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
            layer_markers = new OpenLayers.Layer.Markers("Address", {
                projection: new OpenLayers.Projection("EPSG:4326"),
                visibility: true,
                displayInLayerSwitcher: false
            });

            map.addLayers([layer_mapnik, layer_markers]);
            jumpTo(lon, lat, zoom);

            // Position des Markers
            addMarker(layer_markers, lon, lat, popuptext);

        }