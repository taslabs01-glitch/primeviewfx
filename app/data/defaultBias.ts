export const defaultBias = {
  XAUUSD: { bias: "BEARISH", structure: "Below PDH, lower highs", state: "Sell rallies" },
  NAS100: { bias: "NEUTRAL", structure: "Compression", state: "Wait" },
  EURUSD: { bias: "BULLISH", structure: "Above London VWAP", state: "Buy pullbacks" },
  GBPUSD: { bias: "BEARISH", structure: "Failed NY high", state: "Sell rallies" },
  USDJPY: { bias: "BULLISH", structure: "Higher lows", state: "Buy pullbacks" },
} as const;