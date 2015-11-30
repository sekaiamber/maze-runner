define([
    './config',
    './maze/main',
    './control',
    './ui'
], function(config, Maze, controller, ui) {
    'use strict';
    window._M_ = new Maze(15, 15);
    window._CONTROLLER_ = controller;
    window._UI_ = ui;
    return window._M_;
});