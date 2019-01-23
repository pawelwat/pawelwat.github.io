$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [53.13333, 23.16433], 
                     zoom: 11,
                     zoomControl:true,
                     attributionControl:false
                    }
                    );
 
    
    var lyrORTO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                                 {
                                  layers: 'Raster',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                  }
                                 ); 
    var lyrSOZO =L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer',
                               {
                                  layers: 'Raster',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                  }
                                );
    var lyrgmin = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'granica',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
     var lyrwatera = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'watera',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
     var lyrwaterl = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'waterl',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrwiezienia = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'wiezienia',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
     var lyrszkoly = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'szkoly',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrdrogi = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'drogi',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrkolej = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'kolej',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrcmentarze = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'cm',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrmieszkalne = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'mieszkalne1',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrrekreacyjne = L.tileLayer.wms ('http://localhost:8095/geoserver/Poplawski/wms',
                                 {layers: 'rekreacyjne',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    
   var BaseMaps = {
       "OpenSteetMaps": lyrOSM,
       "ORTOFOTOMAPA": lyrORTO,
       "Mapa Sozologiczna": lyrSOZO,
       
   }; 
       //lista obiektów checkobx
    
    var overlays= {
        "Granica miasta" : lyrgmin,
        "Bufory wód powierzchniowych" : lyrwatera,
        "Bufory wód liniowych" : lyrwaterl,
        "Bufory zakładów karnych" : lyrwiezienia,
        "Bufory szkół" : lyrszkoly,
        "Bufory dróg" : lyrdrogi,
        "Bufory koleje" : lyrkolej,
        "Bufory cmentarze" : lyrcmentarze,
        "Bufory terenów rekreacyjnych" : lyrrekreacyjne,
        "Bufory osiedli mieszkaniowych" : lyrmieszkalne
    };
    L.control.layers (BaseMaps, overlays).addTo(mymap);
    // usunięcie ze skali podziałki w milach
    L.control.scale({imperial:false}).addTo(mymap);
});