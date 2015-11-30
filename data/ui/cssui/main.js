/* global $ */
define({
    init: function(target) {
        this.$target = $(target).first();
        var $camera = $("<div class='mazeui-css-camera'></div>");
        this.$camera = $camera;
        var $canvas = $("<div class='mazeui-css-canvas'></div>");
        this.$canvas = $canvas;
        $camera.append($canvas);
        this.$target.append($camera);
    },
    build: function(maze, wallThick, blockLenght, mazeHigh) {
        
    },
    _build3dblock: function(lt, rb) {
        
    }
});