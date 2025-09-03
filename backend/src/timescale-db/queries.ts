export const getCandlesQuery = async (
  asset: string,
  ts: string,
  startTime: string,
  endTime: string
) => {
  let candleView = "";

  switch (ts) {
    case "1m":
      console.log("1min");
      candleView = "candles_1m";
      break;
    case "5m":
      candleView = "candles_5m";
      break;
    case "15m":
      candleView = "candles_15m";
      break;
    case "30m":
      candleView = "candles_30m";
      break;
    case "1h":
      candleView = "candles_1h";
      break;
    case "4h":
      candleView = "candles_4h";
      break;
    case "1d":
      candleView = "candles_1d";
      break;
    case "1w":
    case "7d":
      candleView = "candles_7d";
      break;
    case "30d":
    case "1m":
      candleView = "candles_30d";
      break;
    default:
      throw new Error("Invalid Time Interval");
  }

  // console.log(
  //   `SELECT open, close, high, low, start_time  FROM ${candleView} WHERE symbol='${
  //     asset.toUpperCase() + "USDT"
  //   }' AND start_time > to_timestamp(${startTime} / 1000) AND start_time < to_timestamp(${endTime} / 1000) ORDER BY start_time DESC;`
  // );

  return `SELECT open, close, high, low, start_time, decimal_pos FROM ${candleView} WHERE symbol='${
    asset.toUpperCase() + "USDT"
  }' AND start_time > to_timestamp(${startTime} / 1000) AND start_time < to_timestamp(${endTime} / 1000) ORDER BY start_time DESC;`;
};
