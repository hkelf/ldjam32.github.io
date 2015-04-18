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

	game.Entity.define('entity_player')
		.sprite('sprite_debug3232g')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})
		.onCreate(function() {
			this.id = 'player';
			this.z = 2;
			this.module('module_health').health = 5;


			//TMP
			this.x = 32;
			this.y = HEIGHT - 64;
		})
		.module('module_realisticPhysics')
		.module('module_health')

		.data({
			hitDelay: 0,
			buys: false,
			onStand: false,

			lag: 0,
			hitLag: 0,
			comboStade: 0
		})
		.onUpdate(function(self) {
			var health = self.module('module_health'); 

			if (this.lag > 0) {
				 this.lag --;
				 if (this.lag === 0) this.comboStade = 0;
			}
			if (this.hitLag > 0) this.hitLag --;

			this.buys = false;

			if (self.module('module_realisticPhysics').z > Z_SAFE_ZONE) {
				health.hitResistance = true;
			} else {
				health.hitResistance = false;
			}
		})

		.whenKeyIsPressed(Cassava.KEYCODE.up_arrow, function() {
			if (this.module('module_realisticPhysics').projection > 0) return;
			if (this.module().lag > 0) return;
			
			this.y -= SPD_Y;
			if (this.y < Y_LIMIT) this.y = Y_LIMIT;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.down_arrow, function() {
			if (this.module('module_realisticPhysics').projection > 0) return;
			if (this.module().lag > 0) return;
			
			this.y += SPD_Y;
			if (this.y2 >= HEIGHT) this.y = HEIGHT - 32;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.left_arrow, function(s, game) {
			if (this.module('module_realisticPhysics').projection > 0) return;
			if (this.module().lag > 0) return;
			
			var camera = game.camera;

			this.x -= SPD_X;
			this.module('module_realisticPhysics').facingLeft = true;
			if (this.x < camera.x) this.x = camera.x;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.right_arrow, function() {
			if (this.module('module_realisticPhysics').projection > 0) return;
			if (this.module().lag > 0) return;
			
			var camera = game.camera;
			
			this.x += SPD_X;
			this.module('module_realisticPhysics').facingLeft = false;
			if (this.x2 >= camera.x2) this.x = camera.x2 - 32;
		})
		.whenKeyStartToBePressed(Cassava.KEYCODE.space, function(s, game) {
			if (this.module('module_realisticPhysics').projection > 0) return;
			if (this.module().lag > 0) return;
			if (game.state.weapon === 'ham') return;

			var physics = this.module('module_realisticPhysics');

			this.module().interacts = false;

			if (!physics.isJumping) {
				physics.accZ = JUMP;
			}
		})
		.whenKeyStartToBePressed(Cassava.KEYCODE.x, function(screen, game) {
			var physics = this.module('module_realisticPhysics');

			if (physics.projection > 0) return;
			if (this.module().hitLag > 0) return;

			var data = this.module();
			
			this.module().interacts = false;

			if (physics.isJumping) {
				useWeaponInAir(data, this, screen, game);
			} else {
				useWeapon(data, this, screen, game);
			}
		})
		.whenKeyStartToBePressed(Cassava.KEYCODE.c, function(screen) {
			var caddy = screen.getEntity('caddy');

			if (this.module('module_realisticPhysics').isJumping) return;
			this.module().buys = true;
			
			if (caddy && caddy.module('module_realisticPhysics').projection > 0) return;
			this.module().interacts = true;
		})
		.whenKeyStopToBePressed(Cassava.KEYCODE.c, function() {
			this.module().interacts = false;
		})


	function useWeapon(data, user, screen, game) {
		var currentWeapon = game.state.weapon;
		var weaponData = FOOD_WEAPON[currentWeapon];
		var comboStade = weaponData.combo[data.comboStade];

		if (game.state.ammo[currentWeapon] <= 0) return;
		if (data.comboStade === weaponData.comboMax) return;
		
		HIT[comboStade.action](user, screen, comboStade.dmg, comboStade.wpndmg);		
		data.lag = comboStade.lag;
		data.hitLag = comboStade.hitLag || 0;
		data.comboStade ++;
	}

	function useWeaponInAir(data, user, screen, game) {
		var currentWeapon = game.state.weapon;
		var weaponData = FOOD_WEAPON[currentWeapon];
		var comboStade = weaponData.air;

		if (game.state.ammo[currentWeapon] <= 0) return;

		HIT[comboStade.action](user, screen, comboStade.dmg, comboStade.wpndmg);		
		data.lag = comboStade.lag;
		data.hitLag = comboStade.hitLag || 0;
	}

})();