// This is the most basic 'bot'.
// It turns and accelerates randomly.
// It detects other snakes every second.
// It stores it's own high scores.
// Have fun! ;)

var my_xm = 0;
var my_ym = 0;
var scores = {};

setInterval(function() {
    xm=my_xm;
    my_xm+=100;
    if (my_xm>1000) {my_xm=-1000;}

    ym=my_ym;
    my_ym+=50;
    if (my_ym>2000) {my_ym=-1000;}

},100);

var x = 0;
setInterval(function() {
    setAcceleration(x);  
    if (x) { x=0 } else { x=1 }

	for (var ii = 0;ii<snakes.length;ii++) {
		var targetSnake = snakes[ii];
		if (targetSnake.id != snake.id) {
			console.log('ENEMY SNAKE DETECTED: ',targetSnake);
		}
	}
	
	update_high_scores();

	// Respawn on death
	want_play || play_btn.disabled || (want_play = !0, play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), spinner_shown = nick.disabled = !0, ldmc.style.display = "inline", play_count++, 3 <= play_count && !is_mobile && adsController && (shoa = !0, adsController.initialize(), adsController.requestAds("https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/136317422/slither-io-game-over&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=http%3A%2F%2Fslither.io&correlator=[timestamp]")))
},1000);

function update_high_scores() {
	if (!snake) {
		return false;
	}

	var score = Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1;
	if (!scores[snake.id] || score > scores[snake.id]) {
		scores[snake.id] = score;
	}
}