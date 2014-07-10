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
	    keyboardType:Ti.UI.KEYBOARD_EMAIL,
	    value:Titanium.API.correo
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
	
	 	var style;
if (Ti.Platform.name === 'android'){
  
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}
else {
 style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK; 
}	
var activityIndicator = Ti.UI.createActivityIndicator({
  color: 'black',
  font: {fontFamily:'Helvetica Neue', fontSize:20, fontWeight:'bold'},
  message: 'Abriendo...',
  style:style,
   backgroundColor : '#000000',
     height:"100%",
  width:"100%",
    color : 'white',
    padding : 10,
    opacity : 0.87,
    top : 0,
    borderRadius : 0,
    borderColor : 'black',
    borderWidth : 1
});

	
	btnRegistro.addEventListener('click',function(){
//validar campos de registro
		var activo=false;
		if(txtNombre.value==""){
			alert("Ingrese su Nombre");
			return false;
		}
		if(txtApellido.value==""){
			alert("Ingrese sus apellidos");
			return false;
		}
		if(txtCorreo.value==""){
			alert("Ingresa tu correo");
			return false;
		}
		if(btnTerminos.value==false){
			alert("Acepte los términos y condiciones");
			return false;
		}else{
			activo=true;
		}
		if(activo==true){
			activityIndicator.show();
			yurl="http://productosalpha.com.pe/webservice/registro.php";
			
			var datos = ({
				"nombres": txtNombre.value,
				"apellido": txtApellido.value,
				"correo": txtCorreo.value,
				"idmobile": Ti.Platform.id
			});
			envioDatos = Ti.Network.createHTTPClient({
				onload:function(e){
					midata = JSON.parse(this.responseText);
					if(midata.rpta=="ok"){
						if(this.status==200){
						activityIndicator.hide();	
						var Gracias = require('/ui/common/gracias');
						gracias = new Gracias();
						gracias.open();
						}
					}
				}
			});
			envioDatos.open("POST",yurl);
			envioDatos.send(datos);
			
		}
		/*
		*/	
			
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
	 self.add(activityIndicator);
	return self;
	
}
module.exports = formulario;
