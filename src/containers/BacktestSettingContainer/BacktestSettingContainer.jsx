import React, { useCallback, useState } from "react";
import BacktestSetting from "components/BacktestSetting";
import useBackTest from "hooks/useBackTest";
import dayjs from "dayjs";

export default function BacktestSettingContainer() {
  const {
    backTest,
    handleBackTestTitle,
    handleBacktestSettings,
    handleMonthList,
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

  const { transactionFee, rebalancingItems, stopStandard, lossStandard } =
    backTest?.backtestSettings;

  // 하위 백테스트 설정 변경 부분
  const handleChangeBacktestSettings = useCallback(
    (e) => {
      if (transactionFee || rebalancingItems || stopStandard || lossStandard) {
        handleBacktestSettings({ [e.target.name]: Number(e.target.value) });
      } else {
        handleBacktestSettings({ [e.target.name]: e.target.value });
      }
      setRebalancingToggle(false);
      setSpecificControlToggle(false);
    },
    [
      handleBacktestSettings,
      transactionFee,
      rebalancingItems,
      stopStandard,
      lossStandard,
    ]
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

  console.log("backtest ", backTest);
  console.log("backTest?.period ", backTest?.period);

  return (
    <BacktestSetting
      backTest={backTest}
      rebalancingToggle={rebalancingToggle}
      specificControlToggle={specificControlToggle}
      handleChangeBackTestTitle={handleChangeBackTestTitle}
      handleChangeBacktestSettings={handleChangeBacktestSettings}
      handleAddMonthList={handleAddMonthList}
      handleRebalancingToggle={handleRebalancingToggle}
      handleSpecificControlToggle={handleSpecificControlToggle}
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
