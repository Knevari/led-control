const led_pin = 5;
const johnny_five = require("johnny-five");
const arduino_board = new johnny_five.Board();

arduino_board.on("ready", function() {
  const led = new johnny_five.Led(led_pin);
  led.blink(100);
});
