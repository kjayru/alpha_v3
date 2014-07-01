//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	
	//create component instance
	var self = Ti.UI.createWindow({
        orientationModes: [Ti.UI.PORTRAIT],
        fullscreen: false
	});
	//construct UI
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	self.add(firstView);
	return self;
}
//make constructor function the public component interface
module.exports = ApplicationWindow;
