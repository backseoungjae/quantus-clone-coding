import React, { useCallback } from "react";
import BacktestSetting from "components/BacktestSetting";
import useBackTest from "hooks/useBackTest";

export default function BacktestSettingContainer() {
  const { backTest, handleBackTestTitle } = useBackTest();

  const handleChagneBackTestTitle = useCallback(
    (e) => {
      handleBackTestTitle({ [e.target.name]: e.target.value });
    },
    [handleBackTestTitle]
  );

  console.log("backtest ", backTest);

  return (
    <BacktestSetting
      backTest={backTest}
      handleChagneBackTestTitle={handleChagneBackTestTitle}
    />
  );
}
