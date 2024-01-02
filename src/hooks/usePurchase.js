import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePurchaseSettings } from "store/modules/purchase";

export default function usePurchase() {
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  const handlePurchaseSettings = useCallback((payload) => {
    dispatch(changePurchaseSettings(payload));
  }, []);

  return {
    purchase,
    handlePurchaseSettings,
  };
}
