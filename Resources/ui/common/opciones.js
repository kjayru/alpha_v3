
function opciones() {

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

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:"Aplicacion Alpha",
		height:20,
		width:200,
		bottom:100
	});
	
	var texto1 = Ti.UI.createLabel({
		color:'#ffffff',
		text:"Registrate para seguir ganando puntos y canjear productos",
		height:40,
		width:200,
		top:175,
		right:30,
		font: {fontFamily:'Snell Roundhand', fontSize:13},
		backgroundColor:'#000000',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:4
	});
	var texto2 = Ti.UI.createLabel({
		color:'#000000',
		text:"Registrate con tu cuenta de facebook o ingresa tu correo",
		height:60,
		width:200,
		top:205,
		right:30,
		font: {fontFamily:'Snell Roundhand', fontSize:13},
		backgroundColor:'#ffffff',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:3
	});
	
	
	
	
	var btnFacebook = Ti.UI.createButton({
		top: 280,
		width:200,
		height:37,
		
		backgroundImage:'/assets/btnfacebook.png',
		zIndex:7,
		
	});
	
	var btnRegistro = Ti.UI.createButton({
		top: 380,
		width:200,
		height:37,
		backgroundColor:'#37ade2',
		zIndex:7,
		title:'CONTINUAR',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
		
	});
	
	
	
	var logoFooter = Ti.UI.createView({
		backgroundImage:"/assets/logofooter.png",
		zIndex:10,
		top:460,
		width:100,
		height:30,
		
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 490,
		width:70,
		height:27,
		left:20,
		color:'#000000',
		zIndex:11
	});


btnFacebook.addEventListener('click',function(){
	
	
	
	var Formulario = require('/ui/common/formulario');
		formulario = new Formulario();
		formulario.open();	
		
		
});
btnRegistro.addEventListener('click',function(){
	
	if(txtCorreo.value=="Ingrese su correo"){
		alert("Ingrese su correo");
		return false;
	}
	if(txtCorreo.value==""){
		alert("Ingrese su correo");
		return false;
	}
	Titanium.API.correo=txtCorreo.value;
	
	var Formulario = require('/ui/common/formulario');
		formulario = new Formulario();
		formulario.open();	
});

var txtCorreo = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: 330, 
  width: 200, height: 37,
  backgroundColor:'#ffffff',
  hintText:"Ingrese su correo",
  keyboardType:Ti.UI.KEYBOARD_EMAIL
});

self.addEventListener('click',function(e){
	txtCorreo.blur();
});

var fb = require('facebook');
fb.appid = 1397156940536791;
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
	fb.requestWithGraphPath('me', {}, 'GET', function(e) {
	    if (e.success) {
	       var getdata     = JSON.parse(e.result);
	        Ti.API.correo    = getdata.email;
	        Ti.API.fbid      = getdata.id;
	        Ti.API.nombres   = getdata.first_name;
	        Ti.API.apellidos = getdata.last_name;
	        var Formulario   = require('/ui/common/formulario');
			formulario       = new Formulario();
			formulario.open();
	    } else if (e.error) {
	        alert(e.error);
	    } else {
	        alert('Unknown response');
	    }
	});
});

	scroll.add(logo);
	scroll.add(txtCorreo);
	scroll.add(texto1);
	scroll.add(monstrito);
	scroll.add(texto2);
	scroll.add(logoFooter);
	scroll.add(fb.createLoginButton({
		top:280,
		style:fb.BUTTON_STYLE_WIDE
	}));
	scroll.add(btnRegistro);
	scroll.add(logoBottom);
	self.add(scroll);
	//Add behavior for UI
	return self;
}
module.exports = opciones;