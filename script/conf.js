/**
 * DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 *
 *	 Copyright (C) 2015 hkelf <hugo.kelfani@gmail.com> 
 *
 *	 Everyone is permitted to copy and distribute verbatim or modified 
 *	 copies of this license document, and changing it is allowed as long 
 *	 as the name is changed. 
 *
 *	            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 *	   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 
 *
 *	  0. You just DO WHAT THE FUCK YOU WANT TO.
 */


// Init stuff
var WIDTH = 400;
var HEIGHT = 300;
var SCALE = 2;
var ASSETS = [
    {type: Cassava.Assets.IMAGE, name: 'debug1616', src: './asset/img/debug1616.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug3232', src: './asset/img/debug3232.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug6464', src: './asset/img/debug6464.png'},
    {type: Cassava.Assets.IMAGE, name: 'ground', src: './asset/img/ground.png'},
    {type: Cassava.Assets.IMAGE, name: 'background', src: './asset/img/background.png'},
    //{type: Cassava.Assets.AUDIO, name: 'trololoMusic', src: './Assets/Sound/trololo.mp3'}
];
var BACKGROUND = '#333';
var INITIAL_SCREEN = 'screen_level1';

// Game stuff
var STATE = {};

var Y_LIMIT = HEIGHT / 2;
var X_LIMIT = WIDTH - 64;
var LEVEL_WIDTH = 1350;
var TILE_DIMENSIONS = 150;

var SPD_X = 3;
//var SPD_X = 1;
var SPD_Y = 0.75;
var GRAVITY_Z = 0.23;
