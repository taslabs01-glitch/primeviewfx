"use client";

import { useEffect, useRef } from "react";

export default function TradingViewTickerTape() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent double-initialisation (dev mode can mount twice)
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:EURUSD", description: "EUR/USD" },
        { proName: "FX_IDC:GBPUSD", description: "GBP/USD" },
        { proName: "FX_IDC:USDJPY", description: "USD/JPY" },
        { proName: "FX_IDC:USDCHF", description: "USD/CHF" },
        { proName: "FX_IDC:AUDUSD", description: "AUD/USD" },
        { proName: "FX_IDC:USDCAD", description: "USD/CAD" }
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      locale: "en",
      displayMode: "regular"
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
}