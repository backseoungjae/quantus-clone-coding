import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HomePage() {
  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigator("/backtest/backtest/universe");
    }
  }, [location.pathname, navigator]);

  return <div>HomePage</div>;
}
