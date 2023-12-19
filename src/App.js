import { Route, Routes } from "react-router-dom";
import { BacktestPage, DecileBacktestPage, StaticAllocPage } from "pages";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/backtest/backtest/universe"
        element={<BacktestPage />}
      />
      <Route path="/alloc/static_alloc" element={<StaticAllocPage />} />
      <Route
        path="/backtest/decile/universe"
        element={<DecileBacktestPage />}
      />
    </Routes>
  );
}

export default App;
