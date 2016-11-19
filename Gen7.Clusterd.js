// Seeks out clusters of food

var my_xm = 0;
var my_ym = 0;
var scores = {};
var target_food_id = 0;
var vision_angle = 90;
var bot_mode = false;
var high_score = 0;
// How many pieces of food need to be in a map segment to be targeted for 'munching'
var cluster_threshold = 8;
document.getElementById('nick').value = 'Robot Overlord'

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
	var action_color = "#000";
	var my_angle = get_angle(0,0,xm,ym);

	for (var ii = 0;ii<snakes.length;ii++) {
		var target_snake = snakes[ii];
		if (target_snake.id != snake.id) {
			target_snake.cv = 2;
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

	var closest_food = null;
	var closest_food_distance = 5000;
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
					closest_food_distance = distance;
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

	if (closest_distance < 500)	{
		// Run from the snake
		action = "AVOIDING";
		action_color = "#ff0000";
		closest_snake.cv = 7;
		set_direction(Math.round(closest_snake.xx - snake.xx)*-1,Math.round(closest_snake.yy - snake.yy)*-1);
	} else {
		if (closest_food) {
			action = "EATING";
			action_color = "#24C342"
			set_direction(Math.round(closest_food.xx - snake.xx),Math.round(closest_food.yy - snake.yy));
		}

		var closest_cluster_distance = 0;
		var closest_cluster = {};

		// Search for clusters of food
		for (var ii = 0; ii<map_segments.length; ii++) {
			var column = map_segments[ii];
			if (column) {
				for (var aa=0; aa<column.length; aa++) {
					var row = column[aa];
					if (row > cluster_threshold) {
						var distance = Math.abs((ii*100) - snake.xx) + Math.abs((aa*100) - snake.yy);
						if (distance > closest_cluster_distance) {
							closest_cluster_distance = distance;
							closest_cluster.x = ii*100;
							closest_cluster.y = aa*100;
						}
					}
				}
			}
		}

		if (closest_cluster_distance > 40) {
			action = "MUNCHING";
			action_color = "#2486C3";
			set_direction(closest_cluster.x - snake.xx, closest_cluster.y - snake.yy);
			var food = foods[0];
			food.fi = per_color_imgs[5].pr_imgs[4];
			food.xx=closest_cluster.x;
			food.yy=closest_cluster.y;
			food.id=6666666;
			foods.push(food);

		}
	}

	// Head for the middle of the map by default
	if (action == "NONE") {
		if (snake) {
			set_direction(18246 - snake.xx, 23676 - snake.yy);
		}
	}
	
	document.getElementById('botDebugOutput').innerHTML = action+'<br /> High Score: '+high_score;
	document.getElementById('botDebug').style.backgroundColor = action_color;
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
