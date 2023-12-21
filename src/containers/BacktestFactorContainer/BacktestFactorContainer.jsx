import React, { useCallback, useEffect, useState } from "react";
import BacktestFactor from "components/BacktestFactor";
import useBackTest from "hooks/useBackTest";
import { VALUE_FACTORS } from "mocks/subData";

export default function BacktestFactorContainer() {
  const {
    backTest,
    handleBackTestTitle,
    handleCalculationWeight,
    handleValueFactors,
  } = useBackTest();

  // 팩터 선택 셀럭터 토글 이벤트
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

  // 하위 팩터 체크박스 useState
  const [valueFactorsList, setValueFactorsList] = useState(
    backTest?.factors?.valueFactors
  );

  const onCheckedValueFactorItem = useCallback(
    (list) => {
      if (valueFactorsList.every((el) => el.id !== list.id)) {
        setValueFactorsList([...valueFactorsList, list]);
      } else {
        const result = valueFactorsList.filter((el) => el.id !== list.id);
        setValueFactorsList(result);
      }
    },
    [valueFactorsList]
  );

  const isValueFactorChecked = useCallback(
    (list) => {
      return valueFactorsList.some((el) => el.id === list.id);
    },
    [valueFactorsList]
  );

  useEffect(() => {
    handleValueFactors([...valueFactorsList]);
  }, [handleValueFactors, valueFactorsList]);

  console.log("valueFactorsList ", valueFactorsList);
  console.log("backtest ", backTest);

  return (
    <BacktestFactor
      backTest={backTest}
      toggle={toggle}
      handleToggle={handleToggle}
      handleChagneBackTestTitle={handleChagneBackTestTitle}
      handleChangeCalculationWeight={handleChangeCalculationWeight}
      valueFactorData={backTest?.factors?.valueFactors}
      onCheckedValueFactorItem={onCheckedValueFactorItem}
      isValueFactorChecked={isValueFactorChecked}
      VALUE_FACTORS={VALUE_FACTORS}
    />
  );
}
