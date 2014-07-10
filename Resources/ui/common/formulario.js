function formulario(){
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
		exitOnClose:true,
		navBarHidden:true
	});
	var logoFooter = Ti.UI.createView({
		backgroundImage:"/assets/logofooter.png",
		zIndex:10,
		top:490,
		width:100,
		height:30,
		zIndex:11
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 510,
		width:70,
		height:27,
		left:20,
		color:'#000000'
	});
	
	var logo = Ti.UI.createImageView({
		image:'/assets/alphaLOGO.png',
		top:45,
		
		zIndex:2,
		width:100,
		height:40
	});
	var titulo = Ti.UI.createLabel({
		//text:'Regístrate en /n "Desafío Alpha"',
		html:'Regístrate en <br> "Desafío Alpha"',
		backgroundColor:'#103242',
		color:'#ffffff',
		top:95,
		width:220,
		height:60,
		font:{fontSize:20, fontWeight:'bold'},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	var lblNombre = Ti.UI.createLabel({
		top:155,
		width:200,
		height:20,
		text:'Nombre',
		color:'#103242'
	});
	var txtNombre = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#103242',
	  top: 180, 
	  width: 200,
	  height: 37,
	  backgroundColor:'#ffffff',
	  color:'#103242',
	    keyboardType:Ti.UI.KEYBOARD_DEFAULT
	});
	var lblApellido = Ti.UI.createLabel({
		top:225,
		width:200,
		height:20,
		text:'Apellidos',
		color:'#103242'
	});
	var txtApellido = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#103242',
	  top: 250, 
	  width: 200, 
	  height: 37,
	  backgroundColor:'#ffffff',
	    keyboardType:Ti.UI.KEYBOARD_DEFAULT
	});
	var lblCorreo = Ti.UI.createLabel({
		top:295,
		width:200,
		height:20,
		text:'Correo',
		color:'#103242'
	});
	var txtCorreo = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#103242',
	  top: 320, 
	  width: 200, 
	  height: 37,
	  backgroundColor:'#ffffff',
	    keyboardType:Ti.UI.KEYBOARD_EMAIL
	});

	var btnRegistro = Ti.UI.createButton({
		top: 430,
		width:200,
		height:37,
		backgroundColor:'#37ade2',
		zIndex:7,
		title:'REGISTRATE',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	var btnTerminos = Ti.UI.createSwitch({
	  	value:false,
	  	top: 365,
	  	left:65
	});
	
	var lblTermino = Ti.UI.createLabel({
		text:"Acepto los términos y condiciones",
		top:375,
		left:140,
		width:200,
		height:30,
		font:{fontSize:10},
		color:'#000000'
		
	});
	
	
	btnRegistro.addEventListener('click',function(){
		var Gracias = require('/ui/common/gracias');
			gracias = new Gracias();
			gracias.open();
	});
	
	self.addEventListener('click',function(e){
	txtNombre.blur();
	txtApellido.blur();
	txtCorreo.blur();
});
	self.add(scroll);
	scroll.add(btnTerminos);
	scroll.add(logo);
	scroll.add(titulo);
	scroll.add(lblTermino);
	scroll.add(btnRegistro);
	scroll.add(txtNombre);
	scroll.add(txtApellido);
	scroll.add(txtCorreo);
	scroll.add(lblNombre);
	scroll.add(lblApellido);
	scroll.add(lblCorreo);
	scroll.add(logoFooter);
	scroll.add(logoBottom);
	return self;
}
module.exports = formulario;
