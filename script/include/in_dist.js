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

var dist = function(from, to) {
	var disX = distX(from, to),
		disY = distY(from, to);

    return Math.sqrt(disX * disX + disY * disY);
}

var distX = function(from, to) {
	return from.xCenter - to.xCenter;
}

var distY = function(from, to) {
	return from.yCenter - to.yCenter;
}