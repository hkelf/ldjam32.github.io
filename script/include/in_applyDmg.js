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

	if (health.hitResistance && self.type === 'hit') return;
	if (self.type === 'projectile') {
		if (Math.abs(physics.z - this.module('module_realisticPhysics') > 15)) return;
	}

	if (target.id !== self.launcher.id) {
		if (self.launcher.id === 'player') {
			game.state.ammo[game.state.weapon] -= self.weaponDmg;
		}
		if (self.stab) {
			if (self.launcher.xCenter < target.xCenter && !physics.facingLeft) {
				health.incomingDmg = (self.dmg || 0) + CARROT_CRITICAL_BONUS;
			} else if (self.launcher.xCenter >= target.xCenter && physics.facingLeft) {
				health.incomingDmg = (self.dmg || 0) + CARROT_CRITICAL_BONUS;
			}
		} else {
			health.incomingDmg = self.dmg || 0;
		} 
		if (self.projection && physics.projection <= 0) {
			physics.projection = PROJECTION_TIME;
			physics.spdX = PROJECTION_SPDX * ((this.xCenter < target.xCenter) ? 1 : -1);
			physics.accZ = PROJECTION_ACCZ;
		}
		this.free();
	}


}
