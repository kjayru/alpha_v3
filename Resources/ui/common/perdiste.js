function perdiste(){
	
		var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%",
		scrollType:'vertical',
		zIndex:30
	});
	
	var nwin = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1,
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT],
		 fullscreen: false,
        exitOnClose:true,
        navBarHidden:true
	});
	var logoFooter = Ti.UI.createView({
		backgroundImage:"/assets/logofooter.png",
		zIndex:10,
		top:530,
		width:100,
		height:30,
		zIndex:11
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 590,
		width:70,
		height:27,
		left:20,
		color:'#000000'
	});
	
	if(Titanium.API.imagen==""){
	var boca  = Ti.UI.createImageView({
		backgroundImage:'http://productosalpha.com.pe/webservice/img/'+Titanium.API.imagen,
		width:150,
		height:197,
		
		zIndex:10,
		top:50
	});
	}else{
		var boca  = Ti.UI.createImageView({
		backgroundImage:'http://productosalpha.com.pe/webservice/img/'+Titanium.API.gl_imagen,
		width:150,
		height:197,
		
		zIndex:10,
		top:50
	});
	}
	var titulo = Ti.UI.createLabel({
		text:Titanium.API.incorrecta,
		backgroundColor:'#103242',
		color:'#ffffff',
		top:255,
		width:250,
		height:46,
		zIndex:12,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	

	var btnRegistro = Ti.UI.createButton({
		top: 470,
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
		top: 425,
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
  
var contexto = Ti.UI.createView({
	
		backgroundColor:'#ffffff',
		color:'#103242',
		width:250,
		height:120,
		top:300,
		zIndex:11
		
		
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
	
	var texto1 = Ti.UI.createLabel({
		text:'¡Elige otro desafio! y gana mas puntos! Comparte la aplicación y gana un punto extra.',
		width:230,
		height:60,
		top:5,
		left:5,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'#000000'
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
  	
  var surl = "http://productosalpha.com.pe/webservice/bqintentos.php";
	var parame=({
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
					activityIndicator.hide();
					  var Intentar = require("/ui/common/intentar");
					  intentar = new Intentar();
					  intentar.open();	
  				}
  			}
		}
		
	});
   consulta.open("POST",surl);
   consulta.send(parame);
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

///compartir app en facebook
btnFacebook.addEventListener('click',function(){
 var fb = require('facebook');
 fb.appid = 1397156940536791;
 fb.permissions = ['publish_stream']; // Permissions your app needs
 fb.forceDialogAuth = true;

 fb.authorize();
      ///suma 1 punto
      ///post para publicar
       
			fb.requestWithGraphPath('me/feed', {
				message: "Comparte la diversión y gana premios.",
				picture:"http://productosalpha.com.pe/webservice/share.png"
				}, 
			         "POST", function(e) {
			    if (e.success) {
			    
			    ////SECCION COMPARTIR A DETALLE
			    var aurl = "http://productosalpha.com.pe/webservice/compartir.php";   
				nparametro=({
					"idmobile":Ti.Platform.id
				});
				
				sumarPunto = Ti.Network.createHTTPClient({
				onload:function(e){
					midata = JSON.parse(this.responseText);
					if(midata.rpta=="ok"){
						if(this.status==200){
							alert("Ganaste un punto extra!!!");
						}
					}
				}
			});
			sumarPunto.open("POST",aurl);
			sumarPunto.send(nparametro);
			
				
				
			    } else {
			        if (e.error) {
			            alert("Error de aplicación");
			        } else {
			            alert("No hay parametros definidos");
			        }
			    }
			});
					
});
    contexto.add(texto1);
    contexto.add(btnFacebook);
    contexto.add(btnTwitter);
    nwin.add(btnPuntaje);
    nwin.add(btnSalir);
    nwin.add(barraFoot);
	nwin.add(scroll);
	scroll.add(btnRegistro);
	scroll.add(btnIntento);
	scroll.add(logoFooter);
	nwin.add(boca);
	scroll.add(contexto);
	scroll.add(titulo);
	scroll.add(logoBottom);
	nwin.add(activityIndicator);
	return nwin;
	activityIndicator.hide();
};
module.exports = perdiste;
