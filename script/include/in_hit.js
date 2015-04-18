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

var hit1 = (function() {
	var params = {};

	return function(launcher, screen, dmg) {
		var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

		params.x = (facingLeft) ? launcher.x - launcher.width / 2 : launcher.xCenter;
		params.y = launcher.y;
		params.dmg = dmg;
		params.launcher = launcher;

		screen.addEntity('entity_attackHitbox', params);
	}
})()

var hit2 = (function() {
	var params = {};

	return function(launcher, screen, dmg) {
		var facingLeft = launcher.module('module_realisticPhysics').facingLeft;

		params.x = (facingLeft) ? launcher.x - launcher.width / 2 : launcher.xCenter;
		params.y = launcher.y;
		params.dmg = dmg;
		params.launcher = launcher;
		params.projection = true;

		screen.addEntity('entity_attackHitbox', params);
	}
})()