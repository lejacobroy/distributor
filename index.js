var rpio = require('rpio');

var date = new Date();
var current_hour = date.getHours();

var pin1 = 13;
var pin2 = 11;
var pin3 = 15;
var pin4 = 12;
var steps = 10;
var i = 0;
var y = 0;

/*init done*/

/*init GPIO*/
rpio.init({gpiomem: true});    /* Use /dev/mem for i²c/PWM/SPI */
rpio.init({mapping: 'physical'});   /* Use the GPIOxx numbering */
rpio.on('warn', function() {});
rpio.close(pin1, rpio.PIN_RESET);
rpio.close(pin2, rpio.PIN_RESET);
rpio.close(pin3, rpio.PIN_RESET);
rpio.close(pin4, rpio.PIN_RESET);

/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */

rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
rpio.open(pin2, rpio.OUTPUT, rpio.LOW);
rpio.open(pin3, rpio.OUTPUT, rpio.LOW);
rpio.open(pin4, rpio.OUTPUT, rpio.LOW);

/*
 * The sleep functions block, but rarely in these simple programs does
 * one care about that.  Use a setInterval()/setTimeout() loop instead
 * if it matters.
 */
/*for (var i = 0; i < steps; i++) {
        // On for 1 second 
        rpio.write(pin, rpio.HIGH);
        rpio.write(pin2, rpio.HIGH);
        rpio.usleep(3); 
        // Off for half a second (500ms) 
        rpio.write(pin, rpio.LOW);
        rpio.write(pin2, rpio.LOW);
}
*/
//if(current_hour == 3 || current_hour == 6 || current_hour == 9 || current_hour == 12 || current_hour == 15 || current_hour == 18 || current_hour == 21 || current_hour == 24){
while(1){
	sleep(5);
	for (var y = steps - 1; y >= 0; y--) {
		if (i==7) {
			i=0;
		} else {
		i=i+1;
	}
	y=y+2;

	if (i==0) {
		rpio.open(pin1, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin2, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin3, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin4, rpio.OUTPUT, rpio.LOW);
		rpio.usleep(3); 
	}

	if (i==1) {
		rpio.open(pin1, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin2, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin3, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin4, rpio.OUTPUT, rpio.LOW);
		rpio.usleep(3); 
	}

	if (i==2) {
		rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin2, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin3, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin4, rpio.OUTPUT, rpio.LOW);
		rpio.usleep(3); 
	}

	if (i==3) {
		rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin2, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin3, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin4, rpio.OUTPUT, rpio.LOW);
		rpio.usleep(3); 
	}

	if (i==4) {
		rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin2, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin3, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin4, rpio.OUTPUT, rpio.LOW);
		rpio.usleep(3); 
	}

	if (i==5) {
		rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin2, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin3, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin4, rpio.OUTPUT, rpio.HIGH);
		rpio.usleep(3); 
	}

	if (i==6) {
		rpio.open(pin1, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin2, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin3, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin4, rpio.OUTPUT, rpio.HIGH);
		rpio.usleep(3); 
	}

	if (i==7) {
		rpio.open(pin1, rpio.OUTPUT, rpio.HIGH);
		rpio.open(pin2, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin3, rpio.OUTPUT, rpio.LOW);
		rpio.open(pin4, rpio.OUTPUT, rpio.HIGH);
		rpio.usleep(3); 
	}

	if (i==7) {
		i=0;
	}
	i=i+1;
	}	
	sleep(5);
}

rpio.close(pin1, rpio.PIN_RESET);
rpio.close(pin2, rpio.PIN_RESET);
rpio.close(pin3, rpio.PIN_RESET);
rpio.close(pin4, rpio.PIN_RESET);