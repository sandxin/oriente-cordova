cordova.define('cordova/plugin_list', function (require, exports, module) {
    module.exports = [
        {
            'id': 'cordova-plugin-device.device',
            'file': 'plugins/cordova-plugin-device/www/device.js',
            'pluginId': 'cordova-plugin-device',
            'clobbers': ['device']
        },
        {
            'id': 'cordova-plugin-camera.Camera',
            'file': 'plugins/cordova-plugin-camera/www/CameraConstants.js',
            'pluginId': 'cordova-plugin-camera',
            'clobbers': ['Camera']
        },
        {
            'id': 'cordova-plugin-camera.CameraPopoverOptions',
            'file': 'plugins/cordova-plugin-camera/www/CameraPopoverOptions.js',
            'pluginId': 'cordova-plugin-camera',
            'clobbers': ['CameraPopoverOptions']
        },
        {
            'id': 'cordova-plugin-camera.camera',
            'file': 'plugins/cordova-plugin-camera/www/Camera.js',
            'pluginId': 'cordova-plugin-camera',
            'clobbers': ['navigator.camera']
        },
        {
            'id': 'cordova-plugin-camera.CameraPopoverHandle',
            'file': 'plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js',
            'pluginId': 'cordova-plugin-camera',
            'clobbers': ['CameraPopoverHandle']
        },
        {
            'id': 'cordova-plugin-geolocation.Coordinates',
            'file': 'plugins/cordova-plugin-geolocation/www/Coordinates.js',
            'pluginId': 'cordova-plugin-geolocation',
            'clobbers': ['Coordinates']
        },
        {
            'id': 'cordova-plugin-geolocation.PositionError',
            'file': 'plugins/cordova-plugin-geolocation/www/PositionError.js',
            'pluginId': 'cordova-plugin-geolocation',
            'clobbers': ['PositionError']
        },
        {
            'id': 'cordova-plugin-geolocation.Position',
            'file': 'plugins/cordova-plugin-geolocation/www/Position.js',
            'pluginId': 'cordova-plugin-geolocation',
            'clobbers': ['Position']
        },
        {
            'id': 'cordova-plugin-geolocation.geolocation',
            'file': 'plugins/cordova-plugin-geolocation/www/geolocation.js',
            'pluginId': 'cordova-plugin-geolocation',
            'clobbers': ['navigator.geolocation']
        },
        {
            'id': 'cordova-plugin-contacts.contacts',
            'file': 'plugins/cordova-plugin-contacts/www/contacts.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['navigator.contacts']
        },
        {
            'id': 'cordova-plugin-contacts.Contact',
            'file': 'plugins/cordova-plugin-contacts/www/Contact.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['Contact']
        },
        {
            'id': 'cordova-plugin-contacts.convertUtils',
            'file': 'plugins/cordova-plugin-contacts/www/convertUtils.js',
            'pluginId': 'cordova-plugin-contacts'
        },
        {
            'id': 'cordova-plugin-contacts.ContactAddress',
            'file': 'plugins/cordova-plugin-contacts/www/ContactAddress.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['ContactAddress']
        },
        {
            'id': 'cordova-plugin-contacts.ContactError',
            'file': 'plugins/cordova-plugin-contacts/www/ContactError.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['ContactError']
        },
        {
            'id': 'cordova-plugin-contacts.ContactField',
            'file': 'plugins/cordova-plugin-contacts/www/ContactField.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['ContactField']
        },
        {
            'id': 'cordova-plugin-contacts.ContactFindOptions',
            'file': 'plugins/cordova-plugin-contacts/www/ContactFindOptions.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['ContactFindOptions']
        },
        {
            'id': 'cordova-plugin-contacts.ContactName',
            'file': 'plugins/cordova-plugin-contacts/www/ContactName.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['ContactName']
        },
        {
            'id': 'cordova-plugin-contacts.ContactOrganization',
            'file': 'plugins/cordova-plugin-contacts/www/ContactOrganization.js',
            'pluginId': 'cordova-plugin-contacts',
            'clobbers': ['ContactOrganization']
        },
        {
            'id': 'cordova-plugin-contacts.ContactFieldType',
            'file': 'plugins/cordova-plugin-contacts/www/ContactFieldType.js',
            'pluginId': 'cordova-plugin-contacts',
            'merges': ['']
        },
        {
            'id': 'cordova-plugin-contacts.contacts-ios',
            'file': 'plugins/cordova-plugin-contacts/www/ios/contacts.js',
            'pluginId': 'cordova-plugin-contacts',
            'merges': ['navigator.contacts']
        },
        {
            'id': 'cordova-plugin-contacts.Contact-iOS',
            'file': 'plugins/cordova-plugin-contacts/www/ios/Contact.js',
            'pluginId': 'cordova-plugin-contacts',
            'merges': ['Contact']
        },
        {
            'id': 'cordova-plugin-oriente-axios.axios',
            'file': 'plugins/cordova-plugin-oriente-axios/www/axios.js',
            'pluginId': 'cordova-plugin-oriente-axios',
            'clobbers': ['cordova.plugins.axios']
        },
        {
            'id': 'cordova-plugin-oriente-router.router',
            'file': 'plugins/cordova-plugin-oriente-router/www/oriente-router.js',
            'pluginId': 'cordova-plugin-oriente-router',
            'clobbers': ['cordova.plugins.router']
        },
        {
            'id': 'cordova-plugin-fetchdata.fetchdata',
            'file': 'plugins/cordova-plugin-fetchdata/www/fetchdata.js',
            'pluginId': 'cordova-plugin-fetchdata',
            'merges': ['window']
        },
        {
            'id': 'cordova-plugin-statusbar.statusbar',
            'file': 'plugins/cordova-plugin-statusbar/www/statusbar.js',
            'pluginId': 'cordova-plugin-statusbar',
            'clobbers': ['window.StatusBar']
        },
        {
            'id': 'cordova-plugin-track.track',
            'file': 'plugins/cordova-plugin-track/www/track.js',
            'pluginId': 'cordova-plugin-track',
            'merges': ['window.track']
        }
    ];
    module.exports.metadata = // TOP OF METADATA
    {
        'cordova-plugin-whitelist': '1.3.3',
        'cordova-plugin-device': '1.1.7',
        'cordova-plugin-camera': '2.3.1',
        'cordova-plugin-geolocation': '2.4.3',
        'cordova-plugin-contacts': '2.2.1',
        'cordova-plugin-compat': '1.2.0',
        'cordova-plugin-oriente-axios': '0.0.1',
        'cordova-plugin-oriente-router': '0.0.1',
        'cordova-plugin-statusbar': '2.4.2'
    };    // BOTTOM OF METADATA
});
