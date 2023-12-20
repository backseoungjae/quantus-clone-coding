import React, { useCallback, useEffect, useRef, useState } from "react";
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

  // 커스텀 필터 토글 이벤트
  const [customToggle, setCusetomToggle] = useState(false);

  const handleCustomToggle = useCallback(() => {
    setCusetomToggle((prev) => !prev);
  }, []);

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

  // 순위 결정 드래그 이벤트 부분

  const dragItem = useRef();
  const dragOverItem = useRef();

  // 드래그가 실행 되었을 때
  const dragStart = useCallback((position) => {
    dragItem.current = position;
  }, []);

  // 드래그 중인 대상이 위로 포개졌을 때
  const dragEnter = useCallback((position) => {
    dragOverItem.current = position;
  }, []);

  // 드랍(커서을 때었을 때)
  const drop = useCallback(
    (e) => {
      const newList = [...initialCheckList];
      const dropItemValue = newList[dragItem.current];
      newList.splice(dragItem.current, 1);
      newList.splice(dragOverItem.current, 0, dropItemValue);
      dragItem.current = null;
      dragOverItem.current = null;
      setInitialCheckList(newList);
    },
    [initialCheckList]
  );

  //   const moveItemHandler = (dragIndex, hoverIndex) => {
  //     const dragItem = initialCheckList[dragIndex];

  //     // 1. 사용자가 item을 드래그하고 있다면
  //     if (dragItem) {
  //       setInitialCheckList((prevState) => {
  //         // 2. 기존의 데이터(prevState)를 새로운 변수에 복사한다.
  //         const coppiedStateArray = [...prevState];

  //         // 3. splice로 hoverIndex 위치부터 1개의 데이터를 제거한 후,
  //         // 삭제한 index 위치에 현재 드래그하고 있는 item 데이터를 넣는다.
  //         // -> 삭제된 요소들의 배열은 prevItem 변수에 저장된다.
  //         const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

  //         // 4. 3번과 마찬가지의 과정을 거친 후
  //         coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

  //         // 5. coppiedStateArray 배열을 return
  //         return coppiedStateArray;
  //       });
  //     }
  //   };

  console.log("backTest ", backTest);

  return (
    <Backtest
      backTest={backTest}
      toggle={toggle}
      initialCheckList={initialCheckList}
      exceptLists={exceptLists}
      customToggle={customToggle}
      handleCustomToggle={handleCustomToggle}
      handleToggle={handleToggle}
      handleChagneBackTestTitle={handleChagneBackTestTitle}
      handleChangeUniversSettings={handleChangeUniversSettings}
      onClickCheckAll={onClickCheckAll}
      onCheckedItem={onCheckedItem}
      isChecked={isChecked}
      onCheckedExceptItem={onCheckedExceptItem}
      isCheckedExcept={isCheckedExcept}
      dragStart={dragStart}
      dragEnter={dragEnter}
      drop={drop}
      //   moveItemHandler={moveItemHandler}
      INITIAL_FITERS={INITIAL_FITERS}
      EXCEPT_SECTORS={EXCEPT_SECTORS}
    />
  );
}
