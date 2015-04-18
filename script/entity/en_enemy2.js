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

	game.Entity.define('entity_enemy2')
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

		.module('module_ia_enemy2')
		.module('module_realisticPhysics')
		.module('module_health');

	game.defineStateMachineModule('module_ia_enemy2', {
	    initial: 'idle',
	    states: {
	        idle: {
	            ttl: 60,
	            action: function (ia, self) {
	            	var screen = self.screen,
	            		caddy = screen.getEntity('caddy'),
	            		disX;

            		if (caddy) {
		            	disX = distX(self, caddy);

		            	if (
                        	(disX < 0 && disX > -ENEMY_1_ATTACK_RADIUS || disX > 0 && disX < ENEMY_1_ATTACK_RADIUS) && 
                        	(self.y <= caddy.y2 && self.y2 >= caddy.y2 || self.y2 >= caddy.y && self.y <= caddy.y) &&
                        	(caddy.xCenter <= self.xCenter && self.module('module_realisticPhysics').facingLeft || 
                        		caddy.xCenter >= self.xCenter && !self.module('module_realisticPhysics').facingLeft)
                		) {
		            		ia.nextState = 'attack';
		            	} else {
		            		ia.nextState = 'moveToCaddy';
		            	}
            		}
	            },
	            next: {
	                idle: 1
	            }
	        },
	        moveToCaddy: {
	            ttl: 180,
	            action: function (ia, self) {
	            	var screen = self.screen,
	            		caddy = screen.getEntity('caddy'),
                        disX,
                        disY,
                        dist;

            		if (caddy) {
            			lookAt(self, caddy);
                        disX = distX(caddy, self);
                        disY = distY(caddy, self);
                        dist = Math.sqrt(disX * disX + disY * disY);

                        if (!(
                        	(disX < 0 && disX > -ENEMY_1_ATTACK_RADIUS || disX > 0 && disX < ENEMY_1_ATTACK_RADIUS) && 
                        	(self.y <= caddy.y2 && self.y2 >= caddy.y2 || self.y2 >= caddy.y && self.y <= caddy.y) 
                		)) {
		            		self.x += ENEMY_1_SPD_COEF * SPD_X * disX / dist;
	                    	self.y += ENEMY_1_SPD_COEF * SPD_Y * disY / dist;
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
	            		caddy = screen.getEntity('caddy');

            		if (caddy) {
            			lookAt(self, caddy);
            			HIT.hit2(self, screen, 1);
	                }
	            },
	            next: {
	                idle: 1
	            }
	        },
	    }
	});

})();