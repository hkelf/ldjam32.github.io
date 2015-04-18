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

var applyDmg = function(target, screen, game) {
	var self = this.module(),
		physics = target.module('module_realisticPhysics'),
		health = target.module('module_health');

	if (health.hitResistance) return;

	if (target.id !== self.launcher.id) {
		health.incomingDmg = self.dmg || 1;
		if (self.projection && physics.projection <= 0) {
			physics.projection = PROJECTION_TIME;
			physics.spdX = PROJECTION_SPDX * ((this.xCenter < target.xCenter) ? 1 : -1);
			physics.accZ = PROJECTION_ACCZ;
		}
	}

	if (self.launcher.id === 'player') {
		game.state.ammo[game.state.weapon] -= self.weaponDmg;
	}
}
