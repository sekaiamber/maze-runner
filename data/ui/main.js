define([
    '../var/helper',
    './config',
    './canvasui/main',
    './cssui/main'
], function(helper, config, Canvasui, Cssui) {
    'use strict';
    var map = {
        canvas: Canvasui,
        css: Cssui
    }
    var Cls_ui = function() {};
    Cls_ui.prototype = {
        builder: map[config.ui],
        config: config,
        init: function() {
            this.builder.init(config.target);
        },
        build: function(maze) {
            this.builder.build(maze, this.config.wallThick, this.config.blockLenght);
        }
    }
    return Cls_ui;
});