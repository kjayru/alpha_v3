function ganaste(){
	
		var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%",
		scrollType:'vertical'
	});
	
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1,
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT],
		exitOnClose:true
	});
	var logoFooter = Ti.UI.createView({
		backgroundImage:"/assets/logofooter.png",
		zIndex:10,
		top:400,
		width:100,
		height:30,
		zIndex:11
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 490,
		width:70,
		height:27,
		left:20,
		color:'#000000'
	});
	
	var boca  = Ti.UI.createImageView({
		backgroundImage:'/assets/grafico_win.png',
		width:150,
		height:197,
		
		zIndex:10,
		top:45
	});
	var titulo = Ti.UI.createLabel({
		text:'¡Ay ay casi pero no! intentalo nuevamente',
		backgroundColor:'#103242',
		color:'#ffffff',
		top:255,
		width:200,
		height:46,
		zIndex:12,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var contexto = Ti.UI.createLabel({
		text:'Comparte la aplicación y gana un punto extra.',
		backgroundColor:'#ffffff',
		color:'#103242',
		width:200,
		height:70,
		top:301,
		zIndex:11,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
		
		
	});
	var btnRegistro = Ti.UI.createButton({
		top: 390,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:14,
		title:'Siguiente Desafio',
		color:'#ffffff',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	 var barraFoot = Ti.UI.createView({
  	  backgroundColor:"#003f88",
  	  width:"100%",
  	  height:40,
  	  bottom:0,
  	  zIndex:100
  });
  
  var btnFacebook = Ti.UI.createButton({
		backgroundImage:'/assets/facebook.png',
		width:40,
		height:40,
		bottom:5,
		left:80,
		zIndex:20
	});
	
	var btnTwitter= Ti.UI.createButton({
		backgroundImage:'/assets/twitter.png',
		width:40,
		height:40,
		bottom:5,
		right:80,
		zIndex:21
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
  self.add(barraFoot);
	self.add(scroll);
	scroll.add(btnRegistro);
	scroll.add(logoFooter);
	scroll.add(boca);
	scroll.add(contexto);
	scroll.add(titulo);
	scroll.add(logoBottom);
	return self;
};
module.exports = ganaste;
