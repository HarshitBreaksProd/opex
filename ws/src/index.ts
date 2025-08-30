import { WebSocketServer, WebSocket } from "ws";
import { subscriber } from "./redis-init";

const wss = new WebSocketServer({ port: 8080 });

// Connect to Redis and subscribe once at startup
(async () => {
  await subscriber.connect();
  console.log("Redis subscriber connected");

  await subscriber.subscribe("trades-info", (message) => {
    // Broadcast to all connected WS clients
    for (const client of wss.clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    }
  });
  console.log("Subscribed to trades-info");
})().catch((err) => {
  console.error("Failed to initialize Redis subscriber", err);
});

wss.on("connection", async (socket) => {
  console.log("Client connected");

  socket.on("message", async (data) => {
    const tradeDataRes = data.toString();
    console.log(tradeDataRes);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});
