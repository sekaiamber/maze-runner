define([
    './helper'
], function(helper) {
    'use strict';
    var Cls_mblock = function(x, y, v) {
        v = v || 15;
        x = x || 0;
        y = y || 0;
        this.value = 15;
        this.x = x;
        this.y = y;
    }
    Cls_mblock.prototype = {
        value: 15,
        x: 0,
        y: 0,
        getWall: function() {
            var r = {
                top: false,
                right: false,
                bottom: false,
                left: false
            }
            if (this.value & 1) r.top = true;
            if ((this.value & 2) >> 1) r.right = true;
            if ((this.value & 4) >> 2) r.bottom = true;
            if ((this.value & 8) >> 3) r.left = true;
            return r;
        },
        removeWall: function(t) {
            if (t.top) this.value &= 14;
            if (t.right) this.value &= 13;
            if (t.bottom) this.value &= 11;
            if (t.left) this.value &= 7;
        },
        addWall: function(t) {
            if (t.top) this.value |= 1;
            if (t.right) this.value |= 2;
            if (t.bottom) this.value |= 4;
            if (t.left) this.value |= 8;
        },
        setWall: function(t) {
            this.value = 0;
            this.addWall(t);
        },
        near: function(another) {
            var dx = this.x - another.x;
            var dy = this.y - another.y;
            if (dx == 0 && dy == 0) return null;
            if (dx > 1 || dx < -1 || dy > 1 || dy < -1) return null;
            if ((dx == 1 || dx == -1) && dy != 0) return null;
            if ((dy == 1 || dy == -1) && dx != 0) return null;
            return {dx: dx, dy: dy};
        },
        removeWallWith: function(another) {
            var d = this.near(another);
            if (!d) return;
            if (d.dy == 1) {
                this.removeWall({top: 1});
                another.removeWall({bottom: 1});
            } else if (d.dx == -1) {
                this.removeWall({right: 1});
                another.removeWall({left: 1});
            } else if (d.dy == -1) {
                this.removeWall({bottom: 1});
                another.removeWall({top: 1});
            } else {
                this.removeWall({left: 1});
                another.removeWall({right: 1});
            }
        },
        addWallWith: function(another) {
            var d = this.near(another);
            if (!d) return;
            if (d.dy == 1) {
                this.addWall({top: 1});
                another.addWall({bottom: 1});
            } else if (d.dx == -1) {
                this.addWall({right: 1});
                another.addWall({left: 1});
            } else if (d.dy = -1) {
                this.addWall({bottom: 1});
                another.addWall({top: 1});
            } else {
                this.addWall({left: 1});
                another.addWall({right: 1});
            }
        }
    }
    return Cls_mblock;
});