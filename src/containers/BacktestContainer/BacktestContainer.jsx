import React, { useCallback, useEffect, useState } from "react";
import Backtest from "components/Backtest";
import useBackTest from "hooks/useBackTest";
import { EXCEPT_SECTORS, INITIAL_FITERS } from "mocks/subData";

export default function BacktestContainer() {
  const {
    backTest,
    handleBackTestTitle,
    handleUniversSettings,
    handleInitialfilters,
    handleExceptSectors,
  } = useBackTest();

  // 유니버스 선택 토글 이벤트
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

  // 유니버스 선택 이벤트
  const handleChangeUniversSettings = useCallback(
    (e) => {
      handleUniversSettings({ [e.target.name]: e.target.value });
      setToggle(false);
    },
    [handleUniversSettings]
  );

  // 기본 필터 리스트 이벤트

  const [initialCheckList, setInitialCheckList] = useState(
    backTest?.settings?.initialFilters
  );

  const onClickCheckAll = useCallback(() => {
    if (initialCheckList.length !== INITIAL_FITERS.length) {
      setInitialCheckList(INITIAL_FITERS);
    } else {
      setInitialCheckList([]);
    }
  }, [initialCheckList]);

  const onCheckedItem = useCallback(
    (list) => {
      if (initialCheckList.every((el) => el.id !== list.id)) {
        setInitialCheckList([...initialCheckList, list]);
      } else {
        const result = initialCheckList.filter((el) => el.id !== list.id);
        setInitialCheckList(result);
      }
    },
    [initialCheckList]
  );

  const isChecked = useCallback(
    (list) => {
      return initialCheckList.some((el) => el.id === list.id);
    },
    [initialCheckList]
  );

  useEffect(() => {
    handleInitialfilters([...initialCheckList]);
  }, [handleInitialfilters, initialCheckList]);

  // 제외 항목 리스트 이벤트

  const [exceptLists, setExceptLists] = useState(
    backTest?.settings?.exceptSectors
  );

  const onCheckedExceptItem = useCallback(
    (list) => {
      if (exceptLists.every((el) => el.id !== list.id)) {
        setExceptLists([...exceptLists, list]);
      } else {
        const result = exceptLists.filter((el) => el.id !== list.id);
        setExceptLists(result);
      }
    },
    [exceptLists]
  );

  const isCheckedExcept = useCallback(
    (list) => {
      return exceptLists.some((el) => el.id === list.id);
    },
    [exceptLists]
  );

  useEffect(() => {
    handleExceptSectors([...exceptLists]);
  }, [handleExceptSectors, exceptLists]);

  console.log("backTest ", backTest);

  return (
    <Backtest
      backTest={backTest}
      toggle={toggle}
      initialCheckList={initialCheckList}
      exceptLists={exceptLists}
      handleToggle={handleToggle}
      handleChagneBackTestTitle={handleChagneBackTestTitle}
      handleChangeUniversSettings={handleChangeUniversSettings}
      onClickCheckAll={onClickCheckAll}
      onCheckedItem={onCheckedItem}
      isChecked={isChecked}
      onCheckedExceptItem={onCheckedExceptItem}
      isCheckedExcept={isCheckedExcept}
      INITIAL_FITERS={INITIAL_FITERS}
      EXCEPT_SECTORS={EXCEPT_SECTORS}
    />
  );
}
