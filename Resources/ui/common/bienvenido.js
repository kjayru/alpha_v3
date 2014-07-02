function bienvenido(){
	
	var scrolls = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%"
	});
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo.jpg",
		fullscreen: true
	});	
	var monstrito = Ti.UI.createView({
		backgroundImage:"/assets/mons4.png",
		zIndex:10,
		left:10,
		top:10,
		width:103,
		height:143,
		zIndex:10
	});
	var monstrito2 = Ti.UI.createView({
		backgroundImage:"/assets/mons2.png",
		zIndex:10,
		right:0,
		top:375,
		width:103,
		height:143,
		zIndex:11
	});
	var monstrito3 = Ti.UI.createView({
		backgroundImage:"/assets/mos3.png",
		zIndex:10,
		right:10,
		top:50,
		width:103,
		height:143,
		zIndex:12
	});
	var titulo = Ti.UI.createLabel({
		text:"¿LISTO PARA EL DESAFIO?",
		backgroundColor:'#FFFFFF',
		color:'#000000',
		width:200,
		height:40,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		top:270,
		zIndex:13	
	});
	var logo = Ti.UI.createImageView({
		image:'/assets/alphaLOGO.png',
		top:160,
		right:35,
		zIndex:2,
		width:250,
		height:106,
		zIndex:14
	});
	var btnIngreso = Ti.UI.createLabel({
		top: 320,
		width:200,
		height:60,
		backgroundColor:'#37ade2',
		zIndex:14,
		text:'Comenzar',
		color:'#000000',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var textTerminos = Ti.UI.createLabel({
		top:380,
		width:200,
		height:40,
		color:'#000000',
		text:'Términos y Condiciones',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:8,
		left:20
	});
	
	 scrolls.add(logo);
	 scrolls.add(titulo);
	 scrolls.add(textTerminos);
	 scrolls.add(monstrito);
	 scrolls.add(monstrito2);
	 scrolls.add(monstrito3);
	  scrolls.add(btnIngreso);
	 self.add(scrolls);
	 return self;
}
module.exports = bienvenido;
