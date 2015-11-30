define([
    './builder/deepfirst'
], function(deepfirst) {
    'use strict';
    var def = deepfirst;
    window.MazeBuilder = deepfirst;
    return def;
});