var exec = require('cordova/exec');

/*exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'EsptouchForCordova', 'smartConfig', [arg0]);
};*/

module.exports = {
    scan: function (params, successCallback, failCallback) {
        exec(successCallback, failCallback, "QRScanner", "scan", [params]);
    }
};