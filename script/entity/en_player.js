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
			this.x = 32;
			this.y = HEIGHT - 64;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.up_arrow, function() {
			this.y -= SPD_Y;
			if (this.y < HEIGHT * 1 / 3) this.y = HEIGHT * 1 / 3;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.down_arrow, function() {
			this.y += SPD_Y;
			if (this.y2 >= HEIGHT) this.y = HEIGHT - 32;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.left_arrow, function() {
			this.x -= SPD_X;
			if (this.x < 0) this.x = 0;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.right_arrow, function() {
			this.x += SPD_X;
			if (this.x2 >= WIDTH) this.x = WIDTH - 32;
		})
})()