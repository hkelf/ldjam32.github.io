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

(function() {

	var level = [
		2,2,2,2,2,2,2,2,2,
		1,1,1,1,1,1,1,1,1
	];

	game.Screen.define('screen_level1')
		.entities([
			{ type: 'entity_player' },
			{ type: 'entity_caddy' },
//			{ type: 'entity_enemy1' },
//			{ type: 'entity_enemy2' },
//			{ type: 'entity_enemy3' },
			{ type: 'entity_boss1' },
			{ type: 'entity_tradeZone' },
		])
		.grid('grid', level, LEVEL_WIDTH / TILE_DIMENSIONS)
		.postEventModules([
			'module_cameraManager'
		]);

})()