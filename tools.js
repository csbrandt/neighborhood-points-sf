var turf = require('turf');
var fs = require('fs');
var source = require('./source.json');

centers = [];

source.features.forEach(function(feature) {
   var center = turf.centroid(feature);
   center.properties = feature.properties;
   centers.push(center);
});

fs.writeFileSync(__dirname + '/index.json', JSON.stringify(turf.featurecollection(centers)));
