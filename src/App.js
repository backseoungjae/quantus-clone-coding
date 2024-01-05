import { Route, Routes } from "react-router-dom";
import {
  ActualInvestmentPage,
  BacktestFactorPage,
  BacktestPage,
  BacktestSettingPage,
  DecileBacktestFactorPage,
  DecileBacktestPage,
  DecileBacktestSettingPage,
  HomePage,
  PartnershipMagicSplitPage,
  PartnershipPage,
  PurchaseLicensePage,
  StaticAllocPage,
  StrategyExamplePage,
} from "pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/backtest/backtest/universe" element={<BacktestPage />} />
      <Route path="/alloc/static_alloc" element={<StaticAllocPage />} />
      <Route
        path="/backtest/decile/universe"
        element={<DecileBacktestPage />}
      />
      <Route
        path="/backtest/decile/factors"
        element={<DecileBacktestFactorPage />}
      />
      <Route
        path="/backtest/decile/backtest"
        element={<DecileBacktestSettingPage />}
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
      <Route path="/products" element={<PurchaseLicensePage />} />
      <Route path="/partnership" element={<PartnershipPage />} />
      <Route
        path="/partnership/magic_split"
        element={<PartnershipMagicSplitPage />}
      />
    </Routes>
  );
}

export default App;
