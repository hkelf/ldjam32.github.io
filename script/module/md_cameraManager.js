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
			var caddy = screen.getEntity('caddy'),
				camera = game.camera;

			if (caddy) {
				if (caddy.x2 > camera.x + X_LIMIT) {
					camera.x = caddy.x2 - X_LIMIT;
				}
				if (camera.x2 >= LEVEL_WIDTH) {
					camera.x = LEVEL_WIDTH - WIDTH;
				}
			}
		})

})()