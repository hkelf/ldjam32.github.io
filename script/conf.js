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
    {type: Cassava.Assets.IMAGE, name: 'debug1616g', src: './asset/img/debug1616g.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug1616y', src: './asset/img/debug1616y.png'},
    {type: Cassava.Assets.IMAGE, name: 'debugTradeZone', src: './asset/img/debugTradeZone.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug3232', src: './asset/img/debug3232.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug3232g', src: './asset/img/debug3232g.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug3232y', src: './asset/img/debug3232y.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug3232b', src: './asset/img/debug3232b.png'},
    {type: Cassava.Assets.IMAGE, name: 'debug6464', src: './asset/img/debug6464.png'},
    {type: Cassava.Assets.IMAGE, name: 'ground', src: './asset/img/ground.png'},
    {type: Cassava.Assets.IMAGE, name: 'background', src: './asset/img/background.png'},
    //{type: Cassava.Assets.AUDIO, name: 'trololoMusic', src: './Assets/Sound/trololo.mp3'}
];
var BACKGROUND = '#333';
var INITIAL_SCREEN = 'screen_level1';

// Game stuff
var STATE = {
	money: 0,
	score: 0,
    weapon: 'tomato',
    ammo: {
        leek: 50,
        tomato: 50,
        carrots: 0,
        fish: 0,
        ham: 0,
    },
    level: 1
};

var FOOD = [
    'leek',
    'tomato',
    'carrot',
    'fish',
    'grap',
    'ham',
    'baguette',
];

var PROJECTILES_HEIGHT = 20;
var PROJECTILES_SPDX = 10;

var FOOD_WEAPON = {
    leek: {
        comboMax: 2,
        combo: [
            {
                dmg: 1,
                action: 'hit3',
                hitLag: 10,
                lag: 20,
                wpndmg: 3
            },
            {
                dmg: 1,
                action: 'hit4',
                lag: 30,
                wpndmg: 5
            }
        ],
        air: {
            dmg: 2,
            action: 'airLeek',
            lag: 25,
            wpndmg: 25,
        }
    },
    tomato: {
        comboMax: 1,
        combo: [
            {
                dmg: 2,
                action: 'throw1',
                lag: 20,
                wpndmg: 5
            }
        ],
        air: {
            dmg: 2,
            action: 'throw2',
            lag: 30,
            wpndmg: 5,
        }
    },
}

var DROP_MIN = 1;
var DROP_MAX = 3;

var Y_LIMIT = HEIGHT / 2;
var X_LIMIT = WIDTH - 128;
var LEVEL_WIDTH = 1350;
var TILE_DIMENSIONS = 150;

var SPD_X = 1;
var SPD_Y = 0.75;
var CADDY_SPD = 2;
var GRAVITY_Z = 0.3;
var JUMP = 5;
var PROJECTION_TIME = 30;
var PROJECTION_SPDX = 2;
var PROJECTION_ACCZ = 3;
var Z_SAFE_ZONE = 20;

var ENEMY_1_ATTACK_RADIUS = 48;
var CADDY_MOVE_RADIUS = 24;