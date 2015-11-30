define([
    '../var/helper',
    './config'
], function(helper, config) {
    'use strict';
    var Cls_controller = function() {};
    Cls_controller.prototype = {
        init: function() {
            // keyboard
            for (var key in config.keyboards) {
                if (config.keyboards.hasOwnProperty(key)) {
                    helper.keyboardbind(config.keyboards[key], this[key]);
                }
            }
        },
        front: helper.fxNull,
        back: helper.fxNull,
        left: helper.fxNull,
        right: helper.fxNull,
    }
    return Cls_controller;
});