"use strict";
(function () {

    var appid = "~potch";

    var senderDaemon = null;
    var deviceIp = "10.0.0.35";
    var msgChannel = null;
    var appUrl = "http://potch.github.io/audio-visualizer-sample/receiver_app/";    

    senderDaemon = new SenderDaemon(deviceIp, appid);
    senderDaemon.openApp(appUrl, -1, true);
    senderDaemon.on("appopened", function (messageChannel) {
        msgChannel = messageChannel;
        messageChannel.send(JSON.stringify({
            "type": "PLAY",
            "effect": musicEffect,
            "url": musicUrl
        }));
    });
    // if (msgChannel) {
    //     msgChannel.send(JSON.stringify({
    //         "type": "PLAY",
    //         "effect": musicEffect,
    //         "url": musicUrl
    //     }));
    // }

    function stop() {
      senderDaemon.closeApp(appUrl, -1, true);
      senderDaemon = null;
    }

})();
