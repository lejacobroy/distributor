var rpio = require('rpio');
rpio.init({gpiomem: true});    /* Use /dev/mem for i²c/PWM/SPI */
rpio.init({mapping: 'gpio'});   /* Use the GPIOxx numbering */
rpio.on('warn', function() {});
/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
 var pin = 19;
 var steps = 50
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

/*
 * The sleep functions block, but rarely in these simple programs does
 * one care about that.  Use a setInterval()/setTimeout() loop instead
 * if it matters.
 */
for (var i = 0; i < steps; i++) {
        /* On for 1 second */
        rpio.write(pin, rpio.HIGH);

        /* Off for half a second (500ms) */
        rpio.write(pin, rpio.LOW);
}
