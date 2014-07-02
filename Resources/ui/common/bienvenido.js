function bienvenido(){
	
	var scrolls = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%"
	});
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo.jpg",
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT]
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
		top:365,
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
		height:40,
		backgroundColor:'#37ade2',
		zIndex:14,
		text:'COMENZAR',
		color:'#ffffff',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var textTerminos = Ti.UI.createLabel({
		top:355,
		width:"100%",
		height:40,
		color:'#000000',
		text:'Términos y Condiciones',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:14
	});
///// footer botones
  var barraFoot = Ti.UI.createView({
  	  backgroundColor:"#003f88",
  	  width:"100%",
  	  height:40,
  	  bottom:0,
  	  zIndex:100
  });
  
  btnIngreso.addEventListener('click',function(){
  	var Preguntas = require('/ui/common/preguntas');
  		preguntas = new Preguntas();
  		preguntas.open();
  	
  });
  
  btnPuntaje = Ti.UI.createButton({
  	title:'PUNTAJE',
  	backgroundColor:"#003f88",
  	left:5,
  	width:150,
  	height: 40,
  	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
  	color:'#ffffff',
  	zIndex:101,
  	bottom:0,
  	font: {fontFamily:'Helvetica Neue', fontSize:10, fontWeight:'bold'}
  	
  });
   btnSalir = Ti.UI.createButton({
  	title:'SALIR',
  	backgroundColor:"#003f88",
  	right:5,
  	width:150,
  	height: 40,
  	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER                                                                                   ,
  	color:'#ffffff',
  	zIndex:102,
  	bottom:0,
  	font: {fontFamily:'Helvetica Neue', fontSize:10, fontWeight:'bold'}
  });
  
  
  
  self.add(btnPuntaje);
  self.add(btnSalir);
	 scrolls.add(logo);
	 scrolls.add(titulo);
	 scrolls.add(textTerminos);
	 scrolls.add(monstrito);
	 scrolls.add(monstrito2);
	 scrolls.add(monstrito3);
	  scrolls.add(btnIngreso);
	 self.add(scrolls);
	 self.add(barraFoot);
	 return self;
}
module.exports = bienvenido;
