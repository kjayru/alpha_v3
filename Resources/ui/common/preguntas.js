function preguntas(){
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
		top:160,
		width:103,
		height:143
	});
	
///// footer botones
  var barraFoot = Ti.UI.createView({
  	  backgroundColor:"#003f88",
  	  width:"100%",
  	  height:65,
  	  bottom:0
  });
/// logo footer
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
	var contador = Ti.UI.createLabel({
		backgroundImage:'/assets/contador.png',
		width:'100%',
		height:40,
		top:0
	});
	
	 var lblContador = Ti.UI.createLabel({
		text:"30",
		color:'#ffffff',
		font:{fontSize:28, fontFamily:'arial', fontWeight:'bold'},
		right:5,
		top:2
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
activityIndicator.show();
////EXTRAEMOS LA PREGUNTAS PARA EL NIVEL GENERADO
	var uri = "http://productosalpha.com.pe/webservice/preguntas.php";
	 	 var parametros = {
		'categoria' :Titanium.API.nivel,
		'idmobile'  :Ti.Platform.id
	   };
	 	 var clientes = Ti.Network.createHTTPClient({ 
	 	 	 onload : function(e) {
	 	 	 		
	 	 	 	 if(this.status==200){
	 	 	 	 	activityIndicator.hide();
								        var getdata = JSON.parse(this.responseText);		        
								        var tasks = [
									    {id: getdata.id,imagen:getdata.imagen,correcto:getdata.correcta,incorrecto:getdata.incorrecta,value:getdata.opciones[0].value, name: getdata.opciones[0].opcion1,rpta:getdata.activo},
									    {id: getdata.id,imagen:getdata.imagen,correcto:getdata.correcta,incorrecto:getdata.incorrecta,value:getdata.opciones[1].value, name: getdata.opciones[1].opcion2,rpta:getdata.activo},
									    {id: getdata.id,imagen:getdata.imagen,correcto:getdata.correcta,incorrecto:getdata.incorrecta,value:getdata.opciones[2].value, name:getdata.opciones[2].opcion3,rpta:getdata.activo}
										];
										var data = [];
						   Titanium.API.info(tasks.length);
							for (var i = 0; i < tasks.length; i++) {
							    data.push(
							        { properties: {
							            itemId    : tasks[i].id,
							            title     : tasks[i].name,
							            value     : tasks[i].value,
							            rpta      : tasks[i].rpta,
							            correcta  : tasks[i].correcto,
							            incorrecta: tasks[i].incorrecto,
							            imagen	  : tasks[i].imagen,
							            color     : 'white',
							            backgroundColor:'#103242',
							            bottom    :15,
							            width     :'100%',
							            right     :0
							        }
							    });
							} 
							
							var listView = Ti.UI.createListView({
								top:190,
								right:40,
								width:200
						    });
						    
							var section = Ti.UI.createListSection();
							section.setItems(data);
							listView.sections = [section];
						   
						    
						listView.addEventListener('itemclick', function(e){
					    activityIndicator.show();	
							
					    var item = section.getItemAt(e.itemIndex);
						
					    Titanium.API.itemId     = item.properties.itemId;
					    Titanium.API.value      = item.properties.value;
					    Titanium.API.correcta   = item.properties.correcta;
					    Titanium.API.incorrecta = item.properties.incorrecta;
					    Titanium.API.imagen     = item.properties.imagen;
					    
					    section.updateItemAt(e.itemIndex, item);
					  if(item.properties.rpta===item.properties.value){  
					 
					  ///enviamos consulta de registro en tbl.registro y tbl.estado	 
					  
						 url2='http://productosalpha.com.pe/webservice/update.php';
							    var params2 = {
									'idmobile': Ti.Platform.id,
									'id_preg' : Titanium.API.itemId
								};
								 var client2 = Ti.Network.createHTTPClient({
								 	onload:function(e){
										 var getdata = JSON.parse(this.responseText);
										  if(getdata.registro=="no"){
										  	 Titanium.API.registrate =false;
										  }else{
										  	Titanium.API.registrate =true;
										  }
										  
										  
										    if(this.status==200){
									     	activityIndicator.hide();
									     		var Ganaste = require('/ui/common/ganaste');
											    ganaste = new Ganaste();
											    ganaste.open(); 
									     }
									     		
									     			
								 	}
								 });
							   
							   	 client2.open("POST", url2);
								 client2.send(params2);  
					   }else{
					  ///enivamos consulta de registro en tbl.intentos
					 
					    url3='http://productosalpha.com.pe/webservice/intentos.php';
					    var params3 = {
							'idmobile': Ti.Platform.id,
							'id_preg' : Titanium.API.itemId
						};
						
						 var client3 = Titanium.Network.createHTTPClient({
						 	onload:function(){
								 
								if(this.status==200){
							     		activityIndicator.hide();
							     			var Perdiste = require('/ui/common/perdiste');
										   	perdiste = new Perdiste();
										   	perdiste .open();
							    	}		
						 	}
						 });
					   
					   	 client3.open("POST", url3);
						 client3.send(params3);
					   }
					});
					
						var lblItem = Ti.UI.createView({
							backgroundColor:'#76b2d3',
							width:'270',
							top:55,
							left:40,
							height:Ti.UI.SIZE
							
						});
			         var lblTexto = Ti.UI.createLabel({
							width:'270',
							left:5,
							top:5,
							bottom:5,
							right:5,	
							text:getdata.pregunta,
							color:'#343a36'
							
						});
			    lblItem.add(lblTexto);
			    scroll.add(lblItem);
			    scroll.add(listView);
			    
			   }else{
			   
			   		}
			},
		     onerror : function(e) {
		         Ti.API.debug("Perdiste Conexión a internet");
		       
		     }
		     
	 	 });
  	
  	 clientes.open("POST", uri);
	clientes.send(parametros);  
		
	


	
	var contenedor = Ti.UI.createView({
		width:290,
		top:168,
		height:400,
		right:0,	
		zIndex:16
	});

  scroll.add(monstrito);
  scroll.add(logoFooter);
  scroll.add(logoBottom);
  self.add(scroll);
  self.add(contador);
  self.add(lblContador);
  self.add(activityIndicator);
  return self;
}
module.exports = preguntas;
