const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

const SerialPort = require("serialport");
const serialPort = new SerialPort("/COM4", { baudRate: 9600 });

server.listen(8080);
app.use(express.static("public"));

let brightness = 0;

io.sockets.on("connection", socket => {
  socket.on("led", data => {
    brightness = data.value;

    const buf = new Buffer(1);
    buf.writeUInt8(brightness, 0);
    serialPort.write(buf);

    io.sockets.emit("led", { value: brightness });
  });

  socket.emit("led", { value: brightness });
});

console.log("http://localhost:8080");
