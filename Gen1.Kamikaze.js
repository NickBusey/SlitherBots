// This bot tries to go straight for the nearest snake

var my_xm = 0;
var my_ym = 0;
var scores = {};

setInterval(function() {
	var closest_snake = null;
	var closest_distance = 5000;

	for (var ii = 0;ii<snakes.length;ii++) {
		var targetSnake = snakes[ii];
		if (targetSnake.id != snake.id) {
			console.log('Enemy: ',targetSnake);
			var distance_x = Math.round(targetSnake.xx - snake.xx);
			var distance_y = Math.round(targetSnake.yy - snake.yy);
			var distance = Math.abs(distance_x)+Math.abs(distance_y);

			console.log('	Distance: ',distance,' - ',distance_x,distance_y)

			if (distance < closest_distance) {
				closest_distance = distance;
				closest_snake = targetSnake;
			}
		}
	}
	console.log("CLOSEST: ",closest_distance,closest_snake);
	set_direction(Math.round(closest_snake.xx - snake.xx),Math.round(closest_snake.yy - snake.yy));

	update_high_scores();
},200);

setInterval(function () {
	// Respawn on death
	want_play || play_btn.disabled || (want_play = !0, play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), spinner_shown = nick.disabled = !0, ldmc.style.display = "inline", play_count++, 3 <= play_count && !is_mobile && adsController && (shoa = !0, adsController.initialize(), adsController.requestAds("https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/136317422/slither-io-game-over&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=http%3A%2F%2Fslither.io&correlator=[timestamp]")))
},5000);

function se() {
	set_direction(100,100);
}

function sw() {
	set_direction(-100,100);
}

function nw() {
	set_direction(-100,-100);
}

function ne() {
	set_direction(100,-100);
}

function update_high_scores() {
	if (!snake) {
		return false;
	}

	var score = Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1;
	if (!scores[snake.id] || score > scores[snake.id]) {
		scores[snake.id] = score;
	}
}

function set_direction(my_xm,my_ym) {
	xm = my_xm;
	ym = my_ym;
}