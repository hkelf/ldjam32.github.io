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

	game.initialState(STATE)
        .assets(ASSETS)
        .background(BACKGROUND)
        .startAtScreen(INITIAL_SCREEN);

    game.Camera.ordering({2: Cassava.Camera.PLACE_BY_Y2});

/*    game.Audio
        .addChannel('fx')
        .addChannel('music');
*/

})();