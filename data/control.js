define([
    './control/main',
], function(Control) {
    'use strict';
    var controller = new Control();
    controller.init();
    return controller;
});