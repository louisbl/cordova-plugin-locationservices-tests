cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/Coordinates.js",
        "id": "cordova-plugin-locationservices.Coordinates",
        "clobbers": [
            "cordova.plugins.locationServices.Coordinates",
            "plugin.locationServices.Coordinates"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/PositionError.js",
        "id": "cordova-plugin-locationservices.PositionError",
        "clobbers": [
            "cordova.plugins.locationServices.PositionError",
            "plugin.locationServices.PositionError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/Position.js",
        "id": "cordova-plugin-locationservices.Position",
        "clobbers": [
            "cordova.plugins.locationServices.PositionError",
            "plugin.locationServices.PositionError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/LocationServices.js",
        "id": "cordova-plugin-locationservices.LocationServices",
        "clobbers": [
            "cordova.plugins.locationServices.geolocation",
            "plugin.locationServices.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices-tests/tests.js",
        "id": "cordova-plugin-locationservices-tests.tests"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/tests.js",
        "id": "cordova-plugin-test-framework.cdvtests"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/jasmine_helpers.js",
        "id": "cordova-plugin-test-framework.jasmine_helpers"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/medic.js",
        "id": "cordova-plugin-test-framework.medic"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/main.js",
        "id": "cordova-plugin-test-framework.main"
    },
    {
        "file": "plugins/cordova-plugin-locationservices-tests/tests.js",
        "id": "cordova-plugin-locationservices-tests.tests"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});