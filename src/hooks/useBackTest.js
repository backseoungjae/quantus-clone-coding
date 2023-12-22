import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  chagneCalculationWeight,
  chagneConsensusFactors,
  chagnePriceFactors,
  chagneQualityFactors,
  changeAccelerationFactors,
  changeBackTestTitle,
  changeEvFactors,
  changeExceptSectors,
  changeGrowthPotentialFactors,
  changeInitialfilters,
  changeUniversSettings,
  changeValueFactors,
} from "store/modules/backTest";

export default function useBackTest() {
  const backTest = useSelector((state) => state.backTest);
  const dispatch = useDispatch();

  // 백테스트 제목 부분
  const handleBackTestTitle = useCallback((payload) => {
    dispatch(changeBackTestTitle(payload));
  }, []);

  // 유니버스 선택 부분
  const handleUniversSettings = useCallback((payload) => {
    dispatch(changeUniversSettings(payload));
  }, []);

  // 유니버스 기본 필터 부분
  const handleInitialfilters = useCallback((payload) => {
    dispatch(changeInitialfilters(payload));
  }, []);

  // 유니버스 제외 항목 부분
  const handleExceptSectors = useCallback((payload) => {
    dispatch(changeExceptSectors(payload));
  }, []);

  // 팩터 비중 선택 부분
  const handleCalculationWeight = useCallback((payload) => {
    dispatch(chagneCalculationWeight(payload));
  }, []);

  // 가치 팩터 부분
  const handleValueFactors = useCallback((payload) => {
    dispatch(changeValueFactors(payload));
  }, []);

  // ev 팩터 부분
  const handleEvFactors = useCallback((payload) => {
    dispatch(changeEvFactors(payload));
  }, []);

  // 퀄리티 팩터 부분
  const handleQualityFactors = useCallback((payload) => {
    dispatch(chagneQualityFactors(payload));
  }, []);

  // 가격 팩터 부분
  const handlePriceFactors = useCallback((payload) => {
    dispatch(chagnePriceFactors(payload));
  }, []);

  // 성장성 팩터 부분
  const handleGrowthPotentialFactors = useCallback((payload) => {
    dispatch(changeGrowthPotentialFactors(payload));
  }, []);

  // 가속 팩터 부분
  const handleAccelerationFactors = useCallback((payload) => {
    dispatch(changeAccelerationFactors(payload));
  }, []);

  // 컨센선스 팩터 부분
  const handleConsensusFactors = useCallback((payload) => {
    dispatch(chagneConsensusFactors(payload));
  }, []);

  return {
    backTest,
    handleBackTestTitle,
    handleUniversSettings,
    handleInitialfilters,
    handleExceptSectors,
    handleCalculationWeight,
    handleValueFactors,
    handleEvFactors,
    handleQualityFactors,
    handlePriceFactors,
    handleGrowthPotentialFactors,
    handleAccelerationFactors,
    handleConsensusFactors,
  };
}
