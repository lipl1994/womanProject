$(function(){
	function zx_win_resie(){
		var _c =  document.body.clientWidth/1920;
		console.log($(window).width())
		var _t = -((1-_c)/(2*_c))*100;
		$('html').css({'transform':'scale('+_c+') translate('+_t+'%, '+_t+'%)'});
	}
	zx_win_resie();
	var evt = "onorientationchange" in window ? "orientationchange" : "resize";
	console.log(evt)
	window.addEventListener(evt, function() {
			setTimeout(function(){ zx_win_resie();}, 300);
	}, false)
})

var localTi = window.setInterval(function(){
    var date = (new Date()).toString();
    if(date.indexOf('02:00:00') != -1){
        window.location.reload();
    }else{
        return;
    }
},1000);