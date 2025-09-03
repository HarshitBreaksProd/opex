import { useRef } from "react";

type TradeDataType = {
  event: "trade";
  event_time: string;
  symbol: string;
  price: number;
  quantity: number;
  bid_price: number;
  ask_price: number;
};

const Charts = () => {
  const priceRef = useRef<Record<string, TradeDataType>>({});

  const ws = new WebSocket("ws://localhost:8080");

  ws.addEventListener("open", () => {
    console.log("Connected");
  });

  ws.addEventListener("message", (event) => {
    const dataString = event.data;
    const tradeData = JSON.parse(dataString);

    const asset = tradeData.symbol;

    priceRef.current[asset] = tradeData;

    console.log(priceRef.current);
  });

  return <div></div>;
};

export default Charts;
