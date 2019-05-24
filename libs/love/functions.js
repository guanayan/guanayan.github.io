/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

//这个不对，太垃圾了，日期都算不好
// function timeElapse(date){
// 	var current = Date();
// 	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
// 	var days = Math.floor(seconds / (3600 * 24));
// 	seconds = seconds % (3600 * 24);
// 	var hours = Math.floor(seconds / 3600);
// 	if (hours < 10) {
// 		hours = "0" + hours;
// 	}
// 	seconds = seconds % 3600;
// 	var minutes = Math.floor(seconds / 60);
// 	if (minutes < 10) {
// 		minutes = "0" + minutes;
// 	}
// 	seconds = seconds % 60;
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}
// 	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
// 	$("#clock").html(result);
// }
function timeElapse(date){
    var now = new Date();
    var grt= new Date("02/27/2017 12:13:14");//恋爱时间(月/日/年)
    now.setTime(now.getTime()+250);
    var days = (now - grt ) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);
    var hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
    var hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    var mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
    var seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    var snum = Math.round(seconds);
    if(String(snum).length ==1 ){snum = "0" + snum;}
    dnum=dnum+1;
    var result = "第 <span class=\"digit\">" + dnum + "</span> 天 <span class=\"digit\">" + hnum + "</span> 小时 <span class=\"digit\">" + mnum + "</span> 分钟 <span class=\"digit\">" + snum + "</span> 秒";
    $("#clock").html(result);
}
