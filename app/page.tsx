export default function BiasPage() {
  return (
    <main style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1>Daily Market Bias</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Market</th>
            <th>Bias</th>
            <th>Structure</th>
            <th>Trade State</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>XAUUSD</td><td>BEARISH</td><td>Below PDH, lower highs</td><td>Sell rallies</td></tr>
          <tr><td>NAS100</td><td>NEUTRAL</td><td>Compression</td><td>Wait</td></tr>
          <tr><td>EURUSD</td><td>BULLISH</td><td>Above London VWAP</td><td>Buy pullbacks</td></tr>
          <tr><td>GBPUSD</td><td>BEARISH</td><td>Failed NY high</td><td>Sell rallies</td></tr>
          <tr><td>USDJPY</td><td>BULLISH</td><td>Higher lows</td><td>Buy pullbacks</td></tr>
        </tbody>
      </table>

      <h3>Execution Rules</h3>
      <ul>
        <li>No trades against bias</li>
        <li>Structure breaks only</li>
        <li>London & New York sessions only</li>
        <li>Flat into red news</li>
      </ul>
    </main>
  )
}