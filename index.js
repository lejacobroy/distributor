var rpio = require('rpio');

var date = new Date();
var current_hour = date.getHours();

var pin = 11;
var pin2 = 12;
var steps = 50;

/*init done*/

/*init GPIO*/
rpio.init({gpiomem: true});    /* Use /dev/mem for i²c/PWM/SPI */
rpio.init({mapping: 'gpio'});   /* Use the GPIOxx numbering */
rpio.on('warn', function() {});
rpio.close(pin, rpio.PIN_RESET);
rpio.close(pin2, rpio.PIN_RESET);

/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */

rpio.open(pin, rpio.OUTPUT, rpio.LOW);
rpio.open(pin2, rpio.OUTPUT, rpio.LOW);


/*
 * The sleep functions block, but rarely in these simple programs does
 * one care about that.  Use a setInterval()/setTimeout() loop instead
 * if it matters.
 */
for (var i = 0; i < steps; i++) {
        /* On for 1 second */
        rpio.write(pin, rpio.HIGH);
        rpio.write(pin2, rpio.HIGH);
        rpio.usleep(3); 
        /* Off for half a second (500ms) */
        rpio.write(pin, rpio.LOW);
        rpio.write(pin3, rpio.LOW);
}
