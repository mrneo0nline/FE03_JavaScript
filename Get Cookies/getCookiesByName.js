function getCookies(cname){
	var cname = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == '') {
			c = c.substring(1);
		}
		if (c.indexOf(cname) == '0') {
			return c.substring(cname.length, c.length);
		}
	}
}