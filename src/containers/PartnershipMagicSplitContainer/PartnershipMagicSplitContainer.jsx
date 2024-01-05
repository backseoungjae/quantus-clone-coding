import React, { useCallback, useEffect, useState } from "react";
import PartnershipMagicSplit from "components/PartnershipMagicSplit";
import usePartner from "hooks/usePartner";
import dayjs from "dayjs";
import * as api from "apis";

export default function PartnershipMagicSplitContainer() {
  const {
    partner,
    handleStrategy,
    handleSplit,
    handleSingleStockOptiomizationSettings,
    handleRiskFree,
    handleAssetClassSettings,
    handleDate,
  } = usePartner();

  const [toggle, setToggle] = useState({
    kind: false,
    assetClass: false,
  });

  const handleToggle = (key) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [key]: !prevToggle[key],
    }));
  };

  // 전략 이름 이벤트
  const handleChangeStrategy = useCallback(
    (e) => {
      handleStrategy({
        [e.target.name]: e.target.value,
      });
    },
    [handleStrategy]
  );

  // 스플릿 변경
  const handleChangeSplit = useCallback(
    (i) => {
      handleSplit(i);
    },
    [handleSplit]
  );

  // 단일 종목 최적화 부분 3개 인풋 부분
  const handleChangeSingleStockOptiomizationSettings = useCallback(
    (category, filed, value) => {
      handleSingleStockOptiomizationSettings(category, filed, value);
    },
    [handleSingleStockOptiomizationSettings]
  );

  // 단일 종목 최적화 부분 무위험 이자 수익 부분
  const handleChangeRiskFree = useCallback(
    (e) => {
      handleRiskFree({ [e.target.name]: e.target.value });
    },
    [handleRiskFree]
  );

  // 자산군 선택 부분
  const handleChangeAssetClassSettings = useCallback(
    (e) => {
      handleAssetClassSettings({
        [e.target.name]: e.target.value,
      });
      setToggle((prevToggle) => ({
        ...prevToggle,
        [e.target.name]: !prevToggle[e.target.name],
      }));
    },
    [handleAssetClassSettings]
  );

  // 자산군 데이터 불러오는 곳
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getStockList();
        setData(res?.data?.stocks);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const filterData = data?.filter(
    (item) => item?.category === partner.assetClassSettings.kind
  );

  // 날짜 변경
  const [dateStart, setDateStart] = useState(false);
  const [dateEnd, setDateEnd] = useState(false);

  // 최소 날짜 선택
  const startMinDate = new Date(
    dayjs().clone().startOf("year").format("YYYY-MM-DD")
  );
  const endMinDate = new Date(partner?.period?.startDate);

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

  console.log("partner ", partner);

  return (
    <PartnershipMagicSplit
      partner={partner}
      partnerSetting={partner?.singleStockOptimizationSettings}
      split={partner?.magicSplit}
      toggle={toggle}
      handleChangeStrategy={handleChangeStrategy}
      handleChangeSplit={handleChangeSplit}
      handleChangeSingleStockOptiomizationSettings={
        handleChangeSingleStockOptiomizationSettings
      }
      handleChangeRiskFree={handleChangeRiskFree}
      handleToggle={handleToggle}
      handleChangeAssetClassSettings={handleChangeAssetClassSettings}
      filterData={filterData}
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
