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
		 orientationModes: [Ti.UI.PORTRAIT],
        fullscreen: false,
        exitOnClose:true,
        navBarHidden:true
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
		backgroundImage:'http://productosalpha.com.pe/webservice/img/'+Titanium.API.imagen,
		width:150,
		height:197,
		
		zIndex:10,
		top:45
	});
	var titulo = Ti.UI.createLabel({
		text:'¡Respuesta Correcta! Ganastes 10 puntos',
		backgroundColor:'#103242',
		color:'#ffffff',
		top:255,
		width:200,
		height:46,
		zIndex:12,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var contexto = Ti.UI.createLabel({
		html:Titanium.API.correcta,
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
		title:'REGISTRATE',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	
	var btnRegistro2 = Ti.UI.createButton({
		top: 390,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:14,
		title:'SIGUIENTE DESAFIO',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	
	 var barraFoot = Ti.UI.createView({
  	  backgroundColor:"#003f88",
  	  width:"100%",
  	  height:40,
  	  bottom:0,
  	  zIndex:100
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
  
  
   
btnPuntaje.addEventListener('click',function(){
 
  var xurl = "http://productosalpha.com.pe/webservice/puntos.php";
   var envios = ({
   	'idmobile':Ti.Platform.id
   });
  var misPuntos = Ti.Network.createHTTPClient({
  	onload: function(e){
  		data = JSON.parse(this.responseText);
  		var alertPuntaje = Ti.UI.createAlertDialog({
 		title:'Puntos Ganados',
 		message:"Tienes "+ data.puntos +" puntos acomulados",
 		buttonNames:['Ok']
 	});
 	alertPuntaje.show();
 	return false;
  	}
  });
  misPuntos.open("POST",xurl);
  misPuntos.send(envios);
 });
 
 
 btnSalir.addEventListener('click',function(){
 	 var activity = Titanium.Android.currentActivity;
        activity.finish();
 }); 
  
  self.add(btnPuntaje);
  self.add(btnSalir);
  self.add(barraFoot);
	self.add(scroll);
	if(Titanium.API.registrate==false){
	  scroll.add(btnRegistro);
	  
	  btnRegistro.addEventListener('click',function(){
	  		var Opciones = require('/ui/common/opciones');
	  			opciones = new Opciones();
	  			opciones.open();		
	  });	
	}else{
	scroll.add(btnRegistro2);
	btnRegistro2.addEventListener('click',function(){
	activityIndicator.show();
	var surl = "http://productosalpha.com.pe/webservice/bqintentos.php";
	parame=({
					'idmobile':Ti.Platform.id
				});
	var consulta = Ti.Network.createHTTPClient({
		onload: function(e){
			var getdata = JSON.parse(this.responseText);
			
			if(this.status==200){
			activityIndicator.hide();
				if(getdata.estado=="bloque"){
					alert("Agotaste los intentos por hoy trata mañana..");
				}else{
						var Preguntas = require('/ui/common/preguntas');
					  		preguntas = new Preguntas();
					  		preguntas.open();
					}
  			}
		}
		
	});
   consulta.open("POST",surl);
   consulta.send(parame);	  		
  		
});	
	}
	
	
	
	scroll.add(logoFooter);
	scroll.add(boca);
	scroll.add(contexto);
	scroll.add(titulo);
	scroll.add(logoBottom);
	self.add(activityIndicator);
	return self;
};
module.exports = ganaste;
