import { BacktestPage, StaticAllocPage } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/backtest/backtest/universe"
        element={<BacktestPage />}
      />
      <Route path="/alloc/static_alloc" element={<StaticAllocPage />} />
    </Routes>
  );
}

export default App;
