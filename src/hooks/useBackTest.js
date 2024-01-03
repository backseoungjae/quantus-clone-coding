import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addMacroMarketSettings,
  allRemoveMacroMarketSettings,
  changeCalculationWeight,
  checkedConsensusFactors,
  checkedPriceFactors,
  checkedQualityFactors,
  checkedAccelerationFactors,
  changeBackTestTitle,
  changeBacktestSettings,
  changeDate,
  checkedEvFactors,
  changeExceptSectors,
  checkedGrowthPotentialFactors,
  changeInitialfilters,
  changeMacroMarketSettings,
  changeMonthList,
  changeReentryMarketSettings,
  changeSplitMode,
  changeUniversSettings,
  checkedValueFactors,
  removeMacroMarketSettings,
  changeValueFactors,
  changeConsensusFactors,
  changeAccelerationFactors,
  changeGrowthFactors,
  changePriceFactors,
  changeQualityFactors,
  changeEvFactors,
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
    dispatch(changeCalculationWeight(payload));
  }, []);

  // 가치 팩터 부분
  const handleValueFactors = useCallback((payload) => {
    dispatch(checkedValueFactors(payload));
  }, []);

  // ev 팩터 부분
  const handleEvFactors = useCallback((payload) => {
    dispatch(checkedEvFactors(payload));
  }, []);

  // 퀄리티 팩터 부분
  const handleQualityFactors = useCallback((payload) => {
    dispatch(checkedQualityFactors(payload));
  }, []);

  // 가격 팩터 부분
  const handlePriceFactors = useCallback((payload) => {
    dispatch(checkedPriceFactors(payload));
  }, []);

  // 성장성 팩터 부분
  const handleGrowthPotentialFactors = useCallback((payload) => {
    dispatch(checkedGrowthPotentialFactors(payload));
  }, []);

  // 가속 팩터 부분
  const handleAccelerationFactors = useCallback((payload) => {
    dispatch(checkedAccelerationFactors(payload));
  }, []);

  // 컨센선스 팩터 부분
  const handleConsensusFactors = useCallback((payload) => {
    dispatch(checkedConsensusFactors(payload));
  }, []);

  // 팩터 아래 추가 되는 부분
  const handleChangeValueFactors = useCallback((index, name, value) => {
    dispatch(changeValueFactors(index, name, value));
  }, []);

  const handleChangeEvFactors = useCallback((index, name, value) => {
    dispatch(changeEvFactors(index, name, value));
  }, []);

  const handleChangeQualityFactors = useCallback((index, name, value) => {
    dispatch(changeQualityFactors(index, name, value));
  }, []);

  const handleChangePriceFactors = useCallback((index, name, value) => {
    dispatch(changePriceFactors(index, name, value));
  }, []);

  const handleChangeGrowthFactors = useCallback((index, name, value) => {
    dispatch(changeGrowthFactors(index, name, value));
  }, []);

  const handleChangeAccelerationFactors = useCallback((index, name, value) => {
    dispatch(changeAccelerationFactors(index, name, value));
  }, []);

  const handleChangeConsensusFactors = useCallback((index, name, value) => {
    dispatch(changeConsensusFactors(index, name, value));
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
    handleChangeValueFactors,
    handleChangeEvFactors,
    handleChangeQualityFactors,
    handleChangePriceFactors,
    handleChangeGrowthFactors,
    handleChangeAccelerationFactors,
    handleChangeConsensusFactors,
    handleDate,
  };
}
