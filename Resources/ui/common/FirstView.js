//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable

	var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%",
		scrollType:'vertical'
	});
	
	var self = Ti.UI.createView({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1
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
		text:"Elije la edad del Jugador",
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
		text:"Fecha de Nacimiento",
		height:60,
		width:200,
		top:205,
		right:30,
		font: {fontFamily:'Snell Roundhand', fontSize:13},
		backgroundColor:'#ffffff',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:3
	});
	
	var picker = Ti.UI.createPicker({
		  top:265,
	  	zIndex:6
	});

	var picker = Ti.UI.createPicker({
	  type:Ti.UI.PICKER_TYPE_DATE,
	  minDate:new Date(1930,0,1),
	  maxDate:new Date(2010,11,31),
	  top:265,
	  zIndex:6
	  	});
	  
	
	var mifecha;
	
	picker.addEventListener('change',function(e){
	 //alert("User selected date: " + e.value.toLocaleString());
	  mifecha =  e.value;
	   var d = new Date(e.value);
	
		   year = d.getFullYear();
		  
		
		 Titanium.API.mifecha = e.value.toLocaleString();
		 Titanium.API.year = year;
	});
	
	var crearbloque= Ti.UI.createLabel({
		top:280,
		width:250,
		height:180,
		backgroundColor:'#000000',
		zIndex:5,
		opacity:0.75
		 
	});
	
	var btnIngreso = Ti.UI.createLabel({
		top: 470,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:7,
		text:'INGRESAR',
		color:'#ffffff',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var textTerminos = Ti.UI.createLabel({
		top:527,
		width:200,
		height:40,
		color:'#000000',
		text:'Términos y Condiciones',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		zIndex:8
	});
	
	var logoFooter = Ti.UI.createView({
		backgroundImage:"/assets/logofooter.png",
		zIndex:10,
		top:575,
		width:100,
		height:30,
		
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 610,
		width:70,
		height:27,
		left:20,
		color:'#000000',
		zIndex:11
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
     height:"300",
  width:"300",
    color : 'white',
    padding : 10,
    opacity : 0.87,
    top : "20%",
    borderRadius : 8,
    borderColor : 'black',
    borderWidth : 1
});


	

	btnIngreso.addEventListener('click',function(){
		
		btnIngreso.backgroundColor='#ffffff';
		if(!Titanium.API.year){
			var alertDialog = Titanium.UI.createAlertDialog({
				    title: 'Información',
				    message: 'Ingrese su fecha de Nacimiento',
				    buttonNames: ['Continuar'],
				    cancel: 1
				});
				alertDialog.show();
			return false;
		}else{	
		var url='http://mediacontacts-app.com/__beta/webservice/json.leves.php';
	
		var params = {
		'datos2':Titanium.API.mifecha,
		'idmobile':Ti.Platform.id,
		'year': Titanium.API.year
	   };
		var sendfecha = Ti.Network.createHTTPClient();
		 
		 sendfecha.onload = function(e){	
		
				if(this.status==200){
										
				var myData = JSON.parse(this.responseText);
                  	Titanium.API.nivel = myData.level;	
                
                    var bienvenido = require('/ui/common/bienvenido'),
						abienvenida = new bienvenido();		    			     				     	 					
						abienvenida.open();
						
							
				}else{
					alert("cargar preloader 2");
				}									 
			};
		sendfecha.onerror =  function(e){			
				Ti.API.debug(e.error);
				alert('error '+e.error);
		};
		
		  sendfecha.onreadystatechange  = function(e) {
        
            if(sendfecha.readyState==4){
            	
            	
            	
            	activityIndicator.hide();
            }else{
            	
           
          
			
			activityIndicator.show();
           
            }
        
    };
     	 sendfecha.open("POST",url);
  	    sendfecha.send(params);

		}	
	});




	scroll.add(logo);
	scroll.add(texto1);
	scroll.add(monstrito);
	scroll.add(texto2);
	scroll.add(logoFooter);
	scroll.add(crearbloque);
	scroll.add(picker);
	scroll.add(btnIngreso);
	scroll.add(logoBottom);
	scroll.add(textTerminos);
	self.add(scroll);
	self.add(activityIndicator);
   

	//Add behavior for UI

	return self;
}

module.exports = FirstView;
