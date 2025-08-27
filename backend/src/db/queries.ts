export const getQuery = async (symbol: string, timeInterval: string) => {
  let candleView = "";

  switch (timeInterval) {
    case "1min":
      candleView = "candles_1m";
      break;
    case "5min":
      candleView = "candles_5m";
      break;
    case "15min":
      candleView = "candles_15m";
      break;
    case "30min":
      candleView = "candles_30m";
      break;
    case "1hour":
      candleView = "candles_1h";
      break;
    case "4hour":
      candleView = "candles_4h";
      break;
    case "1day":
      candleView = "candles_1d";
      break;
    case "7day":
      candleView = "candles_7d";
      break;
    case "30day":
      candleView = "candles_30d";
      break;
    default:
      throw new Error("Invalid Time Interval");
  }

  return `SELECT open, close, high, low, bucket  FROM ${candleView} WHERE symbol='${symbol}' LIMIT 100`;
};
