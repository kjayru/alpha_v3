function preguntas(){
		var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%"
	});
	
	var self = Ti.UI.createView({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1
	});
	
	var monstrito= Ti.UI.createView({
		backgroundImage:"/assets/mons_inicio.png",
		zIndex:10,
		left:-10,
		top:140,
		width:103,
		height:143
	});
	var logo = Ti.UI.createImageView({
		image:'/assets/alphaLOGO.png',
		top:65,
		right:35,
		zIndex:2,
		width:250,
		height:106
	});

}
module.exports = preguntas;
