import React, { useCallback, useEffect, useState } from "react";
import BacktestFactor from "components/BacktestFactor";
import useBackTest from "hooks/useBackTest";
import {
  ACCELERATION_FACTORS,
  CONSENSUS_FACTORS,
  EV_FACTORS,
  GROWTH_POTENTIAL_FACTORS,
  PRICE_FACTORS,
  QUALITY_FACTORS,
  VALUE_FACTORS,
} from "mocks/subData";

export default function BacktestFactorContainer() {
  const {
    backTest,
    handleBackTestTitle,
    handleCalculationWeight,
    handleCheckedFactors,
    changeValueFactors,
    changeEvFactors,
    changeQualityFactors,
    changePriceFactors,
    changeGrowthFactors,
    changeAccelerationFactors,
    changeConsensusFactors,
  } = useBackTest();

  // 팩터 선택 셀럭터 토글 이벤트
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  // 커스텀 필터 토글 이벤트
  const [customToggle, setCusetomToggle] = useState(false);

  const handleCustomToggle = useCallback(() => {
    setCusetomToggle((prev) => !prev);
  }, []);

  const handleChangeBackTestTitle = useCallback(
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

  // 팩터 하단에 나오는 리스트 이벤트

  const handleOnChangeValueFactor = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      changeValueFactors(index, name, value);
    },
    [changeValueFactors]
  );

  const handleOnChangeEvFactors = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      changeEvFactors(index, name, value);
    },
    [changeEvFactors]
  );

  const handleOnChangeQualityFactors = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      changeQualityFactors(index, name, value);
    },
    [changeQualityFactors]
  );

  const handleOnChangePriceFactors = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      changePriceFactors(index, name, value);
    },
    [changePriceFactors]
  );

  const handleOnChangeGrowthFactors = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      changeGrowthFactors(index, name, value);
    },
    [changeGrowthFactors]
  );

  const handleOnChangeAccelerationFactors = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      changeAccelerationFactors(index, name, value);
    },
    [changeAccelerationFactors]
  );

  const handleOnChangeConsensusFactors = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      changeConsensusFactors(index, name, value);
    },
    [changeConsensusFactors]
  );

  return (
    <BacktestFactor
      backTest={backTest}
      toggle={toggle}
      handleToggle={handleToggle}
      handleChangeBackTestTitle={handleChangeBackTestTitle}
      handleChangeCalculationWeight={handleChangeCalculationWeight}
      customToggle={customToggle}
      handleCustomToggle={handleCustomToggle}
      handleOnChangeValueFactor={handleOnChangeValueFactor}
      handleOnChangeEvFactors={handleOnChangeEvFactors}
      handleOnChangeQualityFactors={handleOnChangeQualityFactors}
      handleOnChangePriceFactors={handleOnChangePriceFactors}
      handleOnChangeGrowthFactors={handleOnChangeGrowthFactors}
      handleOnChangeAccelerationFactors={handleOnChangeAccelerationFactors}
      handleOnChangeConsensusFactors={handleOnChangeConsensusFactors}
      handleCheckedFactors={handleCheckedFactors}
      VALUE_FACTORS={VALUE_FACTORS}
      EV_FACTORS={EV_FACTORS}
      QUALITY_FACTORS={QUALITY_FACTORS}
      PRICE_FACTORS={PRICE_FACTORS}
      GROWTH_POTENTIAL_FACTORS={GROWTH_POTENTIAL_FACTORS}
      CONSENSUS_FACTORS={CONSENSUS_FACTORS}
      ACCELERATION_FACTORS={ACCELERATION_FACTORS}
    />
  );
}
