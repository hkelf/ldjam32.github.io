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

	game.Entity.define('entity_player')
		.sprite('sprite_debug3232')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})
		.onCreate(function() {
			this.id = 'player';

			//TMP
			this.x = 32;
			this.y = HEIGHT - 64;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.up_arrow, function() {
			this.y -= SPD_Y;
			if (this.y < Y_LIMIT) this.y = Y_LIMIT;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.down_arrow, function() {
			this.y += SPD_Y;
			if (this.y2 >= HEIGHT) this.y = HEIGHT - 32;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.left_arrow, function(s, game) {
			var camera = game.camera;

			this.x -= SPD_X;
			if (this.x < camera.x) this.x = camera.x;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.right_arrow, function() {
			this.x += SPD_X;
			if (this.x2 >= LEVEL_WIDTH) this.x = LEVEL_WIDTH - 32;
		})
})()