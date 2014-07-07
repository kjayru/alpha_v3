//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo.jpg",
		navBarHidden:true,
		exitOnClose:true,
		 orientationModes: [Ti.UI.PORTRAIT],
        fullscreen: false
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

	
if(Titanium.Network.online){
    	////verficamos existencia de registro de UUID
			var url='http://productosalpha.com.pe/webservice/verificacion.php';
			param=({
					'idmobile':Ti.Platform.id
				});
			 var client = Ti.Network.createHTTPClient({
			     onload : function(e) {      
			        var getdata = JSON.parse(this.responseText);
			        Titanium.API.nivel = getdata.level;
			        niveles = Titanium.API.nivel;	
			        if(getdata.registro=="registra"){	
				
						var firstView = new FirstView();
						self.add(firstView);									
			 }else{	    	
						var Bienvenida = require('/ui/common/bienvenido');
						var bienvenida = new Bienvenida();
						bienvenida.open();	
						
				    }
			     },
			     // function called when an error occurs, including a timeout
			     onerror : function(e) {
			         Ti.API.debug(e.error);
			          alert('No tienes conexion a internet');
			     },
			     onreadystatechange: function(e){
			     	if(e.readyState==4){
			     		activityIndicator.hide();
			     	}else{
			     		activityIndicator.show();
			     	}
			     }
			 });
			 // Prepare the connection.
			 client.open("POST", url);
			 // Send the request.
			 client.send(param);
    
}else {
	
       var vista = Ti.UI.createView({
       	width:'100%',
       	height:'100%',
       	top:0,
       	zIndex:10
       });
       var toast = Ti.UI.createNotification({
		    message:"Su dispositivo no tiene conexión a internet Intentelo mas tarde."
		});
		toast.show();
		
		vista.addEventListener('click',function(){
				 var activity = Titanium.Android.currentActivity;
        		activity.finish();
		});
		self.add(vista);
}
	//construct UI	
	self.add(activityIndicator);
	return self;
}
//make constructor function the public component interface
module.exports = ApplicationWindow;
