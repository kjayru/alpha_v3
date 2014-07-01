//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%"
	});
	var self = Ti.UI.createView({
		backgroundImage:"/assets/fondo.jpg",
		zIndex:1
	});
	var logo = Ti.UI.createImageView({
		image:'/assets/alphaLOGO.png',
		top:20,
		left:5,
		zIndex:2,
		width:'100%'
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
		text:"Elije la edad del Jugador",
		height:40,
		width:200,
		top:195,
		font: {fontFamily:'Snell Roundhand', fontSize:13},
		backgroundColor:'#000000',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:4
	});
	var texto2 = Ti.UI.createLabel({
		color:'#000000',
		text:"Fecha de Nacimiento",
		height:60,
		width:200,
		top:225,
		font: {fontFamily:'Snell Roundhand', fontSize:13},
		backgroundColor:'#ffffff',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:3
	});
	
	var picker = Ti.UI.createPicker({
		  top:300,
	  	zIndex:6
	});

	var picker = Ti.UI.createPicker({
	  type:Ti.UI.PICKER_TYPE_DATE,
	  minDate:new Date(1930,0,1),
	  maxDate:new Date(2010,11,31),
	  top:290,
	  zIndex:6
	  	});
	  
	
	var mifecha;
	
	picker.addEventListener('change',function(e){
	 //alert("User selected date: " + e.value.toLocaleString());
	  mifecha =  e.value;
	  return mifecha;
	});
	
	var crearbloque= Ti.UI.createLabel({
		top:310,
		width:250,
		height:180,
		backgroundColor:'#000000',
		zIndex:5,
		opacity:0.75
		 
	});
	
	var btnIngreso = Ti.UI.createLabel({
		top: 480,
		width:200,
		height:60,
		backgroundColor:'#37ade2',
		zIndex:7,
		text:'Ingresar',
		color:'#000000',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var textTerminos = Ti.UI.createLabel({
		top:560,
		width:200,
		height:40,
		color:'#000000',
		text:'Términos y Condiciones',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:8
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 610,
		width:200,
		height:40,
		color:'#000000',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:9
	});
	
	btnIngreso.addEventListener('click',function(){
		
		btnIngreso.backgroundColor='#ffffff';
		alert(mifecha);
	});
	scroll.add(logo);
	scroll.add(texto1);
	scroll.add(texto2);
	scroll.add(crearbloque);
	scroll.add(picker);
	scroll.add(btnIngreso);
	scroll.add(logoBottom);
	scroll.add(textTerminos);
	self.add(scroll);
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});

	return self;
}

module.exports = FirstView;
