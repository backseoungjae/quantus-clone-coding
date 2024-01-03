import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addMacroMarketSettings,
  allRemoveMacroMarketSettings,
  changeCalculationWeight,
  changeBackTestTitle,
  changeBacktestSettings,
  changeDate,
  changeExceptSectors,
  changeInitialfilters,
  changeMacroMarketSettings,
  changeMonthList,
  changeReentryMarketSettings,
  changeSplitMode,
  changeUniversSettings,
  removeMacroMarketSettings,
  checkedFactors,
  changeFactors,
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

  // 팩터 체크 박스 부분
  const handleCheckedFactors = useCallback((factorType, payload) => {
    dispatch(checkedFactors(factorType, payload));
  }, []);

  // 팩터 아래 추가 되는 부분
  const changeValueFactors = useCallback((index, name, value) => {
    dispatch(changeFactors("valueFactors", index, name, value));
  }, []);

  const changeEvFactors = useCallback((index, name, value) => {
    dispatch(changeFactors("evFactors", index, name, value));
  }, []);

  const changeQualityFactors = useCallback((index, name, value) => {
    dispatch(changeFactors("qualityFactors", index, name, value));
  }, []);

  const changePriceFactors = useCallback((index, name, value) => {
    dispatch(changeFactors("priceFactors", index, name, value));
  }, []);

  const changeGrowthFactors = useCallback((index, name, value) => {
    dispatch(changeFactors("growthPotentialFactors", index, name, value));
  }, []);

  const changeAccelerationFactors = useCallback((index, name, value) => {
    dispatch(changeFactors("accelerationFactors", index, name, value));
  }, []);

  const changeConsensusFactors = useCallback((index, name, value) => {
    dispatch(changeFactors("consensusFactors", index, name, value));
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
    handleBacktestSettings,
    handleMonthList,
    handleMacroMarketSettings,
    handleReentryMarketSettings,
    handleSplitMode,
    onAddMacroMarketSettings,
    onRemoveMacroMarketSettings,
    onAllRemoveMacroMarketSettings,
    handleCheckedFactors,
    changeValueFactors,
    changeEvFactors,
    changeQualityFactors,
    changePriceFactors,
    changeGrowthFactors,
    changeAccelerationFactors,
    changeConsensusFactors,
    handleDate,
  };
}
