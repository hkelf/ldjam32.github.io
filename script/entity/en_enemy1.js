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

		.onCreate(function(args) {
			this.z = 2;
			this.module('module_health').health = 3;

			//TMP
			this.x = WIDTH - 96;
			this.y = HEIGHT - 64;
		})
		.onFree(function(screen, game) {
			dropMoney(screen, this.xCenter, this.yCenter, ~~(DROP_MIN * game.state.level + ((DROP_MAX-DROP_MIN) * game.state.level * Math.random())));
		})

		.module('module_ia_enemy1')
		.module('module_realisticPhysics')
		.module('module_health');

	game.defineStateMachineModule('module_ia_enemy1', {
	    initial: 'idle',
	    states: {
	        idle: {
	            ttl: 90,
	            action: function (ia, self) {
	            	var screen = self.screen,
	            		player = screen.getEntity('player'),
	            		disX;

            		if (player) {
		            	lookAt(self, player);
		            	disX = distX(self, player);

		            	if (
                        	(disX < 0 && disX > -ENEMY_1_ATTACK_RADIUS || disX > 0 && disX < ENEMY_1_ATTACK_RADIUS) && 
                        	(self.y <= player.y2 && self.y2 >= player.y2 || self.y2 >= player.y && self.y <= player.y) 
                		) {
		            		ia.nextState = 'attack';
		            	} else {
		            		ia.nextState = 'moveToHero';
		            	}
            		}
	            },
	            next: {
	                idle: 1
	            }
	        },
	        moveToHero: {
	            ttl: 30,
	            action: function (ia, self) {
	            	var screen = self.screen,
	            		player = screen.getEntity('player'),
                        disX,
                        disY,
                        dist;

            		if (player) {
            			lookAt(self, player);
                        disX = distX(player, self);
                        disY = distY(player, self);
                        dist = Math.sqrt(disX * disX + disY * disY);

                        if (!(
                        	(disX < 0 && disX > -ENEMY_1_ATTACK_RADIUS || disX > 0 && disX < ENEMY_1_ATTACK_RADIUS) && 
                        	(self.y <= player.y2 && self.y2 >= player.y2 || self.y2 >= player.y && self.y <= player.y) 
                		)) {
		            		self.x += SPD_X * disX / dist;
	                    	self.y += SPD_Y * disY / dist;
		            	}
	                }
	            },
	            next: {
	                idle: 1
	            }
	        },
	        attack: {
	            ttl: 1,
	            action: function (ia, self) {
	            	var screen = self.screen,
	            		player = screen.getEntity('player');

            		if (player) {
            			lookAt(self, player);
            			hit2(self, screen, 1);
	                }
	            },
	            next: {
	                idle: 1
	            }
	        },
	    }
	});

})();