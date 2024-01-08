import React, { useCallback, useEffect, useRef, useState } from "react";
import StaticAlloc from "components/StaticAlloc";
import useAlloc from "hooks/useAlloc";
import dayjs from "dayjs";
import * as api from "apis";

export default function StaticAllocContainer() {
  const {
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
    handleReentryMarketSettings,
    handleSplitMode,
  } = useAlloc();

  // 토글 이벤트
  const [distributionToggle, setDistributionToggle] = useState(false);
  const [rebalancingToggle, setRebalancingToggle] = useState(false);

  const handleDistributionToggle = useCallback(() => {
    setDistributionToggle((prev) => !prev);
  }, []);

  const handleRebalancingToggle = useCallback(() => {
    setRebalancingToggle((prev) => !prev);
  }, []);

  // 전략 이름 이벤트
  const handleChangeAllocTitle = useCallback(
    (e) => {
      handleAllocStrategy({ [e.target.name]: e.target.value });
    },
    [handleAllocStrategy]
  );

  // 자산배분 설정 부분
  const handleChangeAllocSetting = useCallback(
    (e) => {
      const value =
        e.target.type === "number"
          ? parseFloat(e.target.value)
          : e.target.value;

      handleAllocSetting({
        [e.target.name]: value,
      });
      setDistributionToggle(false);
      setRebalancingToggle(false);
    },
    [handleAllocSetting]
  );

  // 시즈널리티 기간 선택
  const handleAddMonthList = useCallback(
    (month) => {
      if (!alloc?.settings?.seasonalityMonthList.includes(month)) {
        handleMonthList(alloc?.settings?.seasonalityMonthList?.concat(month));
      }
      if (alloc?.settings?.seasonalityMonthList.includes(month)) {
        handleMonthList(
          alloc?.settings?.seasonalityMonthList?.filter((el) => el !== month)
        );
      }
    },
    [handleMonthList, alloc?.settings?.seasonalityMonthList]
  );

  // 자산군 펼기치 이벤트
  const [assetClass, setAssetCalss] = useState(false);

  const handleAssetToggle = useCallback(() => {
    setAssetCalss((prev) => !prev);
  }, []);

  // 자산군 옵션 펼치기
  const [kindToggle, setKindToogle] = useState(false);
  const [assetClassToggle, setAssetClassToggle] = useState(false);

  const handleKindToggle = useCallback(
    (i) => {
      setKindToogle({
        ...kindToggle,
        [i]: !kindToggle[i],
      });
    },
    [kindToggle]
  );

  const handleAssetClassToggle = useCallback(
    (i) => {
      setAssetClassToggle({
        ...assetClassToggle,
        [i]: !assetClassToggle[i],
      });
    },
    [assetClassToggle]
  );

  const handleAddAssetList = useCallback(() => {
    const addListItem = {
      kind: "전략",
      assetClass: "",
      ratio: 0,
      isReflectExchangeRate: false,
    };
    handleAddAsset(addListItem);
  }, [handleAddAsset]);

  const handleChangeAsset = useCallback(
    (e, index) => {
      const { name, value } = e.target;
      hadnleAllocAsset(index, name, value);
      setKindToogle(false);
      setAssetClassToggle(false);
    },
    [hadnleAllocAsset]
  );

  // 자산군 삭제 부분
  const handleRemoveAssetClass = useCallback(
    (i) => {
      handleRemoveAsset(i);
    },
    [handleRemoveAsset]
  );

  // 날짜 변경
  const [dateStart, setDateStart] = useState(false);
  const [dateEnd, setDateEnd] = useState(false);

  // 최소 날짜 선택
  const startMinDate = new Date(
    dayjs().clone().startOf("year").format("YYYY-MM-DD")
  );
  const endMinDate = new Date(alloc?.period?.startDate);

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

  // 데이터 가져오는 부분
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

  const filterData = data?.filter((item) =>
    alloc.assetList.some((asset) => {
      if (asset.kind === "전략") {
        return null;
      }
      if (
        asset.kind === "한국 자산군" &&
        asset.kind.includes(item.category) &&
        item.country.includes("KR")
      ) {
        return item;
      }
      if (
        asset.kind === "미국 자산군" &&
        asset.kind.includes(item.category) &&
        item.country.includes("US")
      ) {
        return item;
      } else {
        return item.category === asset.kind;
      }
    })
  );

  // 전체 체크박스
  const handleCheckedAllEntireExchangeRate = useCallback(() => {
    onCheckedAllEntireExchangeRate();
  }, [onCheckedAllEntireExchangeRate]);

  // 개별 체크박스
  const handleCheckedReflectExchangeRate = useCallback(
    (index) => {
      onCheckedReflectExchangeRate(index);
    },
    [onCheckedReflectExchangeRate]
  );

  // 마켓 부분
  const handleChangeReentryMarketSettings = useCallback(
    (e) => {
      handleReentryMarketSettings({
        [e.target.name]: e.target.value,
      });
    },
    [handleReentryMarketSettings]
  );

  // 스플릿 변경
  const handleChangeSplit = useCallback(
    (i) => {
      handleSplitMode(i);
    },
    [handleSplitMode]
  );

  // 하단으로 이동 스크롤 이벤트
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight;
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <StaticAlloc
      alloc={alloc}
      setting={alloc?.settings}
      distributionToggle={distributionToggle}
      rebalancingToggle={rebalancingToggle}
      handleDistributionToggle={handleDistributionToggle}
      handleRebalancingToggle={handleRebalancingToggle}
      handleChangeAllocTitle={handleChangeAllocTitle}
      handleChangeAllocSetting={handleChangeAllocSetting}
      handleAddMonthList={handleAddMonthList}
      handleCheckedAllEntireExchangeRate={handleCheckedAllEntireExchangeRate}
      handleCheckedReflectExchangeRate={handleCheckedReflectExchangeRate}
      handleChangeReentryMarketSettings={handleChangeReentryMarketSettings}
      handleChangeSplit={handleChangeSplit}
      scrollRef={scrollRef}
      scrollToBottom={scrollToBottom}
      // 자산군 부분
      data={filterData}
      assetClass={assetClass}
      kindToggle={kindToggle}
      assetClassToggle={assetClassToggle}
      handleAssetToggle={handleAssetToggle}
      handleKindToggle={handleKindToggle}
      handleAssetClassToggle={handleAssetClassToggle}
      handleAddAssetList={handleAddAssetList}
      handleChangeAsset={handleChangeAsset}
      handleRemoveAssetClass={handleRemoveAssetClass}
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
