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

	game.Entity.define('entity_caddy')
		.sprite('sprite_debug3232b')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})
		.onCreate(function(args) {
			this.id = 'caddy';
			this.z = 2;

			//TMP
			this.x = args && args.x || 128;
			this.y = args && args.x || HEIGHT - 64;
		})
		.whenHitsEntities(['entity_player'], function(player) {
			var disX,
            	disY,
            	dist;
			
			if (player.module().interacts) {
				disX = distX(player, this);
                disY = distY(player, this);
                dist = Math.sqrt(disX * disX + disY * disY);

                if (dist > CADDY_MOVE_RADIUS) {
	        		this.x += CADDY_SPD * disX / dist;
	            	this.y += CADDY_SPD * disY / dist;
                }
			}
		})
})();