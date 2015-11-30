/* global $ */
define([
    './maze',
    './helper'
], function(Maze, helper) {
    'use strict';
    window.Maze = Maze;
    window.MazeHelper = helper;
    return Maze;
});