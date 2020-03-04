import execWk from "./ios-wkwebview-exec";
import execIos from "./exec";
import execAndroid from "./exec-android";
import utils from "./utils";

export function initMixin(Cordova) {
  Cordova.prototype._init = function(options) {
    this.initEvent();
    this.loadPlugins(options.pluginMap);
    this.version = utils.android ? "6.0.0" : "4.2.1";
  };
  Cordova.prototype.exec = utils.ios
    ? utils.iosWk
      ? execWk
      : execIos
    : execAndroid;
  Cordova.usable = utils.isNative;
}
