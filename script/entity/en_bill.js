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

	game.Entity.define('entity_bill')
		.sprite('sprite_debug1616g')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 16,
			height: 16
		})
		.onCreate(function(args) {
			this.z = 2;

			//TMP
			this.x = args && args.x || 128;
			this.y = args && args.x || HEIGHT - 64;
		})
		.whenHitsEntities(['entity_player'], function(player, s, game) {
			if (player.module('module_realisticPhysics').isJumping) return;

			this.free();
			game.state.money += 1;
		})
})();