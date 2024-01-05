import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStrategy,
  changeSingleStockOptiomizationSettings,
  changeSingleStockSettings,
  changeRiskFree,
  changeSplit,
  changeDate,
  changeAssetClassSettings,
} from "store/modules/partner";

export default function usePartner() {
  const partner = useSelector((state) => state.partner);
  const dispatch = useDispatch();

  // 제목 부분
  const handleStrategy = useCallback((payload) => {
    dispatch(changeStrategy(payload));
  }, []);

  // 스플릿 변경 부분
  const handleSplit = useCallback((payload) => {
    dispatch(changeSplit(payload));
  }, []);

  // 단일 종목 최적화 부분
  const handleSingleStockOptiomizationSettings = useCallback(
    (category, field, value) => {
      dispatch(changeSingleStockOptiomizationSettings(category, field, value));
    },
    []
  );

  const handleRiskFree = useCallback((payload) => {
    dispatch(changeRiskFree(payload));
  }, []);

  // 단일 종목 부분
  const handleSingleStockSettings = useCallback((payload) => {
    dispatch(changeSingleStockSettings(payload));
  }, []);

  // 자산군 부분
  const handleAssetClassSettings = useCallback((payload) => {
    dispatch(changeAssetClassSettings(payload));
  }, []);

  // 날짜 변경 부분
  const handleDate = useCallback((payload) => {
    dispatch(changeDate(payload));
  }, []);

  return {
    partner,
    handleStrategy,
    handleSplit,
    handleSingleStockOptiomizationSettings,
    handleRiskFree,
    handleSingleStockSettings,
    handleAssetClassSettings,
    handleDate,
  };
}
