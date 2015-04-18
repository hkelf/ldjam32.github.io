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
	})()
}
