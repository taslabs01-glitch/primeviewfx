"use client";

import { useEffect, useRef } from "react";

export default function TradingViewMarketOverview() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      title: "Currencies",
      tabs: [
        {
          title: "Majors",
          symbols: [
            { s: "FX_IDC:EURUSD" },
            { s: "FX_IDC:GBPUSD" },
            { s: "FX_IDC:USDJPY" },
            { s: "FX_IDC:USDCHF" }
          ]
        },
        {
          title: "Minors",
          symbols: [
            { s: "FX_IDC:EURGBP" },
            { s: "FX_IDC:EURJPY" },
            { s: "FX_IDC:GBPJPY" }
          ]
        }
      ],
      locale: "en",
      width: "100%",
      height: "100%",
      showChart: true
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "75vh", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "100%" }} />
    </div>
  );
}