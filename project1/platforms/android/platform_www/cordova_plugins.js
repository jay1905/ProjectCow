cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "org.apache.cordova.device.device",
    "file": "plugins/org.apache.cordova.device/www/device.js",
    "pluginId": "org.apache.cordova.device",
    "clobbers": [
      "device"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "org.apache.cordova.console": "0.2.11",
  "org.apache.cordova.device": "0.2.12"
};
// BOTTOM OF METADATA
});