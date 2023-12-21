import React, { useCallback, useState } from "react";
import BacktestFactor from "components/BacktestFactor";
import useBackTest from "hooks/useBackTest";

export default function BacktestFactorContainer() {
  const { backTest, handleBackTestTitle, handleCalculationWeight } =
    useBackTest();

  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const handleChagneBackTestTitle = useCallback(
    (e) => {
      handleBackTestTitle({ [e.target.name]: e.target.value });
    },
    [handleBackTestTitle]
  );

  const handleChangeCalculationWeight = useCallback(
    (e) => {
      handleCalculationWeight({ [e.target.name]: e.target.value });
      setToggle(false);
    },
    [handleCalculationWeight]
  );

  console.log("backtest ", backTest);

  return (
    <BacktestFactor
      backTest={backTest}
      toggle={toggle}
      handleToggle={handleToggle}
      handleChagneBackTestTitle={handleChagneBackTestTitle}
      handleChangeCalculationWeight={handleChangeCalculationWeight}
    />
  );
}
