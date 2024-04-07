const http = require('http');
const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const server = http.createServer(app);

app.use(router);



const io = require("socket.io")(server,{ cors: { origin: '*' } });

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
  console.log(userId+"->"+socketId)
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
   
  //take userId and socketId from user
  //when the user is connect
 
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    console.log("a user connected.");
    io.emit("getUsers", users);
  });

  //To receive messages and send too
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    console.log(text)
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //In case the user is disconnected
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
 
server.listen(process.env.PORT || 8900, () => console.log(`Server has started.`));