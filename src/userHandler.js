module.exports = (io, socket) => {
  const createUser = (payload) => {
    // ...
  };

  socket.on("user:create", createUser);
};
