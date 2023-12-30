import { Route, Routes } from "react-router-dom";
import {
  ActualInvestmentPage,
  BacktestFactorPage,
  BacktestPage,
  BacktestSettingPage,
  DecileBacktestPage,
  StaticAllocPage,
  StrategyExamplePage,
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
      <Route path="/invest/accounts" element={<ActualInvestmentPage />} />
      <Route path="/strategy" element={<StrategyExamplePage />} />
    </Routes>
  );
}

export default App;
