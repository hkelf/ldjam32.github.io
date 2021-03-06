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
    {type: Cassava.Assets.IMAGE, name: 'debugTradeZone', src: './asset/img/debugTradezone.png'},
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
        carrot: 50,
        baguette: 50,
        ham: 50,
    },
    level: 1
};

var FOOD = [
    'leek',
    'tomato',
    'carrot',
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
                hitLag: 30,
                lag: 20,
                wpndmg: 15
            }
        ],
        air: {
            dmg: 2,
            action: 'throw2',
            hitLag: 30,
            lag: 60,
            wpndmg: 15,
        }
    },
    carrot: {
        comboMax: 4,
        combo: [
            {
                dmg: 0,
                action: 'stab',
                hitLag: 5,
                lag: 20,
                wpndmg: 1
            },
            {
                dmg: 0,
                action: 'stab',
                hitLag: 5,
                lag: 20,
                wpndmg: 1
            },
            {
                dmg: 1,
                action: 'stab',
                hitLag: 5,
                lag: 20,
                wpndmg: 3
            },
            {
                dmg: 2,
                action: 'stab',
                lag: 1,
                wpndmg: 5
            }
        ],
        air: {
            dmg: 0,
            action: 'airCarrot',
            lag: 0,
            wpndmg: 6,
        }
    },
    ham: {
        comboMax: 1,
        combo: [
            {
                dmg: 2,
                action: 'zone1',
                hitLag: 60,
                lag: 45,
                wpndmg: 10
            }
        ]
    },
    baguette: {
        comboMax: 2,
        combo: [
            {
                dmg: 1,
                action: 'hit5',
                hitLag: 20,
                lag: 40,
                wpndmg: 4
            },
            {
                dmg: 1,
                action: 'hit6',
                lag: 50,
                wpndmg: 8
            },
        ],
        air: {
            dmg: 2,
            action: 'airBaguette',
            hitLag: 5,
            lag: 60,
            wpndmg: 20
        }
    }
}

var DROP_MIN = 1;
var DROP_MAX = 3;

var DROP_BOSS_COEF = 4;

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

var CARROT_WARP_DIST = 64;
var CARROT_CRITICAL_BONUS = 3;

var ENEMY_1_ATTACK_RADIUS = 48;
var ENEMY_1_SPD_COEF = 0.75;

var CADDY_MOVE_RADIUS = 24;
var CADDY_PENALTY_COEF = 10;