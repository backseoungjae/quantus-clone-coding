import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeAsset,
  chagneStrategy,
  changeAllocSetting,
  addAsset,
  changeAllocMonthList,
  changeDate,
  removeAsset,
  checkedAllEntireExchangeRate,
  checkedReflectExchangeRate,
} from "store/modules/alloc";

export default function useAlloc() {
  const alloc = useSelector((state) => state.alloc);
  const dispatch = useDispatch();

  // 전략 이름 설정 인풋 창
  const handleAllocStrategy = useCallback(
    (payload) => {
      dispatch(chagneStrategy(payload));
    },
    [dispatch]
  );

  // 자산배분 설정 인풋 창 변경
  const handleAllocSetting = useCallback(
    (payload) => {
      dispatch(changeAllocSetting(payload));
    },
    [dispatch]
  );

  // 시즈널리티 기간 변경
  const handleMonthList = useCallback(
    (payload) => {
      dispatch(changeAllocMonthList(payload));
    },
    [dispatch]
  );

  // 자산군 추가
  const handleAddAsset = useCallback(
    (payload) => {
      dispatch(addAsset(payload));
    },
    [dispatch]
  );

  // 자산군 추가 인풋창
  const hadnleAllocAsset = useCallback(
    (index, name, value) => {
      dispatch(changeAsset(index, name, value));
    },
    [dispatch]
  );

  // 자산군 삭제
  const handleRemoveAsset = useCallback((payload) => {
    dispatch(removeAsset(payload));
  }, []);

  // 기간 설정
  const handleDate = useCallback(
    (payload) => {
      dispatch(changeDate(payload));
    },
    [dispatch]
  );

  // 전체 환율 반영
  const onCheckedAllEntireExchangeRate = useCallback(() => {
    dispatch(checkedAllEntireExchangeRate());
  }, []);

  // 개별 환율 반영
  const onCheckedReflectExchangeRate = useCallback((payload) => {
    dispatch(checkedReflectExchangeRate(payload));
  }, []);

  return {
    alloc,
    handleAllocStrategy,
    handleAllocSetting,
    handleMonthList,
    handleAddAsset,
    hadnleAllocAsset,
    handleRemoveAsset,
    handleDate,
    onCheckedAllEntireExchangeRate,
    onCheckedReflectExchangeRate,
  };
}
