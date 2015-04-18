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

	game.Module.define('module_cameraManager')
		.onUpdate(function(e, screen, game) {
			var player = screen.getEntity('player'),
				camera = game.camera;

			if (player) {
				if (player.x2 > camera.x + X_LIMIT && camera.x2 <= LEVEL_WIDTH) {
					camera.x = player.x2 - X_LIMIT;
				}
			}
		})

})()