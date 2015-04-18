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

	game.Entity.define('entity_tradeZone')
		.sprite('sprite_debugTradeZone')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: TILE_DIMENSIONS,
			height: 16
		})

		.data({
			currentFood: 'leek',
			currentPrice: 2
		})

		.onCreate(function(args) {
			var data = this.module();

			this.y = Y_LIMIT;
			this.x = args && args.pos * TILE_DIMENSIONS || 0;
		})
		.whenHitsEntities(['entity_player'], function(player, s, game) {
			var data = this.module();

			if (player.module().buys && game.state.money >= data.currentPrice) {
				game.state.money -= data.currentPrice;
				game.state.ammo[data.currentFood] += 50;
				if (game.state.ammo[data.currentFood] >= 100) game.state.ammo[data.currentFood] = 100; 
				data.currentFood = FOOD[Math.random() * FOOD.length];
				data.currentPrice *= (1 + Math.random());
			}
		})
})();