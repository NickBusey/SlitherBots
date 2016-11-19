// Eats food when not near another snake
// When near another snake, move away
// When really near another snake, run away
// "Looks ahead"
// Highlights things in front

var my_xm = 0;
var my_ym = 0;
var scores = {};
var target_food_id = 0;
var vision_angle = 90;
var bot_mode = false;
var high_score = 0;
var bot_debug = document.createElement("div");
bot_debug.setAttribute('id','botDebug');
var p = document.createElement('p');
p.setAttribute('id','botDebugOutput');
bot_debug.appendChild(p);
document.getElementsByTagName('body')[0].appendChild(bot_debug);
document.getElementById('botDebug').innerHTML = document.getElementById('botDebug').innerHTML + 
	'<style>#botDebug{position: fixed; left: 8px; bottom: 50px; width: 200px; height: 70px; color: rgb(255, 255, 255); font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; font-size: 12px; overflow: hidden; opacity: 1; z-index: 7; display: inline; cursor: default; line-height: 150%; transform: translateZ(0px);}</style>'

setInterval(function() {
	var closest_snake = null;
	var closest_distance = 5000;
	var action = "NONE";
	var my_angle = get_angle(0,0,xm,ym);

	for (var ii = 0;ii<snakes.length;ii++) {
		var target_snake = snakes[ii];
		if (target_snake.id != snake.id) {
			for (var aaa = 0;aaa<target_snake.pts.length;aaa++) {
				var target_point = target_snake.pts[aaa];
				var distance_x = Math.round(target_point.xx - snake.xx);
				var distance_y = Math.round(target_point.yy - snake.yy);
				var distance = Math.abs(distance_x)+Math.abs(distance_y);

				// If we can 'see this snake'
				if (distance < closest_distance) {
					closest_distance = distance;
					closest_snake = target_snake;
				} 
			}
		}
	}

	if (closest_distance < 500)	{
		// Run from the snake
		action = "AVOIDING";
		set_direction(Math.round(closest_snake.xx - snake.xx)*-1,Math.round(closest_snake.yy - snake.yy)*-1);
	} else {
		// Go after food
		var closest_food = null;
		var closest_distance = 5000;
		var map_segments = new Array();

		for (var ii = 0;ii<foods.length;ii++) {
			var food = foods[ii];
			if (food) {
				var distance_x = Math.round(food.xx - snake.xx);
				var distance_y = Math.round(food.yy - snake.yy);
				var distance = Math.abs(distance_x)+Math.abs(distance_y);

				var angle = get_angle(snake.xx,snake.yy,food.xx,food.yy);
				if (angle <= my_angle+vision_angle/2 && angle >= my_angle-vision_angle/2) {
					food.fi = per_color_imgs[2].pr_imgs[10];
					if (distance < closest_distance) {
						closest_distance = distance;
						closest_food = food;
					}
				} else {
					food.fi = per_color_imgs[2].pr_imgs[2];
				}

				var x = Math.round(food.xx/100);
				var y = Math.round(food.yy/100);

				if (map_segments[x] == undefined) {
					map_segments[x] = new Array();
				}

				if (map_segments[x][y] == undefined) {
					map_segments[x][y] = 0;
				} else {
					map_segments[x][y]++;
				}
			}
		}

		if (closest_food) {
			action = "EATING";
			set_direction(Math.round(closest_food.xx - snake.xx),Math.round(closest_food.yy - snake.yy));
		}

		// Search for clusters of food
		for (var ii = 0; ii<map_segments.length; ii++) {
			var section = map_segments[ii];
			if (section) {
				for (var aa=0; aa<section.length; aa++) {
					var segment = section[aa];
					if (segment > 5) {
						action = "MUNCHING";
						set_direction(Math.round(ii*100 - snake.xx),Math.round(aa*100 - snake.yy));
					}
				}
			}
		}
	}

	// Head for the middle of the map by default
	if (action == "NONE") {
		if (snake) {
			set_direction(18246 - snake.xx, 23676 - snake.yy);
		}
	}
	
	document.getElementById('botDebugOutput').innerHTML = action+'<br /> High Score: '+high_score;
	update_high_scores();
},200);

setInterval(function () {
	// Respawn on death
	want_play || play_btn.disabled || (want_play = !0, play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), spinner_shown = nick.disabled = !0, ldmc.style.display = "inline", play_count++, 3 <= play_count && !is_mobile && adsController && (shoa = !0, adsController.initialize(), adsController.requestAds("https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/136317422/slither-io-game-over&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=http%3A%2F%2Fslither.io&correlator=[timestamp]")))
},5000);

function update_high_scores() {
	if (!snake) {
		return false;
	}

	var score = Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1;
	if (score > high_score) {
		high_score = score;
	}
	if (!scores[snake.id] || score > scores[snake.id]) {
		scores[snake.id] = score;
	}
}

function set_direction(my_xm,my_ym) {
	xm = my_xm;
	ym = my_ym;
}

function get_angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx);
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  if (theta < 0) {
  	theta = (theta * -1) + 180; // Turn into 0-360
  }
  return theta;
}
