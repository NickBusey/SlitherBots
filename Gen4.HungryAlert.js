// Eats food
// When not near another snake
// When near another snake, move away
// When really near another snake, run away
// Unwinds itself when stuck on a piece of food

var my_xm = 0;
var my_ym = 0;
var scores = {};
var target_food_id = 0;
var target_food_attempt_counts = 0;
var avoid_food_id = 0;
var straighten_out = false;

setInterval(function() {
	var closest_snake = null;
	var closest_distance = 5000;
	var action = "NONE";

	for (var ii = 0;ii<snakes.length;ii++) {
		var target_snake = snakes[ii];
		if (target_snake.id != snake.id) {
			for (var aaa = 0;aaa<target_snake.pts.length;aaa++) {
				var target_point = target_snake.pts[aaa];
				var distance_x = Math.round(target_point.xx - snake.xx);
				var distance_y = Math.round(target_point.yy - snake.yy);
				var distance = Math.abs(distance_x)+Math.abs(distance_y);

				if (distance < closest_distance) {
					closest_distance = distance;
					closest_snake = target_snake;
				}
			}
		}
	}

	if (closest_distance < 500)	{
		// Run from the snake
		action = "RUNNING";
		set_direction(Math.round(closest_snake.xx - snake.xx)*-1,Math.round(closest_snake.yy - snake.yy)*-1);
		if (closest_distance < 150) {
			setAcceleration(0)
			rolly_polly_mode =  true;
		} else if (closest_distance < 300) {
			setAcceleration(1);
		}
	} else {
		rolly_polly_mode = false;
		// Go after food
		setAcceleration(0);
		var closest_food = null;
		var closest_distance = 5000;

		if (straighten_out == true) {
			action = "STRAIGHTEN";
			set_direction(100,100);
		} else {
			for (var ii = 0;ii<foods.length;ii++) {
				var food = foods[ii];
				if (food) {
					var distance_x = Math.round(food.xx - snake.xx);
					var distance_y = Math.round(food.yy - snake.yy);
					var distance = Math.abs(distance_x)+Math.abs(distance_y);

					if (distance < closest_distance && food.id != avoid_food_id) {
						if (target_food_attempt_counts < 15) {
							closest_distance = distance;
							closest_food = food;
						} else {
							// We've been going after the same bit of food for a while, we're in a loop, unwind it
							straighten_out = true;
							target_food_attempt_counts = 0;
							closest_food = false;
							setTimeout(function() {
								straighten_out = false;
							},1000);
						}
					}
				}
			}
			if (closest_food) {
				action = "EATING";
				if (target_food_id == closest_food.id) {
					target_food_attempt_counts++;
				} else {
					target_food_attempt_counts = 0;
					target_food_id = closest_food.id;
				}
				set_direction(Math.round(closest_food.xx - snake.xx),Math.round(closest_food.yy - snake.yy));
			}
		}
	}
	console.log(action);
	update_high_scores();
},200);

setInterval(function () {
	// Respawn on death
	want_play || play_btn.disabled || (want_play = !0, play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), spinner_shown = nick.disabled = !0, ldmc.style.display = "inline", play_count++, 3 <= play_count && !is_mobile && adsController && (shoa = !0, adsController.initialize(), adsController.requestAds("https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/136317422/slither-io-game-over&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=http%3A%2F%2Fslither.io&correlator=[timestamp]")))
},5000);

var rolly_polly_mode = false;
var rolly_polly_speed = 3000;

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

se();
setInterval(function(){
	if (rolly_polly_mode) {
		se();
	}
},rolly_polly_speed);
setTimeout(function () {
	sw();
	setInterval(function(){
		if (rolly_polly_mode) {
			sw();
		}
	},rolly_polly_speed);
},rolly_polly_speed*.25);

setTimeout(function () {
	nw();
	setInterval(function(){
		if (rolly_polly_mode) {
			nw();
		}
	},rolly_polly_speed);
},rolly_polly_speed*.5);

setTimeout(function () {
	ne();
	setInterval(function(){
		if (rolly_polly_mode) {
			ne();
		}
	},rolly_polly_speed);
},rolly_polly_speed*.75);

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
