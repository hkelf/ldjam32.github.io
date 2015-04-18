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

var HIT = {
	// LOW RANGE HIT
	hit1: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width / 2 : launcher.xCenter;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.weaponDmg = weaponDmg || 0;
			params.launcher = launcher;

			screen.addEntity('entity_attackHitbox', params);
		}
	})(),

	// LOW RANGE HIT BUT CRITICAL IF BACKSTAB
	stab: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width / 2 : launcher.xCenter;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.stab = true;
			params.weaponDmg = weaponDmg || 0;
			params.launcher = launcher;

			screen.addEntity('entity_attackHitbox', params);
		}
	})(),

	// LOW RANGE HIT WITH PROJECTION
	hit2: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width / 2 : launcher.xCenter;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.weaponDmg = weaponDmg || 0;
			params.launcher = launcher;
			params.projection = true;

			screen.addEntity('entity_attackHitbox', params);
		}
	})(),

	airCarrot: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var physics = launcher.module('module_realisticPhysics'),
				facingLeft = physics.facingLeft,
				futureX,
				camera = screen.game.camera;

			futureX = launcher.x + (facingLeft ? -CARROT_WARP_DIST : CARROT_WARP_DIST);

			if (futureX < camera.x) futureX = camera.x;
			if (futureX + launcher.width >= camera.x2) futureX = camera.x2 - launcher.width;

			launcher.x = futureX;

			if (physics.spdZ > 0) physics.spdZ = 0; 
			screen.game.state.ammo['carrot'] -= weaponDmg;
		}
	})(),

	//MIDDLE RANGE HIT
	hit3: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width : launcher.x2;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.weaponDmg = weaponDmg || 0;
			params.launcher = launcher;

			screen.addEntity('entity_attackHitbox', params);
		}
	})(),

	//MIDDLE RANGE HIT WITH PROJECTION
	hit4: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width : launcher.x2;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.weaponDmg = weaponDmg || 0;
			params.launcher = launcher;
			params.projection = true;

			screen.addEntity('entity_attackHitbox', params);
		}
	})(),

	airLeek: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var physics = launcher.module('module_realisticPhysics'),
				facingLeft = physics.facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width : launcher.x2;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.launcher = launcher;
			params.projection = true;
			screen.addEntity('entity_attackHitbox', params);
			
			params.x = (facingLeft) ? launcher.x - (launcher.width + 32) : launcher.x2 + 32;
			screen.addEntity('entity_attackHitbox', params);

			physics.z = 0;
			screen.game.state.ammo['leek'] -= weaponDmg;
		}
	})(),

	//LONG RANGE HIT
	hit5: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width / 2 : launcher.xCenter;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.weaponDmg = weaponDmg || 0;
			params.launcher = launcher;
			params.projection = false;
			screen.addEntity('entity_attackHitbox', params);
			
			params.x = (facingLeft) ? launcher.x - 3 * launcher.width / 2 : launcher.xCenter + launcher.width;
			screen.addEntity('entity_attackHitbox', params);
		}
	})(),

	//LONG RANGE HIT WITH PROJECTION
	hit6: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width / 2 : launcher.xCenter;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.weaponDmg = weaponDmg || 0;
			params.launcher = launcher;
			params.projection = true;
			screen.addEntity('entity_attackHitbox', params);
			
			params.x = (facingLeft) ? launcher.x - 3 * launcher.width / 2 : launcher.xCenter + launcher.width;
			screen.addEntity('entity_attackHitbox', params);
		}
	})(),

	airBaguette: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var physics = launcher.module('module_realisticPhysics'),
				facingLeft = physics.facingLeft;

			params.x = launcher.x;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.launcher = launcher;
			params.projection = true;
			screen.addEntity('entity_attackHitbox', params);
			
			params.x = launcher.x2;
			screen.addEntity('entity_attackHitbox', params);

			params.x = launcher.x - launcher.width;
			screen.addEntity('entity_attackHitbox', params);
			
			params.x = launcher.x;

			params.y = launcher.y - launcher.height;
			screen.addEntity('entity_attackHitbox', params);
			
			params.y = launcher.y2;
			screen.addEntity('entity_attackHitbox', params);



			params.y = launcher.y2;
			screen.addEntity('entity_attackHitbox', params);

			physics.z = 0;
			screen.game.state.ammo['leek'] -= weaponDmg;
		}
	})(),

	//MIDDLE RANGE THROWING
	throw1: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var physics = launcher.module('module_realisticPhysics'),
				facingLeft = physics.facingLeft;

			params.x = launcher.xCenter - 8;
			params.y = launcher.yCenter - 8;
			params.z = physics.z;
			params.left = facingLeft;
			params.dmg = dmg;
			params.type = 'projectile';
			params.launcher = launcher;
			params.projection = false;

			if (launcher.id === 'player') {
				screen.game.state.ammo['tomato'] -= weaponDmg;
			}

			screen.addEntity('entity_projectileHitbox', params);
		}
	})(),

	//MIDDLE-LONG RANGE THROWING WITH PROJECTION
	throw2: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var physics = launcher.module('module_realisticPhysics'),
				facingLeft = physics.facingLeft;

			params.x = launcher.xCenter - 8;
			params.y = launcher.yCenter - 8;
			params.z = physics.z;
			params.left = facingLeft;
			params.dmg = dmg;
			params.type = 'projectile';
			params.launcher = launcher;
			params.projection = true;

			if (launcher.id === 'player') {
				screen.game.state.ammo['tomato'] -= weaponDmg;
			}

			screen.addEntity('entity_projectileHitbox', params);
		}
	})(),

	//SHORT-RANGE ZONE WITH PROJECTION
	zone1: (function() {
		var params = {};

		return function(launcher, screen, dmg, weaponDmg) {
			var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

			params.x = (facingLeft) ? launcher.x - launcher.width : launcher.x2;
			params.y = launcher.y;
			params.dmg = dmg;
			params.type = 'hit';
			params.launcher = launcher;
			params.projection = true;
			screen.addEntity('entity_attackHitbox', params);

			params.y = launcher.y - launcher.height;
			screen.addEntity('entity_attackHitbox', params);

			params.y = launcher.y + launcher.height;
			screen.addEntity('entity_attackHitbox', params);

			if (launcher.id === 'player') {
				screen.game.state.ammo['ham'] -= weaponDmg;
			}
		}
	})(),

}
