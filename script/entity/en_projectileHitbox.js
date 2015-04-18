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

	game.Entity.define('entity_projectileHitbox')
		.updateAnyways()
		.sprite('sprite_debug1616y')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 16,
			height: 16
		})

		.data({
			dmg: 1,
			weaponDmg: 0,
			type: null
		})
		.onUpdate(function(self) {
			if (self.module('module_realisticPhysics').z <= 0) self.free();
		})
		.module('module_realisticPhysics')

		.onCreate(function(args) {
			var data = this.module();
			var physics = this.module('module_realisticPhysics');

			this.z = 2;
			data.type = args.type || 'hit';
			data.dmg = args.dmg;
			data.launcher = args.launcher;
			data.projection = !!args.projection;
			physics.z = args.z + PROJECTILES_HEIGHT;
			physics.spdX = PROJECTILES_SPDX * (args.left ? -1 : 1);
			physics.projection = 60;
			this.x = args.x;
			this.y = args.y;
		})
		.whenHitsEntities(['entity_player', 'entity_enemy1'], applyDmg)
})();