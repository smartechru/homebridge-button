var Service, Characteristic;
var rpio = require('rpio');

module.exports = function(homebridge) {
	Service = homebridge.hap.Service;
	Characteristic = homebridge.hap.Characteristic;
	homebridge.registerAccessory("homebridge-button", "ExtSwitch", ButtonAccessory);
}

function ButtonAccessory(log, config) {
	this.log = log;
	this.name = config["name"];
	this.buttonState = 0; // button state, default is OFF

	this.log("Creating a button with name '" + this.name + "'...");
	this.pin = config["pin"];
	this.outpin = config["out"];

	// rpio.open(this.pin, rpio.INPUT, rpio.HIGH);
	rpio.open(this.outpin, rpio.OUTPUT, rpio.LOW);

	// this.search();
}

ButtonAccessory.prototype.getOn = function(callback) {
	this.buttonState = rpio.read(this.pin);
	var btnOn = this.buttonState > 0;

	this.log("Input PIN:%d is %d", this.pin, btnOn);
	callback(null, btnOn);
}

ButtonAccessory.prototype.setOn = function(on, callback) {
	if (on) {
		rpio.write(this.outpin, rpio.HIGH);
	} else {
		rpio.write(this.outpin, rpio.LOW);
	}

	this.log("Output PIN:%d to %d", this.outpin, on);
	callback(null);
}

ButtonAccessory.prototype.getServices = function() {
	var buttonService = new Service.Switch(this.name);
	buttonService.getCharacteristic(Characteristic.On)
		.on('get', this.getOn.bind(this))
		.on('set', this.setOn.bind(this));
	return [buttonService];
}
