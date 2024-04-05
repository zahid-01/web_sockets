const app = require("./app");
const dotenv = require("dotenv");
const { WebSocketServer } = require("ws");

dotenv.config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  console.log("Server Fired");
});

const wsServer = new WebSocketServer();
