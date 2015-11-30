define(function() {
    'use strict';
    var Cls_baseMazeBuilder = function() {};
    Cls_baseMazeBuilder.prototype = {
        maze: null,
        stack: [],
        build: function() {},
        clear: function() {
            for (var y = 0; y < this.maze.heigth; y++) {
                for (var x = 0; x < this.maze.width; x++) {
                    var block = this.maze.get(x, y);
                    for (var key in block) {
                        if (key.startsWith('_mb_') && block.hasOwnProperty(key)) {
                            delete block[key];
                        }
                    }
                }
            }
        }
    }
    return Cls_baseMazeBuilder;
});