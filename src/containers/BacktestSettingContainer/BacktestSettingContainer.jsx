import React, { useCallback, useEffect, useMemo, useState } from "react";
import BacktestSetting from "components/BacktestSetting";
import useBackTest from "hooks/useBackTest";
import dayjs from "dayjs";

export default function BacktestSettingContainer() {
  const {
    backTest,
    handleBackTestTitle,
    handleBacktestSettings,
    handleMonthList,
    handleMacroMarketSettings,
    onAddMacroMarketSettings,
    onRemoveMacroMarketSettings,
    handleReentryMarketSettings,
    handleSplitMode,
    handleDate,
  } = useBackTest();

  // 토글 이벤트 부분
  const [rebalancingToggle, setRebalancingToggle] = useState(false);
  const [specificControlToggle, setSpecificControlToggle] = useState(false);

  const handleRebalancingToggle = useCallback(() => {
    setRebalancingToggle((prev) => !prev);
  }, []);

  const handleSpecificControlToggle = useCallback(() => {
    setSpecificControlToggle((prev) => !prev);
  }, []);

  // 제목 변경 부분
  const handleChangeBackTestTitle = useCallback(
    (e) => {
      handleBackTestTitle({ [e.target.name]: e.target.value });
    },
    [handleBackTestTitle]
  );

  // 하위 백테스트 설정 변경 부분
  const handleChangeBacktestSettings = useCallback(
    (e) => {
      handleBacktestSettings({ [e.target.name]: e.target.value });
      setRebalancingToggle(false);
      setSpecificControlToggle(false);
    },
    [handleBacktestSettings]
  );

  // 시즈널리티 기간 선택
  const handleAddMonthList = useCallback(
    (month) => {
      if (!backTest?.backtestSettings?.seasonalityMonthList.includes(month)) {
        handleMonthList(
          backTest?.backtestSettings?.seasonalityMonthList?.concat(month)
        );
      }
      if (backTest?.backtestSettings?.seasonalityMonthList.includes(month)) {
        handleMonthList(
          backTest?.backtestSettings?.seasonalityMonthList?.filter(
            (el) => el !== month
          )
        );
      }
    },
    [handleMonthList, backTest?.backtestSettings?.seasonalityMonthList]
  );

  // 마켓 타이밍 이벤트 부분
  const [macroToggle, setMacroToggle] = useState(false);
  const [splitMode, setSplitMode] = useState(backTest?.splitMode);
  const handleChagneSplit = useCallback((i) => {
    setSplitMode(i);
  }, []);

  useEffect(() => {
    handleSplitMode(splitMode);
  }, [splitMode, handleSplitMode]);

  const handleChangeReentryMarketSettings = useCallback(
    (e) => {
      handleReentryMarketSettings({ [e.target.name]: e.target.value });
    },
    [handleReentryMarketSettings]
  );

  const handleMacroToggle = useCallback(() => {
    setMacroToggle((prev) => !prev);
  }, []);

  // 날짜 변경
  const [dateStart, setDateStart] = useState(false);
  const [dateEnd, setDateEnd] = useState(false);

  // 최소 날짜 선택
  const startMinDate = new Date(
    dayjs().clone().startOf("year").format("YYYY-MM-DD")
  );
  const endMinDate = new Date(backTest?.period?.startDate);

  const handleStartDateToggle = useCallback(() => {
    setDateStart((prev) => !prev);
  }, []);

  const handleEndDateToggle = useCallback(() => {
    setDateEnd((prev) => !prev);
  }, []);

  const handleChangeStartDate = useCallback(
    (selectDate) => {
      handleDate({
        startDate: dayjs(selectDate).format("YYYY.MM.DD"),
      });
      setDateStart(false);
    },
    [handleDate]
  );

  const handleChangeEndDate = useCallback(
    (selectDate) => {
      handleDate({
        endDate: dayjs(selectDate).format("YYYY.MM.DD"),
      });
      setDateEnd(false);
    },
    [handleDate]
  );

  // 매크로 마켓 부분
  const handleAddMacroMarketSettings = useCallback(() => {
    const addMacroMarket = {
      marketTimingList: "",
      marketTimingFilter: "",
      marketTimingValue: "",
    };

    onAddMacroMarketSettings(
      backTest?.macroMarketTiming?.concat(addMacroMarket)
    );
  }, [backTest?.macroMarketTiming, onAddMacroMarketSettings]);

  const handleRemoveMacroMarketSettings = useCallback(
    (i) => {
      onRemoveMacroMarketSettings(i);
    },
    [onRemoveMacroMarketSettings]
  );

  // 설정 값 초기화 이벤트
  const handleReset = useCallback(() => {
    if (window.confirm("설정 값을 초기화 하시겠습니까?")) {
      sessionStorage.clear();
      window.location.reload();
    }
  }, []);

  console.log("backtest ", backTest);

  return (
    <BacktestSetting
      backTest={backTest}
      rebalancingToggle={rebalancingToggle}
      specificControlToggle={specificControlToggle}
      splitMode={splitMode}
      handleChagneSplit={handleChagneSplit}
      handleChangeBackTestTitle={handleChangeBackTestTitle}
      handleChangeBacktestSettings={handleChangeBacktestSettings}
      handleAddMonthList={handleAddMonthList}
      handleRebalancingToggle={handleRebalancingToggle}
      handleSpecificControlToggle={handleSpecificControlToggle}
      handleChangeReentryMarketSettings={handleChangeReentryMarketSettings}
      macroToggle={macroToggle}
      handleMacroToggle={handleMacroToggle}
      handleAddMacroMarketSettings={handleAddMacroMarketSettings}
      handleRemoveMacroMarketSettings={handleRemoveMacroMarketSettings}
      // 기간설정부분
      dateStart={dateStart}
      dateEnd={dateEnd}
      startMinDate={startMinDate}
      endMinDate={endMinDate}
      handleStartDateToggle={handleStartDateToggle}
      handleEndDateToggle={handleEndDateToggle}
      handleChangeStartDate={handleChangeStartDate}
      handleChangeEndDate={handleChangeEndDate}
      handleReset={handleReset}
    />
  );
}
