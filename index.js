const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);

const registerOrderHandler = require("./src/orderHandler");
const registerUserHandler = require("./src/userHandler");

const onConnection = (socket) => {
  registerOrderHandler(io, socket);
  registerUserHandler(io, socket);
};

io.on("connexion", onConnection);
