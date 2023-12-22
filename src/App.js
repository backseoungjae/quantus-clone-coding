import { Route, Routes } from "react-router-dom";
import {
  BacktestFactorPage,
  BacktestPage,
  BacktestSettingPage,
  DecileBacktestPage,
  StaticAllocPage,
} from "pages";

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
      <Route
        path="/backtest/backtest/factors"
        element={<BacktestFactorPage />}
      />
      <Route
        path="/backtest/backtest/backtest"
        element={<BacktestSettingPage />}
      />
    </Routes>
  );
}

export default App;
