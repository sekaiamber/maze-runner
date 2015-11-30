define([
    './config',
    './maze/main',
], function(config, Maze) {
    'use strict';
    window._M_ = new Maze(15, 15);
    return window._M_;
});