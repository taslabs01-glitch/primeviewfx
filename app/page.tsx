import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import TradingViewMarketOverview from "@/components/TradingViewMarketOverview";

export default function Home() {
  return (
    <main style={{ padding: 16, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
      <TradingViewTickerTape />
      <h1 style={{ marginTop: 16 }}>Live Forex Prices</h1>
      <TradingViewMarketOverview />
    </main>
  );
}