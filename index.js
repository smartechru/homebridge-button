var Service, Characteristic;
var rpio = require('rpio');

module.exports = function(homebridge) {
	Service = homebridge.hap.Service;
	Characteristic = homebridge.hap.Characteristic;
	homebridge.registerAccessory("homebridge-button", "Button", ButtonAccessory);
}

function ButtonAccessory(log, config) {
	this.log = log;
	this.name = config["name"];
	this.buttonState = 0; // button state, default is OFF

	this.log("Creating a button with name '" + this.name + "'...");
	this.pin = config["pin"];
	this.outpin = config["out"];

	// rpio.open(this.pin, rpio.INPUT, rpio.HIGH);
	rpio.open(this.outpin, rpio.OUTPUT);

	// this.search();
}

ButtonAccessory.prototype.getOn = function(callback) {
	this.log("Input PIN:%d is %d", this.pin, this.buttonState);
	callback(null, this.buttonState);
}

ButtonAccessory.prototype.setOn = function(on, callback) {
	this.log("Output PIN:%d to %d", this.outpin, on);
	this.buttonState = on;
	if (on) {
		rpio.write(this.outpin, rpio.HIGH);
	} else {
		rpio.write(this.outpin, rpio.LOW);
	}
	callback(null);
}

ButtonAccessory.prototype.getServices = function() {
	var buttonService = new Service.Switch(this.name);
	buttonService.getCharacteristic(Characteristic.On)
		.on('get', this.getOn.bind(this))
		.on('set', this.setOn.bind(this));
	return [buttonService];
}
