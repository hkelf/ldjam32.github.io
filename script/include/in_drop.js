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

var dropMoney = (function() {
	var parameters = {};

	var random = Math.random;
	var PI = Math.PI;
	var cos = Math.cos;
	var sin = Math.sin;

	return function(screen, originX, originY, total) {
		var r,
			a;

		for (; total > 0; --total) {
			r = random() * 16;
			a = random() * 2 * PI;

			parameters.x = originX + r * cos(a);
			parameters.y = originY + r * sin(a);

			screen.addEntity('entity_bill', parameters);
		}
	}
})()
