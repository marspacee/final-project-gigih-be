const { Server } = require("socket.io");
const Comment = require("../models/Comment");

const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3006",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`A user connected ${socket.id}`);

    socket.on("joinRoom", async (videoId) => {
      try {
        socket.join(videoId);

        const initialComments = await Comment.find({ videoId });
        socket.emit("initialComments", initialComments);
      } catch (error) {
        console.error(error);
      }
    });

    socket.on("newComment", async (data) => {
      try {
        const comment = new Comment(data);
        await comment.save();
        io.to(data.videoId).emit("newComment", comment);
      } catch (error) {
        console.error(error);
      }
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });

  return io;
};

module.exports = initSocket;
