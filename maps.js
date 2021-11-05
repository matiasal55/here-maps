window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(localizacion => {
            var latitud = localizacion.coords.latitude;
            var longitud = localizacion.coords.longitude;

            var platform = new H.service.Platform({
                'apikey': MAP_KEY
            });
            var maptypes = platform.createDefaultLayers();
        
            const mapOptions = {
                zoom: 17,
                center: {lat: latitud, lng: longitud}
            }

            const mapaElement = document.getElementById("mapContainer");
            const map = new H.Map(mapaElement, maptypes.vector.normal.map, mapOptions)
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
            const ui = H.ui.UI.createDefault(map, maptypes, 'es-ES');
        
            var init = new H.map.Marker({lat: latitud, lng: longitud});
            map.addObject(init);
        })
    
    } else document.write("Debe habilitar la geolocalización")
    
})