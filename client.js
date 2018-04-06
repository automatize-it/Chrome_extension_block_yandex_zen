var loginTimer;
var zcnt = 0;

function doact(){
		
	if (loginTimer) {
		window.clearTimeout(loginTimer);
	}

	var zendiv = document.getElementsByClassName('infinity-zen');
	for (var i = 0; i != zendiv.length; ++i) {
		zendiv[i].style.visibility = "hidden";
		zendiv[i].style.height = "0px";
		zcnt++;
	}
	var zendiv = document.getElementsByClassName('zen-widget');
	for (var i = 0; i != zendiv.length; ++i) {
		zendiv[i].style.visibility = "hidden";
		zendiv[i].style.height = "0px";
		zcnt++;
	}
	var zendiv = document.getElementsByClassName('article__dzen');
	for (var i = 0; i != zendiv.length; ++i) {
		zendiv[i].style.visibility = "hidden";
		zendiv[i].style.height = "0px";
		zcnt++;
	}
	
}

window.addEventListener("load", doact() );
window.addEventListener("onload", doact() );
document.addEventListener("DOMContentLoaded", doact());