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

	game.Entity.define('entity_boss1')
		.sprite('sprite_debug3232')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})

		.onCreate(function(args) {
			this.z = 2;
			this.module('module_health').health = 15;

			//TMP
			this.x = WIDTH - 96;
			this.y = HEIGHT - 64;
		})
		.onFree(function(screen, game) {
			dropMoney(screen, this.xCenter, this.yCenter, DROP_BOSS_COEF * (~~(DROP_MIN * game.state.level + ((DROP_MAX-DROP_MIN) * game.state.level * Math.random()))));
		})

		.module('module_ia_boss1')
		.module('module_realisticPhysics')
		.module('module_health');

	game.defineStateMachineModule('module_ia_boss1', {
	    initial: 'idle',
	    states: {
	        idle: {
	            ttl: 120,
	            action: function (ia, self) {
	            	var screen = self.screen,
	            		player = screen.getEntity('player'),
	            		disX;

            		if (player) {
		            	disX = distX(self, player);

		            	if (
                        	(disX < 0 && disX > -ENEMY_1_ATTACK_RADIUS || disX > 0 && disX < ENEMY_1_ATTACK_RADIUS) && 
                        	(self.y <= player.y2 && self.y2 >= player.y2 || self.y2 >= player.y && self.y <= player.y) &&
                        	(player.xCenter <= self.xCenter && self.module('module_realisticPhysics').facingLeft || 
                        		player.xCenter >= self.xCenter && !self.module('module_realisticPhysics').facingLeft)
                		) {
		            		ia.nextState = 'attack';
		            	}
            		}
	            },
	            next: {
	                idle: 1,
	                moveToHero: 1,
	                alignHorizontally: 1
	            }
	        },
	        moveToHero: {
	            ttl: 120,
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
		            		self.x += ENEMY_1_SPD_COEF * SPD_X * disX / dist;
	                    	self.y += ENEMY_1_SPD_COEF * SPD_Y * disY / dist;
		            	}
	                }
	            },
	            next: {
	                idle: 1
	            }
	        },
	        alignHorizontally: {
	            ttl: 60,
	            action: function (ia, self) {
	            	var screen = self.screen,
	            		player = screen.getEntity('player'),
                        disX,
                        disY,
                        dist;

            		if (player) {
            			lookAt(self, player);

        				if(self.yCenter > player.y2) {
	                    	self.y -= SPD_Y;
        				}

        				if(self.yCenter < player.y) {
	                    	self.y += SPD_Y;
        				}
	                }
	            },
	            next: {
	            	dash_attack: 1
	            }
	        },
	        dash_attack: {
	            ttl: 180,
	            action: function (ia, self) {
	            	var camera = game.camera;
	            	var screen = self.screen;

	            	if (self.module('module_realisticPhysics').facingLeft) {
	            		self.x -= SPD_X * 2.5;
	            	} else {
	            		self.x += SPD_X * 2.5;
	            	}
        			HIT.hit2(self, screen, 3);

	            	if (self.x <= camera.x) {
	            		self.x = camera.x;
	            		ia.actionTTL = 0;
	            		ia.nextAction = 'stun';
	            	} else if (self.x2 >= camera.x2){
	            		self.x = camera.x2 - self.width;
	            		ia.actionTTL = 0;
	            		ia.nextAction = 'stun';
	            	}
	            },
	            next: {
	            	idle: 1
	            }
	        },
	        stun: {
	        	ttl: 180,
	            action: function (ia, self) {
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
            			HIT.hit4(self, screen, 3);
	                }
	            },
	            next: {
	                idle: 1
	            }
	        },
	    }
	});

})();