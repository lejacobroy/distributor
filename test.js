var StepperWiringPi = require("stepper-wiringpi");
var motor = StepperWiringPi.setup(stepsInRevolution, pin1, pin2, pin3, pin4);
motor.setSpeed(60);
motor.forward();