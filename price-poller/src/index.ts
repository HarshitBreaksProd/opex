import { processingQueue, publisher } from "./redis-init";

const ws = new WebSocket(
  "wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade/solusdt@trade"
);

const usEqWs = new WebSocket("wss://socket.polygon.io/stocks");

const main = async () => {
  await publisher.connect();

  ws.addEventListener("open", () => {
    console.log("Connected, Crypto Polling...");
  });

  // usEqWs.addEventListener("open", () => {
  //   console.log("Connected, Us Equities Polling...");
  //   usEqWs.send(
  //     JSON.stringify({
  //       action: "auth",
  //       params: process.env.POLYGON_API,
  //     })
  //   );

  //   console.log("Auth req sent");
  // });

  ws.addEventListener("message", async (event) => {
    const data = event.data;
    const trade = JSON.parse(data);

    // console.log(trade)

    const filteredData = {
      event: trade.data.e,
      event_time: new Date(trade.data.E),
      symbol: trade.data.s,
      price: parseFloat(trade.data.p),
      quantity: parseFloat(trade.data.q),
    };

    const spreadStr = (filteredData.price * 0.02).toFixed(4);
    const price = filteredData.price;
    const spread = Number(spreadStr);
    const askPriceStr = (price + spread).toFixed(4);
    const askPrice = Number(askPriceStr);

    const streamedData = {
      ...filteredData,
      bid_price: filteredData.price,
      ask_price: askPrice,
    };

    try {
      await processingQueue.add("process-trade", filteredData);
      await publisher.publish("trades-info", JSON.stringify(streamedData));
      console.log(streamedData);
    } catch (error) {
      console.log(error);
      console.log("Error pushing into queue");
    }
  });

  // usEqWs.addEventListener("message", async (event) => {
  //   const data = event.data;
  //   const objData = JSON.parse(data);

  //   console.log("Yeahhh");

  //   if (objData[0].status === "auth_success") {
  //     usEqWs.send(
  //       JSON.stringify({
  //         action: "subscribe",
  //         params: "T.AAPL,T.MSFT",
  //       })
  //     );
  //   }

  //   if (objData[0].ev === "T") {
  //     objData.forEach(
  //       async (trades: {
  //         ev: "T";
  //         sym: string;
  //         i: string;
  //         x: number;
  //         p: number;
  //         s: number;
  //         t: number;
  //         z: number;
  //       }) => {
  //         const filteredData = {
  //           event: trades.ev === "T" ? "trade" : "",
  //           event_time: new Date(trades.t),
  //           symbol: trades.sym,
  //           price: trades.p,
  //           quantity: trades.s,
  //         };

  //         const spreadStr = (filteredData.price * 0.02).toFixed(4);
  //         const price = filteredData.price;
  //         const spread = Number(spreadStr);
  //         const askPriceStr = (price + spread).toFixed(4);
  //         const askPrice = Number(askPriceStr);

  //         const streamedData = {
  //           ...filteredData,
  //           bid_price: filteredData.price,
  //           ask_price: askPrice,
  //         };

  //         try {
  //           await processingQueue.add("process-trade", filteredData);
  //           await publisher.publish(
  //             "trades-info",
  //             JSON.stringify(streamedData)
  //           );
  //           console.log(streamedData);
  //         } catch (error) {
  //           console.log(error);
  //           console.log("Error pushing into queue");
  //         }
  //       }
  //     );
  //   }
  // });
};

main();
