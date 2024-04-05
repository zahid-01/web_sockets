const app = require("./app");
const dotenv = require("dotenv");
const { WebSocketServer } = require("ws");
const server = require("http").createServer(app);

dotenv.config({ path: "./config.env" });

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  console.log("Client connected");
  ws.on("message", (msg) => {
    console.log("Received the message: ", msg);
  });
});

server.listen(process.env.PORT, () => {
  console.log("Server Fired");
});
