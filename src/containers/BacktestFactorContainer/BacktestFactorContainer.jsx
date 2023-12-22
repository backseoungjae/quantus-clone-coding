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
    handleValueFactors,
    handleEvFactors,
    handleQualityFactors,
    handlePriceFactors,
    handleGrowthPotentialFactors,
    handleAccelerationFactors,
    handleConsensusFactors,
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

  // 가치 팩터 체크박스 이벤트
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

  // EV 팩터 체크박스 이벤트
  const [evFactorsList, setEvFactorsList] = useState(
    backTest?.factors?.evFactors
  );

  const onCheckedEvFactorItem = useCallback(
    (list) => {
      if (evFactorsList.every((el) => el.id !== list.id)) {
        setEvFactorsList([...evFactorsList, list]);
      } else {
        const result = evFactorsList.filter((el) => el.id !== list.id);
        setEvFactorsList(result);
      }
    },
    [evFactorsList]
  );

  const isEvFactorChecked = useCallback(
    (list) => {
      return evFactorsList.some((el) => el.id === list.id);
    },
    [evFactorsList]
  );

  useEffect(() => {
    handleEvFactors([...evFactorsList]);
  }, [handleEvFactors, evFactorsList]);

  // 퀄리티 팩터 체크박스 이벤트
  const [qualityFactorsList, setQualityFactorsList] = useState(
    backTest?.factors?.qualityFactors
  );

  const onCheckedQualityFactorItem = useCallback(
    (list) => {
      if (qualityFactorsList.every((el) => el.id !== list.id)) {
        setQualityFactorsList([...qualityFactorsList, list]);
      } else {
        const result = qualityFactorsList.filter((el) => el.id !== list.id);
        setQualityFactorsList(result);
      }
    },
    [qualityFactorsList]
  );

  const isQualityFactorChecked = useCallback(
    (list) => {
      return qualityFactorsList.some((el) => el.id === list.id);
    },
    [qualityFactorsList]
  );

  useEffect(() => {
    handleQualityFactors([...qualityFactorsList]);
  }, [handleQualityFactors, qualityFactorsList]);

  // 가격 팩터 체크박스 이벤트
  const [priceFactorsList, setPriceFactorsList] = useState(
    backTest?.factors?.priceFactors
  );

  const onCheckedPriceFactorItem = useCallback(
    (list) => {
      if (priceFactorsList.every((el) => el.id !== list.id)) {
        setPriceFactorsList([...priceFactorsList, list]);
      } else {
        const result = priceFactorsList.filter((el) => el.id !== list.id);
        setPriceFactorsList(result);
      }
    },
    [priceFactorsList]
  );

  const isPriceFactorChecked = useCallback(
    (list) => {
      return priceFactorsList.some((el) => el.id === list.id);
    },
    [priceFactorsList]
  );

  useEffect(() => {
    handlePriceFactors([...priceFactorsList]);
  }, [handlePriceFactors, priceFactorsList]);

  // 성장성 팩터 체크박스 이벤트
  const [growthFactorsList, setGrowthFactorsList] = useState(
    backTest?.factors?.growthPotentialFactors
  );

  const onCheckedGrowthFactorItem = useCallback(
    (list) => {
      if (growthFactorsList.every((el) => el.id !== list.id)) {
        setGrowthFactorsList([...growthFactorsList, list]);
      } else {
        const result = growthFactorsList.filter((el) => el.id !== list.id);
        setGrowthFactorsList(result);
      }
    },
    [growthFactorsList]
  );

  const isGrowthFactorChecked = useCallback(
    (list) => {
      return growthFactorsList.some((el) => el.id === list.id);
    },
    [growthFactorsList]
  );

  useEffect(() => {
    handleGrowthPotentialFactors([...growthFactorsList]);
  }, [handleGrowthPotentialFactors, growthFactorsList]);

  // 가속 팩터 체크박스 이벤트
  const [accelerationFactorsList, setAccelerationFactorsList] = useState(
    backTest?.factors?.accelerationFactors
  );

  const onCheckedAccelerationFactorItem = useCallback(
    (list) => {
      if (accelerationFactorsList.every((el) => el.id !== list.id)) {
        setAccelerationFactorsList([...accelerationFactorsList, list]);
      } else {
        const result = accelerationFactorsList.filter(
          (el) => el.id !== list.id
        );
        setAccelerationFactorsList(result);
      }
    },
    [accelerationFactorsList]
  );

  const isAccelerationFactorChecked = useCallback(
    (list) => {
      return accelerationFactorsList.some((el) => el.id === list.id);
    },
    [accelerationFactorsList]
  );

  useEffect(() => {
    handleAccelerationFactors([...accelerationFactorsList]);
  }, [handleAccelerationFactors, accelerationFactorsList]);

  // 컨센선스 팩터 체크박스 이벤트
  const [consensusFactorsList, setConsensusFactorsList] = useState(
    backTest?.factors?.consensusFactors
  );

  const onCheckedConsensusFactorItem = useCallback(
    (list) => {
      if (consensusFactorsList.every((el) => el.id !== list.id)) {
        setConsensusFactorsList([...consensusFactorsList, list]);
      } else {
        const result = consensusFactorsList.filter((el) => el.id !== list.id);
        setConsensusFactorsList(result);
      }
    },
    [consensusFactorsList]
  );

  const isConsensusFactorChecked = useCallback(
    (list) => {
      return consensusFactorsList.some((el) => el.id === list.id);
    },
    [consensusFactorsList]
  );

  useEffect(() => {
    handleConsensusFactors([...consensusFactorsList]);
  }, [handleConsensusFactors, consensusFactorsList]);

  console.log("backtest ", backTest);

  return (
    <BacktestFactor
      backTest={backTest}
      toggle={toggle}
      handleToggle={handleToggle}
      handleChagneBackTestTitle={handleChagneBackTestTitle}
      handleChangeCalculationWeight={handleChangeCalculationWeight}
      valueFactorData={valueFactorsList}
      evFactorData={evFactorsList}
      qualityFactorData={qualityFactorsList}
      priceFactorData={priceFactorsList}
      growthFactorData={growthFactorsList}
      accelerationFactorData={accelerationFactorsList}
      consensusFactorData={consensusFactorsList}
      onCheckedValueFactorItem={onCheckedValueFactorItem}
      isValueFactorChecked={isValueFactorChecked}
      onCheckedEvFactorItem={onCheckedEvFactorItem}
      isEvFactorChecked={isEvFactorChecked}
      onCheckedQualityFactorItem={onCheckedQualityFactorItem}
      isQualityFactorChecked={isQualityFactorChecked}
      onCheckedPriceFactorItem={onCheckedPriceFactorItem}
      isPriceFactorChecked={isPriceFactorChecked}
      onCheckedGrowthFactorItem={onCheckedGrowthFactorItem}
      isGrowthFactorChecked={isGrowthFactorChecked}
      onCheckedAccelerationFactorItem={onCheckedAccelerationFactorItem}
      isAccelerationFactorChecked={isAccelerationFactorChecked}
      onCheckedConsensusFactorItem={onCheckedConsensusFactorItem}
      isConsensusFactorChecked={isConsensusFactorChecked}
      customToggle={customToggle}
      handleCustomToggle={handleCustomToggle}
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
