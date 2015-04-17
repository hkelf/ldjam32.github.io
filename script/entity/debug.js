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

	game.Entity.define('entity_debug1616')
		.sprite('sprite_debug1616')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 16,
			height: 16
		})
		.onCreate(function() {
			this.x = WIDTH / 2 - 8;
			this.y = HEIGHT / 2 - 8;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.up_arrow, function() {
			this.y -= 2;
			if (this.y < 0) this.y = 0;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.down_arrow, function() {
			this.y += 2;
			if (this.y2 >= HEIGHT) this.y = HEIGHT - 16;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.left_arrow, function() {
			this.x -= 2;
			if (this.x < 0) this.x = 0;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.right_arrow, function() {
			this.x += 2;
			if (this.x2 >= WIDTH) this.x = WIDTH - 16;
		})


	game.Entity.define('entity_debug3232')
		.sprite('sprite_debug3232')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})
		.onCreate(function() {
			this.x = WIDTH / 2 - 16;
			this.y = HEIGHT / 2 - 16;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.up_arrow, function() {
			this.y -= 2;
			if (this.y < 0) this.y = 0;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.down_arrow, function() {
			this.y += 2;
			if (this.y2 >= HEIGHT) this.y = HEIGHT - 32;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.left_arrow, function() {
			this.x -= 2;
			if (this.x < 0) this.x = 0;
		})
		.whenKeyIsPressed(Cassava.KEYCODE.right_arrow, function() {
			this.x += 2;
			if (this.x2 >= WIDTH) this.x = WIDTH - 32;
		})


	game.Entity.define('entity_debug6464')
		.sprite('sprite_debug6464')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 64,
			height: 64
		})
		.onCreate(function() {
			this.x = WIDTH / 2 - 32;
			this.y = HEIGHT / 2 - 32;
		})
		.data({
			spdX: 2,
			spdY: 2
		})
		.onUpdate(function (self) {
			self.x += this.spdX;
			self.y += this.spdY;

			if (self.y < 0) {
				self.y = 0;
				this.spdY *= -1;
			}
			if (self.y2 >= HEIGHT) {
				self.y = HEIGHT - 64;	
				this.spdY *= -1;
			} 
			if (self.x < 0) {
				self.x = 0;
				this.spdX *= -1;
			}
			if (self.x2 >= WIDTH) {
				this.x = WIDTH - 64;
				this.spdX *= -1;
			}
		})

})()