export class ApiUrl {

    public static getDevicesGPS() {
        return `${window.__RUNTIME_CONFIG__.REACT_APP_DEVICES_GPS}/devices/geolocation`;
    }

    public static getDeviceHistoryGPS() {
        return `${window.__RUNTIME_CONFIG__.REACT_APP_DEVICE_HISTORY_GPS}/device/history`;
    }

}