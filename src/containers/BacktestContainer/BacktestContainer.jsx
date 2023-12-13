import React, { useCallback, useState } from "react";
import Backtest from "components/Backtest";

export default function BacktestContainer() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return <Backtest toggle={toggle} handleToggle={handleToggle} />;
}
