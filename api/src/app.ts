import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/health", (req, res) => {
  res.json({
    message: "Health Status nice",
  });
});

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT", "PATCH"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket Connected to Server with ID:" + socket.id);

  socket.on("send-private", ({ privateMessage, userId }) => {
    console.log("private message " + privateMessage + userId);
    socket.to(userId).emit("receive-private", privateMessage);
  });

  socket.on("send", (data) => {
    console.log(`The message Data ${data} `);

    io.emit("receive", data);
  });

  socket.emit(`welcome`, `Welcome to The Socket Server ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`The Socket with id ${socket.id} disconnected`);
  });
});

server.listen(3001, () => {
  console.log(`Running on Server`);
});
