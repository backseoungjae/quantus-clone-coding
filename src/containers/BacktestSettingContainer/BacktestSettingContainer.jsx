import React, { useCallback, useEffect, useState } from "react";
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
    onAllRemoveMacroMarketSettings,
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

  useEffect(() => {
    if (splitMode !== 2 && backTest?.macroMarketTiming?.length === 0) {
      setSplitMode(0);
    }
    handleSplitMode(splitMode);
  }, [splitMode, handleSplitMode, backTest?.macroMarketTiming]);

  // 마켓 타이밍 토글 부분
  const handleMacroToggle = useCallback(
    (i) => {
      setMacroToggle({
        ...macroToggle,
        [i]: !macroToggle[i],
      });
    },
    [macroToggle]
  );

  const handleChangeMacroMarketSettings = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      handleMacroMarketSettings(index, name, value);
      setMacroToggle(false);
    },
    [handleMacroMarketSettings]
  );

  // 매크로 마켓 추가 삭제 부분
  const handleAddMacroMarketSettings = useCallback(() => {
    const addMacroMarket = {
      marketTimingList: "",
      marketTimingFilter: "",
      marketTimingValue: "",
    };

    onAddMacroMarketSettings(addMacroMarket);
  }, [onAddMacroMarketSettings]);

  const handleRemoveMacroMarketSettings = useCallback(
    (i) => {
      onRemoveMacroMarketSettings(i);
    },
    [onRemoveMacroMarketSettings]
  );

  // 마켓 타이밍 재진입 부분
  const handleChangeReentryMarketSettings = useCallback(
    (e) => {
      handleReentryMarketSettings({
        [e.target.name]: e.target.value,
      });
    },
    [handleReentryMarketSettings]
  );

  // 스플릿 변경
  const handleChagneSplit = useCallback(
    (i) => {
      if (i === 1) {
        handleAddMacroMarketSettings();
      }
      if (i === 2) {
        onAllRemoveMacroMarketSettings();
      }
      setSplitMode(i);
    },
    [handleAddMacroMarketSettings, onAllRemoveMacroMarketSettings]
  );

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

  // 마지막 버튼 이벤트

  const handleVerification = useCallback((text) => {
    alert(`${text} 완료 되었습니다.`);
  }, []);

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
      handleChangeMacroMarketSettings={handleChangeMacroMarketSettings}
      handleAddMacroMarketSettings={handleAddMacroMarketSettings}
      handleRemoveMacroMarketSettings={handleRemoveMacroMarketSettings}
      handleVerification={handleVerification}
      // 기간설정부분
      dateStart={dateStart}
      dateEnd={dateEnd}
      startMinDate={startMinDate}
      endMinDate={endMinDate}
      handleStartDateToggle={handleStartDateToggle}
      handleEndDateToggle={handleEndDateToggle}
      handleChangeStartDate={handleChangeStartDate}
      handleChangeEndDate={handleChangeEndDate}
    />
  );
}
