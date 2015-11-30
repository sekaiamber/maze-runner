define([
    './config',
    './block',
    './builder',
    './helper'
],function(config, Block, builder, helper) {
    'use strict';
    var Cls_maze = function(width, heigth) {
        if (typeof width == 'object') {
            for (var key in width) {
                if (width.hasOwerty(key)) {
                    this[key] = width[key];
                }
            }
        } else if (typeof width == 'number' && typeof heigth == 'number') {
            this.width = width;
            this.heigth = heigth;
        }
        this.builder = new window.MazeBuilder(this);
        this.init();
    }
    Cls_maze.prototype = helper.extend([], {
        width: 10,
        heigth: 10,
        builder: null,
        init: function() {
            for (var y = 0; y < this.heigth; y++) {
                var row = [];
                for (var x = 0; x < this.width; x++) {
                    row[x] = new Block(x, y);
                }
                this.push(row);
            }
            this.builder.build();
        },
        get: function(x, y) {
            return this[y][x];
        },
        getNeighbors: function(x, y) {
            if (typeof x == 'object') {
                var obj = x;
                x = obj.x;
                y = obj.y;
            };
            var r = {
                top: null,
                right: null,
                bottom: null,
                left: null
            };
            if (x < 0 || x >= this.width || y < 0 || y >= this.heigth) return r;
            if (x > 0) {
                r.left = this.get(x - 1, y);
            }
            if (x < this.width - 1) {
                r.right = this.get(x + 1, y);
            }
            if (y > 0) {
                r.top = this.get(x, y - 1);
            }
            if (y < this.heigth - 1) {
                r.bottom = this.get(x, y + 1);
            }
            return r;
        },
        getNeighborsList: function(x, y) {
            var _r = this.getNeighbors(x, y);
            var r = []
            for (var key in _r) {
                if (_r.hasOwnProperty(key) && _r[key] != null) {
                    r.push(_r[key]);
                }
            }
            return r;
        },
        getNeighbor: function(x, y, direction) {
            if (typeof x == 'object') {
                var obj = x;
                x = obj.x;
                y = obj.y;
                direction = y;
            };
            if (x < 0 || x >= this.width || y < 0 || y >= this.heigth) return null;
            switch (direction) {
                case 0:
                case 'top':
                    if (y > 0) return this.get(x, y - 1);
                case 1:
                case 'right':
                    if (x < this.width - 1) return this.get(x + 1, y);
                case 2:
                case 'bottom':
                    if (y < this.heigth - 1) return this.get(x, y + 1);
                case 3:
                case 'left':
                     if (x > 0) return this.get(x - 1, y);
                default:
                    break;
            }
            return null;
        }
    }, config);
    return Cls_maze;
});