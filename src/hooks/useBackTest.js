import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addMacroMarketSettings,
  allRemoveMacroMarketSettings,
  chagneCalculationWeight,
  chagneConsensusFactors,
  chagnePriceFactors,
  chagneQualityFactors,
  changeAccelerationFactors,
  changeBackTestTitle,
  changeBacktestSettings,
  changeDate,
  changeEvFactors,
  changeExceptSectors,
  changeGrowthPotentialFactors,
  changeInitialfilters,
  changeMacroMarketSettings,
  changeMonthList,
  changeReentryMarketSettings,
  changeSplitMode,
  changeUniversSettings,
  changeValueFactors,
  removeMacroMarketSettings,
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

  // 백테스트 설정 부분
  const handleBacktestSettings = useCallback((payload) => {
    dispatch(changeBacktestSettings(payload));
  }, []);

  // 백테스트 시그널리티 부분
  const handleMonthList = useCallback((payload) => {
    dispatch(changeMonthList(payload));
  }, []);

  // 매크로 마켓 타이밍 부분
  const handleMacroMarketSettings = useCallback((index, name, value) => {
    dispatch(changeMacroMarketSettings(index, name, value));
  }, []);

  // 재진입 마켓 타이밍 부분
  const handleReentryMarketSettings = useCallback((payload) => {
    dispatch(changeReentryMarketSettings(payload));
  }, []);

  // 매크로 마켓 타이밍 추가 부분
  const onAddMacroMarketSettings = useCallback((payload) => {
    dispatch(addMacroMarketSettings(payload));
  }, []);

  // 매크로 마켓 타이밍 제거 부분
  const onRemoveMacroMarketSettings = useCallback((payload) => {
    dispatch(removeMacroMarketSettings(payload));
  }, []);

  // 매크로 마켓 타이밍 전체 제거 부분
  const onAllRemoveMacroMarketSettings = useCallback(() => {
    dispatch(allRemoveMacroMarketSettings());
  }, []);

  // 스플릿 모드
  const handleSplitMode = useCallback((payload) => {
    dispatch(changeSplitMode(payload));
  }, []);

  // 백테스트 기간 설정 부분
  const handleDate = useCallback((payload) => {
    dispatch(changeDate(payload));
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
    handleBacktestSettings,
    handleMonthList,
    handleMacroMarketSettings,
    handleReentryMarketSettings,
    handleSplitMode,
    onAddMacroMarketSettings,
    onRemoveMacroMarketSettings,
    onAllRemoveMacroMarketSettings,
    handleDate,
  };
}
