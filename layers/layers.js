var wms_layers = [];


        var lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0 = new ol.layer.Tile({
            'title': 'Cambodia, Laos, Thailand, Vietnam, Malaysia, Myanmar bilingual',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.osm-tools.org">© osm-tools.org & OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://c.tile.osm-tools.org/osm/{z}/{x}/{y}.png'
            })
        });
var lyr_ndvi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10977270.000000, 833663.654513, 11066940.000000, 969350.265307]
                            })
                        });
var lyr_SAVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10977270.000000, 833663.654513, 11066940.000000, 969350.265307]
                            })
                        });

lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0.setVisible(true);lyr_ndvi_1.setVisible(true);lyr_SAVI_2.setVisible(true);
var layersList = [lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0,lyr_ndvi_1,lyr_SAVI_2];
