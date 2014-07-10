function perdiste(){
	
		var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%",
		scrollType:'vertical'
	});
	
	var nwin = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1,
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT],
		exitOnClose:false,
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
		top: 430,
		width:250,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:13,
		title:'Siguiente Desafio',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	
	var btnIntento = Ti.UI.createButton({
		top: 380,
		width:250,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:13,
		title:'Vuelve a Intentarlo',
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
  
   
 btnPuntaje.addEventListener('click',function(){
 	var alertPuntaje = Ti.UI.createAlertDialog({
 		title:'Puntos Ganados',
 		message:"Tienes 10 puntos acomulados",
 		buttonNames:['Ok']
 	});
 	alertPuntaje.show();
 	return false;
 });
 
 
 btnSalir.addEventListener('click',function(){
 	 var activity = Titanium.Android.currentActivity;
        activity.finish();
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
  
  btnIntento.addEventListener('click',function(){
  	
  	var jurl = "http://productosalpha.com.pe/webservice/preguntas.php";
  	   var mparam=({
  	    'categoria' :Titanium.API.nivel,
		'idmobile'  :Ti.Platform.id,
		'id_preg'   :Titanium.API.itemId
  	});
  	var consulta4 = Ti.Network.createHTTPClient({
		onload: function(e){
			var getdatos = JSON.parse(this.responseText);
			activityIndicator.show();
			if(this.status==200){
			activityIndicator.hide();
				if(getdatos.estado=="bloque"){
					alert("Agotaste los intentos por hoy trata mañana..");
				}else{
						nwin.close();
					}
  			}
		}
		
	});
   consulta4.open("POST",jurl);
   consulta4.send(mparam);
  });
  
btnRegistro.addEventListener('click',function(){
	
	var surl = "http://productosalpha.com.pe/webservice/bqintentos.php";
	parame=({
					'idmobile':Ti.Platform.id
				});
	var consulta = Ti.Network.createHTTPClient({
		onload: function(e){
			var getdata = JSON.parse(this.responseText);
			activityIndicator.show();
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
    nwin.add(btnPuntaje);
    nwin.add(btnSalir);
    nwin.add(barraFoot);
	nwin.add(scroll);
	scroll.add(btnRegistro);
	scroll.add(btnIntento);
	scroll.add(logoFooter);
	scroll.add(boca);
	scroll.add(contexto);
	scroll.add(titulo);
	scroll.add(logoBottom);
	nwin.add(activityIndicator);
	return nwin;
};
module.exports = perdiste;
