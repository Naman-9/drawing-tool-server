const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');


const app = express();
app.use(cors({origin: 'http://localhost:3000'}))
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: 'http://localhost:3000' });

io.on("connection", (socket) => {
  // ...connection established
  console.log("server connected");

  socket.on('beginPath', (arg) => {
    // send event to all other other then sender
    socket.broadcast.emit('beginPath', arg);
  });

  socket.on('drawLine', (arg) => {
    // send event to all other other then sender
    socket.broadcast.emit('drawLine', arg);
  });

  socket.on('changeConfig', (arg) => {
    // send event to all other other then sender
    socket.broadcast.emit('changeConfig', arg);
  });


});

httpServer.listen(5000);
