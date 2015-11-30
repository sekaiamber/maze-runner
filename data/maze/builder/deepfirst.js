define([
    './base',
    '../helper'
], function(Base, helper) {
    'use strict';
    var Cls_dfMazeBuilder = function(maze) {
        this.maze = maze;
    };
    Cls_dfMazeBuilder.prototype = helper.extend(new Base(), {
        build: function() {
            var current = this.maze.get(0, 0);
            current._mb_built = true;
            this.do(current);
            this.clear();
        },
        do: function(current) {
            var neighbor = this.getUnbuiltNeighborBlock(current);
            if (neighbor != null) {
                this.stack.push(current);
                current.removeWallWith(neighbor);
                neighbor._mb_built = true;
                this.do(neighbor);
            } else if (this.stack.length > 0) {
                var prev = this.stack.pop(); 
                this.do(prev);
            }
        },
        getUnbuiltNeighborBlock: function(block) {
            var neighbors = this.maze.getNeighborsList(block);
            var unbuilt = [];
            for (var i = 0; i < neighbors.length; i++) {
                if(!neighbors[i]._mb_built) unbuilt.push(neighbors[i]);
            }
            if (unbuilt.length == 0) return null;
            return unbuilt[helper.getRandomInt(0, unbuilt.length)];
        }
    });
    return Cls_dfMazeBuilder;
});