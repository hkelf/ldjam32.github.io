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
		.sprite('sprite_debug3232g')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})
		.onCreate(function() {
			this.id = 'player';
			this.z = 2;
			this.module('module_health').health = 5;


			//TMP
			this.x = 32;
			this.y = HEIGHT - 64;
		})
		.module('module_realisticPhysics')
		.module('module_health')

		.data({
			hitDelay: 0
		})
		.onUpdate(function() {
			if (this.hitDelay > 0) {
				this.hitDelay --;
			}
		})

		.whenKeyIsPressed(Cassava.KEYCODE.up_arrow, function() {
			if (this.module('module_realisticPhysics').projection > 0) return;
			
			this.y -= SPD_Y;
			if (this.y < Y_LIMIT) this.y = Y_LIMIT;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.down_arrow, function() {
			if (this.module('module_realisticPhysics').projection > 0) return;
			
			this.y += SPD_Y;
			if (this.y2 >= HEIGHT) this.y = HEIGHT - 32;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.left_arrow, function(s, game) {
			if (this.module('module_realisticPhysics').projection > 0) return;
			
			var camera = game.camera;

			this.x -= SPD_X;
			this.module('module_realisticPhysics').facingLeft = true;
			if (this.x < camera.x) this.x = camera.x;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.right_arrow, function() {
			if (this.module('module_realisticPhysics').projection > 0) return;
			
			var camera = game.camera;
			
			this.x += SPD_X;
			this.module('module_realisticPhysics').facingLeft = false;
			if (this.x2 >= camera.x2) this.x = camera.x2 - 32;
		})
		.whenKeyStartToBePressed(Cassava.KEYCODE.space, function() {
			if (this.module('module_realisticPhysics').projection > 0) return;

			var physics = this.module('module_realisticPhysics');

			this.module().interacts = false;

			if (!physics.isJumping) {
				physics.accZ = JUMP;
			}
		})
		.whenKeyStartToBePressed(Cassava.KEYCODE.x, function(screen) {
			if (this.module('module_realisticPhysics').projection > 0) return;

			var data = this.module();
			
			this.module().interacts = false;
			if (data.hitDelay <= 0) {
				data.hitDelay = 20;
				hit1(this, screen, 1);
			}
		})
		.whenKeyStartToBePressed(Cassava.KEYCODE.c, function() {
			if (!this.module('module_realisticPhysics').isJumping) {
				this.module().interacts = true;
			}
		})
		.whenKeyStopToBePressed(Cassava.KEYCODE.c, function() {
			this.module().interacts = false;
		})
})();