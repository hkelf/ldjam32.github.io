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

	game.Entity.define('entity_enemy1')
		.sprite('sprite_debug3232')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})

		.data({
			health: 3
		})
		.onUpdate(function() {
			
		})

		.onCreate(function() {
			this.z = 2;

			//TMP
			this.x = WIDTH - 96;
			this.y = HEIGHT - 64;
		})
		.module('module_realisticPhysics');
})();